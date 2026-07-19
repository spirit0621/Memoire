import { state } from '../state.js';

export function renderNavbar() {
    const nav = document.getElementById('navbar');
    if (!state.user) {
        nav.classList.add('hidden');
        return;
    }
    nav.classList.remove('hidden');

    const isRH = state.user.role === 'ADMIN';
    
    // For initials avatar
    const initials = state.user.fullName ? state.user.fullName.split(' ').map(n=>n[0]).join('').toUpperCase() : '';

    nav.innerHTML = `
        <div class="navbar-inner">
            <a href="#dashboard" class="nav-brand">
                <div class="nav-brand-icon"><i class="fa-solid fa-calculator"></i></div>
                <span>GFPS <span style="color:#60a5fa"></span></span>
            </a>
            <div class="nav-links">
                <a href="#dashboard" class="nav-link ${window.location.hash === '#dashboard' ? 'active' : ''}">
                    <i class="fa-solid fa-chart-pie"></i> <span>Accueil</span>
                </a>
                ${isRH ? `
                    <a href="#employees" class="nav-link ${window.location.hash === '#employees' ? 'active' : ''}">
                        <i class="fa-solid fa-users"></i> <span>Employés</span>
                    </a>
                    <a href="#payslips" class="nav-link ${window.location.hash === '#payslips' ? 'active' : ''}">
                        <i class="fa-solid fa-file-invoice-dollar"></i> <span>Fiches de paie</span>
                    </a>
                    <a href="#settings" class="nav-link ${window.location.hash === '#settings' ? 'active' : ''}">
                        <i class="fa-solid fa-sliders"></i> <span>Paramètres</span>
                    </a>
                ` : `
                    <a href="#payslips" class="nav-link ${window.location.hash === '#payslips' ? 'active' : ''}">
                        <i class="fa-solid fa-file-pdf"></i> <span>Mes fiches de paie</span>
                    </a>
                `}
            </div>
            <div class="nav-profile">
                <div class="profile-avatar">${initials}</div>
                <span class="text-sm font-semibold text-white tracking-wide">${state.user.fullName || state.user.firstName}</span>
                <button class="logout-btn" onclick="api.logout()"><i class="fa-solid fa-power-off"></i></button>
            </div>
        </div>
    `;
}
