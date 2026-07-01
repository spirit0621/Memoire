import { state } from '../state.js';

export function renderDashboard(container) {
    const totalEmployees = state.employees.length;
    const totalPayroll = state.employees.reduce((acc, e) => acc + (e.baseSalary || 0), 0);
    const totalOvertime = state.employees.reduce((acc, e) => acc + (e.customValues ? (parseFloat(e.customValues['HEURES_SUP']) || 0) : 0), 0);
    const isAdmin = state.user.role === 'ADMIN';
    
    container.innerHTML = `
        <div class="dashboard-hero">
            <div class="dashboard-hero-content">
                <h1 class="text-4xl font-bold mb-2">Hello, ${state.user.firstName} 👋</h1>
                <p class="text-slate-300 text-lg">Ready to manage this month's payroll? Here is an overview of your activity.</p>
                <div class="mt-8 flex gap-4">
                    <button class="btn btn-primary" onclick="navigateTo('employees')" style="padding: 0.75rem 1.5rem;">Manage Employees</button>
                    <button class="btn" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color:white; padding: 0.75rem 1.5rem;" onclick="navigateTo('payslips')">View Payslips</button>
                </div>
            </div>
        </div>

        <div class="grid ${isAdmin ? 'grid-cols-2' : 'grid-cols-1'} gap-6 mb-8">
            ${isAdmin ? `
            <div class="dashboard-stat-card">
                <div class="stat-icon users"><i class="fa-solid fa-user-group"></i></div>
                <div>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Staff</p>
                    <h3 class="text-2xl font-bold text-slate-800">${totalEmployees} employees</h3>
                </div>
            </div>
            <div class="dashboard-stat-card">
                <div class="stat-icon money"><i class="fa-solid fa-euro-sign"></i></div>
                <div>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Base Payroll</p>
                    <h3 class="text-2xl font-bold text-slate-800">${totalPayroll.toLocaleString('en-US')} €</h3>
                </div>
            </div>
            ` : `
            <div class="dashboard-stat-card">
                <div class="stat-icon time"><i class="fa-solid fa-clock"></i></div>
                <div>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Overtime Hours</p>
                    <h3 class="text-2xl font-bold text-slate-800">${totalOvertime} h</h3>
                </div>
            </div>
            `}
        </div>

        ${isAdmin ? `
        <div class="grid grid-cols-1 gap-8">
            <div class="recent-activity-card">
                <div class="activity-header">
                    <h4 class="font-bold text-slate-800">Quick Actions</h4>
                </div>
                <div class="p-6 grid grid-cols-2 gap-4">
                    <button class="btn btn-ghost p-4 flex flex-col items-center gap-2 border border-slate-100 rounded-xl" onclick="ui.openEmployeeModal()">
                        <i class="fa-solid fa-user-plus text-blue-600 text-xl"></i>
                        <span class="text-xs font-bold text-slate-600">Add Employee</span>
                    </button>
                    <button class="btn btn-ghost p-4 flex flex-col items-center gap-2 border border-slate-100 rounded-xl" onclick="ui.openGenerateModal()">
                        <i class="fa-solid fa-wand-magic-sparkles text-purple-600 text-xl"></i>
                        <span class="text-xs font-bold text-slate-600">Generate Payroll</span>
                    </button>
                    <button class="btn btn-ghost p-4 flex flex-col items-center gap-2 border border-slate-100 rounded-xl" onclick="navigateTo('settings')">
                        <i class="fa-solid fa-sliders text-orange-600 text-xl"></i>
                        <span class="text-xs font-bold text-slate-600">Settings</span>
                    </button>
                </div>
            </div>
        </div>
        ` : ''}
    `;
}
