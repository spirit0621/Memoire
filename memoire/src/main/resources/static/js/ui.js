import { state } from './state.js';
import { api } from './api.js';
import { handleRoute } from './router.js';

export const ui = {
    showToast(msg, type='info') {
        const t = document.createElement('div');
        t.className = `toast toast-${type}`;
        t.innerHTML = `<span>${msg}</span>`;
        document.getElementById('toast-container').appendChild(t);
        setTimeout(() => { t.classList.add('toast-hiding'); setTimeout(()=>t.remove(), 300); }, 3000);
    },
    closeModal() { document.getElementById('modal-root').innerHTML = ''; },
    openEmployeeModal(id = null) {
        const emp = id ? state.employees.find(e => e.id === id) : null;
        const body = `
            <div class="modal-section-title">Personal Information</div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="form-group">
                    <label class="form-label">First Name <span class="text-red-500">*</span></label>
                    <input type="text" id="m-fn" class="form-control" placeholder="First Name" value="${emp ? emp.firstName : ''}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Last Name <span class="text-red-500">*</span></label>
                    <input type="text" id="m-ln" class="form-control" placeholder="Last Name" value="${emp ? emp.lastName : ''}" required>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Establishment <span class="text-red-500">*</span></label>
                <input type="text" id="m-est" class="form-control" placeholder="Enter a new name or choose..." list="est-list" value="${emp ? emp.establishment : ''}">
                <datalist id="est-list">${[...new Set(state.employees.map(e => e.establishment))].map(x => `<option value="${x}">`).join('')}</datalist>
                <p class="text-xs text-slate-400 mt-1"><i class="fa-solid fa-circle-info"></i> Type a new name to create an establishment.</p>
            </div>
            <div class="form-group">
                <label class="form-label">Group / Department <span class="text-red-500">*</span></label>
                <select id="m-dept" class="form-control" required>
                    <option value="">Select...</option>
                    ${state.departments.map(d => `<option value="${d.name}" ${emp && emp.department === d.name ? 'selected' : ''}>${d.name}</option>`).join('')}
                </select>
            </div>

            <div class="modal-section-title">Base Compensation</div>
            <div class="form-group">
                <label class="form-label">Base Salary (€) <span class="text-red-500">*</span></label>
                <input type="number" id="m-sal" class="form-control" placeholder="0.00" value="${emp ? emp.baseSalary : '2500'}">
            </div>

            <div class="modal-section-title">Variables and Bonuses (Fixed amounts)</div>
            <div id="employee-vars-container" class="var-card-list" style="max-height: 240px; overflow-y: auto; padding-right: 4px; margin-bottom: 1rem;">
                ${state.variables.filter(v => v.type === 'fixed' && (emp && emp.customValues && emp.customValues[v.code] !== undefined)).map(v => `
                     <div class="var-card animate-fade-in" data-code="${v.code}">
                        <div class="var-card-info">
                            <div class="var-card-code">CODE: ${v.code}</div>
                            <div class="var-card-title">${v.label}</div>
                            <div class="var-card-desc line-clamp-1">${v.description || 'No description'}</div>
                        </div>
                        <input type="number" class="form-control var-card-input m-var" data-code="${v.code}" 
                            value="${emp.customValues[v.code]}" placeholder="0">
                        <div class="var-delete-btn" onclick="this.closest('.var-card').remove(); ui.checkVarEmpty('fixed')">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                `).join('')}
                ${(!emp || !emp.customValues || !Object.keys(emp.customValues).some(k => state.variables.find(v => v.code === k && v.type === 'fixed'))) ? 
                    '<p id="no-var-msg" class="text-xs text-slate-400 italic p-4 text-center">No variables assigned.</p>' : ''}
            </div>

            <div class="relative mb-8">
                <button type="button" class="btn-add-var" id="add-var-trigger">
                    <i class="fa-solid fa-plus"></i> Add a bonus
                </button>
                <div id="var-selection-menu" class="hidden card p-0 absolute bottom-full left-0 w-full mb-2 shadow-2xl border-blue-200 z-[100] overflow-hidden">
                    <div class="p-3 bg-slate-50 border-b border-slate-100">
                        <div class="relative">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                            <input type="text" id="var-menu-search" class="form-control pl-9 text-xs py-2 h-auto" placeholder="Search for a bonus...">
                        </div>
                    </div>
                    <div id="var-menu-items" class="max-h-[220px] overflow-y-auto p-1">
                        <!-- Populated by JS -->
                    </div>
                </div>
            </div>

            <div class="modal-section-title">Rules & Deductions (Automatic formulas)</div>
            <div id="employee-rules-container" class="var-card-list" style="max-height: 240px; overflow-y: auto; padding-right: 4px; margin-bottom: 1rem;">
                ${state.variables.filter(v => v.type === 'formula' && (emp && emp.customValues && emp.customValues[v.code] === 1.0)).map(v => `
                    <div class="var-card animate-fade-in" data-code="${v.code}">
                        <div class="var-card-info">
                            <div class="var-card-code">FORMULA</div>
                            <div class="var-card-title">${v.label}</div>
                            <div class="var-card-desc font-mono text-blue-500">${v.expression}</div>
                        </div>
                        <div class="px-3">
                            <label class="switch">
                                <input type="checkbox" class="m-var-check" data-code="${v.code}" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="var-delete-btn" onclick="this.closest('.var-card').remove(); ui.checkVarEmpty('formula')">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                `).join('')}
                ${(!emp || !emp.customValues || !Object.keys(emp.customValues).some(k => state.variables.find(v => v.code === k && v.type === 'formula' && emp.customValues[k] === 1.0))) ? 
                    '<p id="no-rule-msg" class="text-xs text-slate-400 italic p-4 text-center">No rules assigned.</p>' : ''}
            </div>

            <div class="relative mb-6">
                <button type="button" class="btn-add-var" id="add-rule-trigger">
                    <i class="fa-solid fa-plus"></i> Add a rule
                </button>
                <div id="rule-selection-menu" class="hidden card p-0 absolute bottom-full left-0 w-full mb-2 shadow-2xl border-blue-200 z-[100] overflow-hidden">
                    <div class="p-3 bg-slate-50 border-b border-slate-100">
                        <div class="relative">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                            <input type="text" id="rule-menu-search" class="form-control pl-9 text-xs py-2 h-auto" placeholder="Search for a rule...">
                        </div>
                    </div>
                    <div id="rule-menu-items" class="max-h-[220px] overflow-y-auto p-1">
                        <!-- Populated by JS -->
                    </div>
                </div>
            </div>
        `;
        const foot = `
            <button class="btn btn-secondary" onclick="ui.closeModal()">Cancel</button>
            <button class="btn btn-primary" id="m-sub" style="padding: 0.5rem 2rem;">${id ? 'Edit' : 'Save'}</button>
        `;
        this.renderModal(id ? 'Edit Employee' : 'Add Employee', body, foot);
        
        // Modal Logic - Selection Menus
        const setupMenu = (triggerId, menuId, searchId, itemsId, type) => {
            const trigger = document.getElementById(triggerId);
            const menu = document.getElementById(menuId);
            const search = document.getElementById(searchId);
            const items = document.getElementById(itemsId);

            if (trigger) trigger.onclick = () => {
                menu.classList.toggle('hidden');
                if (!menu.classList.contains('hidden')) search.focus();
                renderItems();
            };

            const renderItems = (filter = '') => {
                const available = state.variables.filter(v => 
                    v.type === type && 
                    (v.label.toLowerCase().includes(filter.toLowerCase()) || v.code.toLowerCase().includes(filter.toLowerCase()))
                );

                items.innerHTML = available.map(v => `
                    <div class="p-3 hover:bg-blue-50 cursor-pointer rounded-lg flex justify-between items-center transition-colors group" 
                        onclick="ui.addVarRow('${v.code}', '${v.label.replace(/'/g, "\\'")}', '${(v.type === 'fixed' ? (v.description || '') : v.expression).replace(/'/g, "\\'")}', '${v.type}')">
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-slate-700 group-hover:text-blue-600">${v.label}</span>
                            <span class="text-[10px] text-slate-400">${v.type === 'fixed' ? (v.description || 'Fixed Amount') : 'Automatic calculation'}</span>
                        </div>
                        <span class="text-[10px] font-mono bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-600 px-2 py-1 rounded text-slate-500">${v.code}</span>
                    </div>
                `).join('');
                if (available.length === 0) items.innerHTML = '<div class="p-4 text-center text-xs text-slate-400">No results</div>';
            };

            search.oninput = (e) => renderItems(e.target.value);
        };

        setupMenu('add-var-trigger', 'var-selection-menu', 'var-menu-search', 'var-menu-items', 'fixed');
        setupMenu('add-rule-trigger', 'rule-selection-menu', 'rule-menu-search', 'rule-menu-items', 'formula');

        this.addVarRow = (code, label, desc, type) => {
            const containerId = type === 'fixed' ? 'employee-vars-container' : 'employee-rules-container';
            const menuId = type === 'fixed' ? 'var-selection-menu' : 'rule-selection-menu';
            const noMsgId = type === 'fixed' ? 'no-var-msg' : 'no-rule-msg';
            
            const container = document.getElementById(containerId);
            const noMsg = document.getElementById(noMsgId);
            
            if (container.querySelector(`[data-code="${code}"]`)) {
                this.showToast('Already added', 'info');
                document.getElementById(menuId).classList.add('hidden');
                return;
            }

            if (noMsg) noMsg.remove();
            
            const div = document.createElement('div');
            div.className = 'var-card animate-fade-in';
            div.setAttribute('data-code', code);
            
            if (type === 'fixed') {
                div.innerHTML = `
                    <div class="var-card-info">
                        <div class="var-card-code">CODE: ${code}</div>
                        <div class="var-card-title">${label}</div>
                        <div class="var-card-desc line-clamp-1">${desc || 'No description'}</div>
                    </div>
                    <input type="number" class="form-control var-card-input m-var" data-code="${code}" placeholder="0">
                    <div class="var-delete-btn" onclick="this.closest('.var-card').remove(); ui.checkVarEmpty('fixed')">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                `;
            } else {
                div.innerHTML = `
                    <div class="var-card-info">
                        <div class="var-card-code">FORMULA</div>
                        <div class="var-card-title">${label}</div>
                        <div class="var-card-desc font-mono text-blue-500">${desc}</div>
                    </div>
                    <div class="px-3">
                        <label class="switch">
                            <input type="checkbox" class="m-var-check" data-code="${code}" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="var-delete-btn" onclick="this.closest('.var-card').remove(); ui.checkVarEmpty('formula')">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                `;
            }
            container.appendChild(div);
            document.getElementById(menuId).classList.add('hidden');
        };

        this.checkVarEmpty = (type) => {
            const containerId = type === 'fixed' ? 'employee-vars-container' : 'employee-rules-container';
            const noMsgId = type === 'fixed' ? 'no-var-msg' : 'no-rule-msg';
            const container = document.getElementById(containerId);
            if (container.children.length === 0) {
                container.innerHTML = `<p id="${noMsgId}" class="text-xs text-slate-400 italic p-4 text-center">No ${type === 'fixed' ? 'variable' : 'rule'} assigned.</p>`;
            }
        };

        document.getElementById('m-sub').onclick = async () => {
            const customValues = {};
            document.querySelectorAll('.m-var').forEach(input => {
                customValues[input.dataset.code] = parseFloat(input.value) || 0;
            });
            document.querySelectorAll('.m-var-check').forEach(input => {
                customValues[input.dataset.code] = input.checked ? 1.0 : 0.0;
            });
            const e = { 
                firstName: document.getElementById('m-fn').value, 
                lastName: document.getElementById('m-ln').value, 
                establishment: document.getElementById('m-est').value, 
                department: document.getElementById('m-dept').value, 
                baseSalary: parseFloat(document.getElementById('m-sal').value), 
                avatar: emp ? emp.avatar : `https://ui-avatars.com/api/?name=${document.getElementById('m-fn').value}+${document.getElementById('m-ln').value}`,
                customValues: customValues
            };
            if (id) await api.updateEmployee(id, e);
            else await api.addEmployee(e);
            
            await api.fetchAll(); // Re-fetch to get newly generated payslips
            
            this.showToast(id ? 'Employee modified' : 'Employee added');
            this.closeModal();
            handleRoute();
        };
    },
    openVariableModal(id = null) {
        const v = id ? state.variables.find(x => x.id === id) : null;
        const body = `
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="form-group">
                    <label class="form-label">Label <span class="text-red-500">*</span></label>
                    <input type="text" id="v-lab" class="form-control" placeholder="e.g. Lunch Allowance" value="${v ? v.label : ''}">
                </div>
                <div class="form-group">
                    <label class="form-label">Code <span class="text-red-500">*</span></label>
                    <input type="text" id="v-code" class="form-control" placeholder="E.G. LUNCH_ALLOWANCE" value="${v ? v.code : ''}" ${id ? 'disabled' : ''}>
                </div>
            </div>
            <div class="form-group"><label class="form-label">Description</label><textarea id="v-desc" class="form-control" rows="2">${v ? v.description : ''}</textarea></div>
            
            <div class="formula-helper">
                <label class="form-label mb-3">Calculation Type</label>
                <div class="radio-group">
                    <label class="radio-item"><input type="radio" name="v-calc-type" value="fixed" ${(!v || v.type === 'fixed') ? 'checked' : ''}> Fixed Amount</label>
                    <label class="radio-item"><input type="radio" name="v-calc-type" value="formula" ${(v && v.type === 'formula') ? 'checked' : ''}> Mathematical Formula</label>
                </div>
                
                <div id="v-expression-container" class="mt-4 ${(!v || v.type === 'fixed') ? 'hidden' : ''}">
                    <label class="form-label">Expression / Formula <span class="text-red-500">*</span></label>
                    <input type="text" id="v-exp" class="form-control expression-input" placeholder="baseSalary * 0.10" value="${v ? v.expression : ''}">
                    <div class="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div class="flex items-center justify-between mb-3">
                            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Variables</label>
                            <div class="relative">
                                <i class="fa-solid fa-magnifying-glass absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400"></i>
                                <input type="text" id="v-helper-search" class="form-control text-[10px] pl-6 py-1 h-auto w-32" placeholder="Filter...">
                            </div>
                        </div>
                        <div id="v-helper-list" class="formula-helper-list max-h-[160px] overflow-y-auto custom-scrollbar pr-1">
                            <!-- Populated by JS -->
                        </div>
                        <p class="text-[10px] text-slate-400 mt-3 italic"><i class="fa-solid fa-circle-info mr-1"></i> Click on a variable to insert it into the formula.</p>
                    </div>
                </div>
                
                <div id="v-fixed-container" class="mt-4 ${(v && v.type === 'formula') ? 'hidden' : ''}">
                    <label class="form-label">Amount (€) <span class="text-red-500">*</span></label>
                    <input type="number" id="v-fixed-val" class="form-control" placeholder="€ 0.00" value="${(v && v.type === 'fixed') ? v.expression : ''}">
                </div>
            </div>
        `;
        const foot = `<button class="btn btn-secondary" onclick="ui.closeModal()">Cancel</button><button class="btn btn-primary" id="v-sub">${id ? 'Edit' : 'Save'}</button>`;
        this.renderModal(id ? 'Edit Variable' : 'New Variable', body, foot);
        
        // Helper List Population & Search
        const helperList = document.getElementById('v-helper-list');
        const helperSearch = document.getElementById('v-helper-search');
        
        const systemVars = [
            { code: 'baseSalary', label: 'Base salary' },
            { code: 'hourlyRate', label: 'Hourly rate' },
            { code: 'totalHours', label: 'Total hours' }
        ];

        const renderHelper = (filter = '') => {
            const allVars = [...systemVars, ...state.variables.filter(x => x.type === 'fixed')];
            const filtered = allVars.filter(x => x.code.toLowerCase().includes(filter.toLowerCase()) || x.label.toLowerCase().includes(filter.toLowerCase()));
            
            helperList.innerHTML = filtered.map(x => `
                <div class="v-helper-item animate-fade-in" onclick="ui.insertVar('${x.code}')">
                    <span>${x.code}</span>
                    <span>${x.label}</span>
                </div>
            `).join('');
            
            if(filtered.length === 0) helperList.innerHTML = '<div class="text-center p-4 text-[10px] text-slate-400">No results</div>';
        };

        this.insertVar = (code) => {
            const input = document.getElementById('v-exp');
            const start = input.selectionStart;
            const end = input.selectionEnd;
            const text = input.value;
            input.value = text.substring(0, start) + code + text.substring(end);
            input.focus();
            input.setSelectionRange(start + code.length, start + code.length);
        };

        renderHelper();
        if(helperSearch) helperSearch.oninput = (e) => renderHelper(e.target.value);

        // Toggle logic
        const radios = document.querySelectorAll('input[name="v-calc-type"]');
        radios.forEach(r => r.onchange = (e) => {
            if(e.target.value === 'fixed') {
                document.getElementById('v-fixed-container').classList.remove('hidden');
                document.getElementById('v-expression-container').classList.add('hidden');
            } else {
                document.getElementById('v-fixed-container').classList.add('hidden');
                document.getElementById('v-expression-container').classList.remove('hidden');
            }
        });

        document.getElementById('v-sub').onclick = async () => {
            const type = document.querySelector('input[name="v-calc-type"]:checked').value;
            const expression = type === 'fixed' ? document.getElementById('v-fixed-val').value : document.getElementById('v-exp').value;
            const data = { 
                code: document.getElementById('v-code').value, 
                label: document.getElementById('v-lab').value, 
                description: document.getElementById('v-desc').value, 
                type: type, 
                expression: expression 
            };
            if (id) await api.updateVariable(id, data);
            else await api.addVariable(data);
            
            this.showToast('Variable saved');
            this.closeModal();
            handleRoute();
        };
    },
    renderModal(title, body, foot) {
        document.getElementById('modal-root').innerHTML = `<div class="modal-overlay active"><div class="modal-container"><div class="modal-header"><h3 class="modal-title">${title}</h3><button onclick="ui.closeModal()">×</button></div><div class="modal-body">${body}</div><div class="modal-footer">${foot}</div></div></div>`;
    },
    async deleteEmployee(id) { if(confirm('Are you sure?')) { await api.deleteEmployee(id); this.showToast('Deleted'); handleRoute(); } },
    async deleteVariable(id) { if(confirm('Are you sure?')) { await api.deleteVariable(id); this.showToast('Deleted'); handleRoute(); } },
    downloadPDF(id) {
        const p = state.payslips.find(x => x.id === id);
        const e = state.employees.find(x => x.id === p.employeeId);
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // --- Header Configuration ---
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(30, 41, 59); // Slate 800
        doc.text("PAYSLIP", 105, 20, { align: 'center' });
        
        // Boxes
        doc.setLineWidth(0.5);
        doc.setDrawColor(30, 41, 59);
        
        // Entreprise Box (Left)
        doc.roundedRect(10, 30, 90, 35, 3, 3);
        doc.setFontSize(10);
        doc.text("COMPANY", 15, 37);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(e?.establishment || "Corporation", 15, 45);
        doc.text("SIRET No. : 123 456 789 00012", 15, 50);
        doc.text("APE Code : 6201Z", 15, 55);
        doc.text("Agreement : Metal Industry Executive", 15, 60);

        // Employee Info (Right Side)
        doc.setFont("helvetica", "bold");
        doc.text(`Period : ${p.period}`, 120, 37);
        doc.setFont("helvetica", "normal");
        doc.text(`Payment Date : 31/${p.period.split(' ')[0]}/${p.period.split(' ')[1]}`, 120, 42);
        doc.text(`Employee No. : ${e?.id.toString().padStart(6, '0')}`, 120, 47);
        doc.text(`SSN : 1 85 12 75 123 456 78`, 120, 52);

        // Employee Box (Right)
        doc.roundedRect(115, 60, 85, 25, 3, 3);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(`${e?.firstName} ${e?.lastName}`, 120, 68);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text("4 Church Street", 120, 74);
        doc.text("75000 Paris", 120, 79);

        // Employee Details Table Header
        doc.setFont("helvetica", "bold");
        doc.roundedRect(10, 90, 190, 15, 2, 2);
        doc.setFontSize(8);
        doc.text("Position: Engineer", 15, 96);
        doc.text(`Dept: ${e?.department}`, 15, 101);
        doc.text("Classification: Executive - Coeff 135", 70, 96);
        doc.text("Flat Rate: 218 Days", 130, 96);

        // --- Main Table ---
        const tableBody = [
            [{ content: 'Base Salary', styles: { fontStyle: 'bold' } }, p.baseSalary.toFixed(2), '', p.baseSalary.toFixed(2), ''],
        ];

        // Add variables/primes
        const totalPrimes = p.grossSalary - p.baseSalary;
        if (totalPrimes > 0) {
            tableBody.push(['Bonuses and variables', '', '', totalPrimes.toFixed(2), '']);
        }

        // Section Separator: COTISATIONS
        tableBody.push([{ content: 'SOCIAL SECURITY CONTRIBUTIONS AND DEDUCTIONS', colSpan: 5, styles: { fillColor: [241, 245, 249], fontStyle: 'bold' } }]);
        
        // Simulated Charges (matching the ADP standard)
        const charges = [
            ['Health - Social Security Illness', p.grossSalary.toFixed(2), '7.00%', (p.grossSalary * 0.07).toFixed(2), (p.grossSalary * 0.13).toFixed(2)],
            ['Work Accidents', p.grossSalary.toFixed(2), '', '', (p.grossSalary * 0.02).toFixed(2)],
            ['Retirement - Social Security Capped', p.grossSalary.toFixed(2), '6.90%', (p.grossSalary * 0.069).toFixed(2), (p.grossSalary * 0.08).toFixed(2)],
            ['Family - Social Security', p.grossSalary.toFixed(2), '', '', (p.grossSalary * 0.0345).toFixed(2)],
            ['Unemployment Insurance', p.grossSalary.toFixed(2), '0.00%', '0.00', (p.grossSalary * 0.0405).toFixed(2)],
            ['CSG deductible from income tax', p.grossSalary.toFixed(2), '6.80%', (p.grossSalary * 0.068).toFixed(2), '']
        ];
        tableBody.push(...charges);

        // Total Line
        tableBody.push([{ content: 'TOTAL CONTRIBUTIONS', colSpan: 3, styles: { fontStyle: 'bold' } }, (p.grossSalary - p.netSalary).toFixed(2), '']);

        doc.autoTable({
            startY: 110,
            head: [['DESCRIPTION', 'BASE', 'RATE', 'EMPLOYEE SHARE', 'EMPLOYER SHARE']],
            body: tableBody,
            theme: 'grid',
            headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255], fontSize: 8, halign: 'center' },
            columnStyles: {
                0: { cellWidth: 80 },
                1: { cellWidth: 25, halign: 'right' },
                2: { cellWidth: 20, halign: 'right' },
                3: { cellWidth: 32, halign: 'right' },
                4: { cellWidth: 32, halign: 'right' }
            },
            styles: { fontSize: 8, cellPadding: 2 },
            margin: { left: 10, right: 10 }
        });

        // --- Bottom Summary ---
        const finalY = doc.lastAutoTable.finalY + 10;
        
        doc.setFillColor(248, 250, 252);
        doc.rect(130, finalY, 70, 30, 'F');
        doc.rect(130, finalY, 70, 30, 'S');
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.text("GROSS SALARY", 135, finalY + 7);
        doc.text(p.grossSalary.toFixed(2) + " €", 195, finalY + 7, { align: 'right' });
        
        doc.text("TOTAL DEDUCTIONS", 135, finalY + 14);
        doc.text((p.grossSalary - p.netSalary).toFixed(2) + " €", 195, finalY + 14, { align: 'right' });
        
        doc.setFontSize(12);
        doc.setTextColor(37, 99, 235);
        doc.text("NET SALARY", 135, finalY + 25);
        doc.text(p.netSalary.toFixed(2) + " €", 195, finalY + 25, { align: 'right' });

        doc.save(`BS_${e?.lastName}_${p.period.replace(' ', '_')}.pdf`);
    },
    downloadBatch() {
        const filtered = state.payslips.filter(p => {
            const emp = state.employees.find(e => e.id === p.employeeId);
            const matchesSearch = emp ? `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(state.filters.search.toLowerCase()) : true;
            const matchesEst = state.filters.establishment === 'all' || (emp && emp.establishment === state.filters.establishment);
            const matchesDept = state.filters.department === 'all' || (emp && emp.department === state.filters.department);
            return matchesSearch && matchesEst && matchesDept;
        });
        if(filtered.length === 0) return this.showToast('No results', 'error');
        this.showToast('Starting batch download...');
        filtered.forEach((p, i) => setTimeout(() => this.downloadPDF(p.id), i * 500));
    },
    openGenerateModal() {
        const body = `
            <div class="form-group">
                <label class="form-label">Employee <span class="text-red-500">*</span></label>
                <select id="g-emp" class="form-control">
                    ${state.employees.map(e => `<option value="${e.id}">${e.firstName} ${e.lastName}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Period <span class="text-red-500">*</span></label>
                <input type="text" id="g-per" class="form-control" placeholder="e.g. May 2024" value="May 2024">
            </div>
        `;
        const foot = `
            <button class="btn btn-secondary" onclick="ui.closeModal()">Cancel</button>
            <button class="btn btn-primary" id="g-sub">Preview</button>
        `;
        this.renderModal('Generate a payslip', body, foot);
        
        document.getElementById('g-sub').onclick = () => {
            const empId = parseInt(document.getElementById('g-emp').value);
            const period = document.getElementById('g-per').value;
            this.openPreviewModal(empId, period);
        };
    },
    async openPreviewModal(empId, period) {
        const emp = state.employees.find(e => e.id === empId);
        if (!emp) return;

        const base = emp.baseSalary || 0;
        const calcData = {
            base: base,
            variables: [],
            gross: base,
            cotisations: 0,
            net: 0
        };

        state.variables.forEach(v => {
            const userVal = (emp.customValues && emp.customValues[v.code]) ? emp.customValues[v.code] : 0;
            if (userVal !== 0) {
                let amount = 0;
                let detail = '';
                if (v.type === 'fixed') {
                    amount = userVal;
                    detail = `Fixed`;
                } else if (v.type === 'formula' && userVal >= 1.0) {
                    try {
                        let expr = v.expression
                            .replace(/baseSalary/g, base)
                            .replace(/hourlyRate/g, (base / 151.67).toFixed(4))
                            .replace(/totalHours/g, "151.67");
                        amount = eval(expr);
                        detail = `Formula`;
                    } catch(e) { amount = 0; }
                }
                if (amount !== 0) {
                    calcData.variables.push({ label: v.label, amount, detail });
                    calcData.gross += amount;
                }
            }
        });

        // Detailed Social Charges Simulation
        const rows = [
            { label: "Base salary", base: base.toFixed(2), rate: "100%", s: base.toFixed(2), e: "0.00" }
        ];

        calcData.variables.forEach(v => {
            rows.push({ label: v.label, base: v.amount.toFixed(2), rate: v.detail, s: v.amount.toFixed(2), e: "0.00" });
        });

        // Add some realistic French social charges
        const cotis = [
            { label: "HEALTH - Social security", rate: 0.07, empRate: 0.13 },
            { label: "RETIREMENT - Tier 1", rate: 0.069, empRate: 0.1045 },
            { label: "UNEMPLOYMENT", rate: 0.00, empRate: 0.0405 },
            { label: "CSG / CRDS (Base 98.25%)", rate: 0.097, empRate: 0.00, baseOverride: 0.9825 }
        ];

        let totalS = 0;
        let totalE = 0;

        cotis.forEach(c => {
            const b = c.baseOverride ? calcData.gross * c.baseOverride : calcData.gross;
            const sVal = b * c.rate;
            const eVal = b * c.empRate;
            totalS += sVal;
            totalE += eVal;
            rows.push({ 
                label: c.label, 
                base: b.toFixed(2), 
                rate: (c.rate * 100).toFixed(2) + "%", 
                s: sVal.toFixed(2), 
                e: eVal.toFixed(2) 
            });
        });

        calcData.net = calcData.gross - totalS;

        const body = `
            <div class="preview-modal-content">
                <div class="preview-watermark">SIMULATION</div>
                
                <div class="preview-header">
                    <div class="preview-box" style="margin-right: 1rem;">
                        <h5>Employer</h5>
                        <div class="font-bold">PAYMASTER PRO SERVICES</div>
                        <div>12 Rue de la Paie, 75001 Paris</div>
                        <div>SIRET: 123 456 789 00012</div>
                        <div>APE: 6202A</div>
                    </div>
                    <div class="preview-box">
                        <h5>Employee</h5>
                        <div class="font-bold">${emp.firstName} ${emp.lastName}</div>
                        <div>ID: EMP-${emp.id.toString().padStart(4, '0')}</div>
                        <div>Job: ${emp.position || 'Employee'}</div>
                        <div>Joined: 01/01/2023</div>
                    </div>
                </div>

                <div class="text-[10px] text-slate-400 mb-2 uppercase font-bold tracking-widest">Period: ${period}</div>

                <table class="preview-table">
                    <thead>
                        <tr>
                            <th style="text-align: left;">Description</th>
                            <th>Base</th>
                            <th>Rate</th>
                            <th>Employee Amount</th>
                            <th>Employer Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map((r, i) => `
                            <tr class="${i % 2 === 0 ? 'bg-slate' : ''}">
                                <td class="font-bold">${r.label}</td>
                                <td class="text-right">${r.base}</td>
                                <td class="text-right">${r.rate}</td>
                                <td class="text-right font-bold">${r.s}</td>
                                <td class="text-right text-slate-500">${r.e}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <div class="preview-summary">
                    <div class="preview-summary-box">
                        <div class="preview-summary-item">
                            <span>Total Gross</span>
                            <span class="font-bold">${calcData.gross.toFixed(2)} €</span>
                        </div>
                        <div class="preview-summary-item">
                            <span>Total Deductions</span>
                            <span class="text-red-500">- ${totalS.toFixed(2)} €</span>
                        </div>
                        <div class="preview-summary-total">
                            <span>NET SALARY</span>
                            <span>${calcData.net.toFixed(2)} €</span>
                        </div>
                    </div>
                </div>

                <div class="alert alert-info mt-6 text-[10px] leading-tight">
                    <i class="fa-solid fa-circle-info mr-1"></i> 
                    This preview uses standard contribution rates for a non-executive employee profile.
                </div>
            </div>
        `;

        const foot = `
            <button class="btn btn-secondary" onclick="ui.closeModal()">Edit</button>
            <button class="btn btn-primary" id="confirm-gen" style="padding: 0.5rem 2rem;">Confirm and Generate</button>
        `;
        this.renderModal('Live Preview', body, foot);
        
        document.getElementById('confirm-gen').onclick = async () => {
            const ps = await api.generatePayslip(empId, period);
            if (ps) {
                this.showToast('Payslip generated and archived!');
                await api.fetchAll();
                this.closeModal();
                handleRoute();
            }
        };
    }
};
