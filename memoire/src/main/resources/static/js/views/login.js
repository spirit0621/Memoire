import { api } from '../api.js';
import { navigateTo } from '../router.js';
import { ui } from '../ui.js';

export function renderLogin(container) {
    container.innerHTML = `
        <div class="full-center">
            <div class="login-card">
                <div class="login-logo"><i class="fa-solid fa-calculator"></i></div>
                <h2 class="text-xl font-bold text-center mb-6">Connexion PayMaster Pro</h2>
                <form id="login-form">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="admin ou employé" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Mot de passe</label>
                        <input type="password" id="password" class="form-control" placeholder="••••••••" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-full mt-4 p-6">Se connecter</button>
                </form>
            </div>
        </div>
    `;
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const success = await api.login(document.getElementById('email').value, document.getElementById('password').value);
        if (success) navigateTo('dashboard');
        else ui.showToast('Identifiants incorrects', 'error');
    });
}
