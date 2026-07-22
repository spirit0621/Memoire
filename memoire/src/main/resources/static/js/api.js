import { state } from './state.js';
import { navigateTo } from './router.js';

// --- API Service ---
export const api = {
    async login(email, password) {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (res.ok) {
                const user = await res.json();
                user.fullName = `${user.firstName} ${user.lastName}`; // Construct fullName
                state.user = user;
                localStorage.setItem('paymaster_user', JSON.stringify(user));
                return true;
            }
            return false;
        } catch (e) {
            console.error(e);
            return false;
        }
    },
    logout() {
        state.user = null;
        localStorage.removeItem('paymaster_user');
        navigateTo('login');
    },
    async fetchAll() {
        if (!state.user) return;
        try {
            if (state.user.role === 'ADMIN' || state.user.role === 'RH') {
                const [emps, pays, vars, depts] = await Promise.all([
                    fetch('/api/employees').then(r => r.json()),
                    fetch('/api/payslips').then(r => r.json()),
                    fetch('/api/variables').then(r => r.json()),
                    fetch('/api/departments').then(r => r.json())
                ]);
                state.employees = emps;
                state.payslips = pays;
                state.variables = vars;
                state.departments = depts;
            } else {
                const pays = await fetch(`/api/payslips?employeeId=${state.user.employeeId}`).then(r => r.json());
                state.payslips = pays;
                // Injecter l'employé courant en local pour satisfaire le filtre du front-end
                state.employees = [{
                    id: state.user.employeeId,
                    firstName: state.user.firstName,
                    lastName: state.user.lastName,
                    establishment: state.user.establishment || 'N/A',
                    nir: state.user.nir || 'NIR Inconnu'
                }];
            }
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    },
    async addEmployee(emp) {
        const res = await fetch('/api/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emp)
        });
        if (res.ok) {
            const newEmp = await res.json();
            state.employees.push(newEmp);
            return newEmp;
        }
        throw new Error("Error adding employee");
    },
    async updateEmployee(id, emp) {
        const res = await fetch(`/api/employees/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emp)
        });
        return res.ok;
    },
    async deleteEmployee(id) {
        const res = await fetch(`/api/employees/${id}`, { method: 'DELETE' });
        if (res.ok) {
            state.employees = state.employees.filter(e => e.id !== id);
            return true;
        }
        return false;
    },
    async addVariable(variable) {
        const res = await fetch('/api/variables', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(variable)
        });
        if (res.ok) {
            const newVar = await res.json();
            state.variables.push(newVar);
            return newVar;
        }
        throw new Error("Error adding variable");
    },
    async updateVariable(id, variable) {
        const res = await fetch(`/api/variables/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(variable)
        });
        return res.ok;
    },
    async deleteVariable(id) {
        const res = await fetch(`/api/variables/${id}`, { method: 'DELETE' });
        if (res.ok) {
            state.variables = state.variables.filter(v => v.id !== id);
            return true;
        }
        return false;
    },
    async generatePayslip(employeeId, period) {
        try {
            const res = await fetch('/api/payslips/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employeeId, period })
            });
            if (res.ok) {
                return await res.json();
            }
            return null;
        } catch (e) {
            console.error('Error generating payslip:', e);
            return null;
        }
    }
};
