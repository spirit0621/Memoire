/**
 * Fichier : app.js
 * Gère les appels AJAX vers le serveur
 */

// On utilise une fonction anonyme pour éviter de polluer l'espace global
document.addEventListener('DOMContentLoaded', () => {

    const elementAffichage = document.getElementById('hello');

    // La logique de l'appel AJAX
    const chargerDonnees = async () => {
        try {
            const response = await fetch('/hello');

            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            const texte = await response.text();
            elementAffichage.innerText = texte;

        } catch (erreur) {
            console.error("Erreur lors de la récupération :", erreur);
            elementAffichage.innerText = "Erreur de connexion au serveur.";
        }
    };
    // Premier appel automatique
    chargerDonnees();
});