# 📋 Actions Futures & Tâches à Réaliser

## Sommaire
- [📊 État Global (Progression : 25%)](#-état-global-progression--25)
- [🎯 1. Priorités Absolues (Backend)](#-1-priorités-absolues-backend)
- [🎨 2. Refactoring et Simplification UI (Frontend)](#-2-refactoring-et-simplification-ui-frontend)
- [⚙️ 3. Tests & Déploiement](#-3-tests--déploiement)
- [🚀 4. Évolutions Futures (Version 2.0)](#-4-évolutions-futures-version-20)

## 📊 État Global (Progression : ~60% sur les tâches GitHub)
- ✅ **14** Tâches complétées (Modèles JPA, Base de données, Structure de base, UI)
- 🔄 **9** Tâches en cours (Principalement les Contrôleurs et Services)
- ❌ **0** Tâches restantes non listées

**🔴 Blocages Principaux :** 
1. La **Service Layer** est manquante (bloque tout le métier).
2. La logique de paie complexe dans **`PayrollService`**.
3. Le choix technique final entre **JWT** et **Session** pour l'authentification.

---

## 🎯 1. Priorités Absolues (Backend)

- [ ] **Développer la Service Layer (CRITIQUE)**
  - [ ] `UserService` & `EmployeeService`
  - [ ] `PayrollService` (Logique de paie, calculs des cotisations et impôts)
  - [ ] `ContractService` & `AbsenceService`

- [ ] **Gestion des Salariés (Epic #29)**
  - [ ] **Création d'un salarié (#30) :**
    - [ ] UI : Pop-up suppression établissement et renommer "groupe" en "établissement".
    - [x] API : Créer un contrôleur `Establishment` retournant tous les établissements (nom et id caché).
    - [ ] DB/Backend : Créer tous les champs manquants pour créer un employé (réf : seed user BOB).
    - [ ] API : Nouveau contrôleur avec méthode POST (ajout employé). Argument : DTO ajout employé. Retour : statut de la requête.
  - [ ] **Affichage de la liste des employés (#31)**
  - [ ] **Calcul et affichage de l'effectif total (#32) :**
    - [ ] API : Créer un endpoint qui compte le nombre de salariés.
    - [ ] UI : Afficher l'information sur la page RH.
  - [ ] **Calcul et affichage de la masse salariale (#33) :**
    - [ ] Service : Fetch de tous les contrats.
    - [ ] Contrôleur : Faire la somme des montants.

- [ ] **Feature Bulletin de paie (Epic #25)**
  - [ ] Créer une seed : plusieurs bulletins de paie pour l'utilisateur BOB (#26)
  - [ ] **Affichage bulletin côté employé (#27) :**
    - [x] Créer un contrôleur (Argument : utilisateur).
    - [x] Retour : Liste d'éléments à définir.
    - [x] Comportement : Requête qui va chercher dans la table des fiches de paie via l'ID.
    - [ ] Sécurité : Seul l'utilisateur peut requêter ses propres bulletins.
  - [ ] **Affichage côté RH (#28) :**
    - [x] Contrôleur : Même fichier (ex: `allbulletin`), sans argument.
    - [x] Retour : Liste de tous les bulletins.
    - [x] Comportement : Recherche de tous les bulletins de paie de tous les employés.
    - [ ] Sécurité : Accès restreint au rôle ADMIN.

- [ ] **Fiabilisation & Compléments REST**
  - [ ] Finaliser la sécurité (RBAC, Logout, JWT/Session)
  - [ ] Ajouter les validations de données serveur (`@Valid`, etc.)
  - [ ] Configurer un système de logs global (Logback)

---

## 🎨 2. Refactoring et Simplification UI (Frontend)

- [x] 🇫🇷 **Général :** Traduire l'ensemble de l'interface en français (terminé).
- [x] 🗑️ **Général :** Supprimer le simulateur.
- [x] 🧹 **Nettoyage Dashboard Admin :**
  - [x] Enlever la case "Heures supplémentaires".
- [x] 🧹 **Nettoyage Dashboard Employé & Vues générales :**
  - [x] Enlever les cases : "Masse salariale" et "Nombre d'employés".
  - [x] Enlever les cases : "Raccourcis", "Note d'information" et "Gérer les employés".
  - [x] Enlever les filtres : "Salarié", "Générer" et "Net à payer".
- [ ] 🔌 **Intégration API :** Remplacer les fausses données Frontend par de vrais appels API vers le Backend.

---

## ⚙️ 3. Tests & Déploiement

- [ ] **Tests Qualité :**
  - [ ] Tests Unitaires et d'Intégration Backend (Objectif : > 80% coverage).
  - [ ] Tests de sécurité (Injections, XSS, authentification).
- [ ] **Infrastructure :**
  - [ ] Finaliser la configuration `docker-compose.yml`.
  - [ ] Mettre en place un pipeline CI/CD de base.
  - [ ] Préparer les environnements (Dev, Test, Prod).

---

## 🚀 4. Évolutions Futures (Version 2.0)

- [ ] 🔔 Système de notifications (Email, In-App).
- [ ] ⏱️ Gestion du temps de travail (Timesheet).
- [ ] 📱 Application Mobile.
- [ ] 💶 Intégration avec des logiciels comptables externes (SAGE, Ciel).
- [ ] 📊 Module d'analyse avancée et de prévisions.

---
*Dernière mise à jour : 2026-08-23*

[⬅️ Retour à l'Index principal](../INDEX.md)
