# Index de Documentation du Projet Memoire (Application RH & Paie)

## Sommaire
- [📚 Vue d'Ensemble](#-vue-densemble)
- [📖 Documents Disponibles](#-documents-disponibles)
- [🚀 Par où commencer ?](#-par-où-commencer-)

## 📚 Vue d'Ensemble

Bienvenue dans la documentation de l'application **Memoire** - un système intégré de gestion des ressources humaines et de la paie.

> **Contexte du Projet :** Ce projet est développé par un **seul étudiant en alternance** dans le cadre d'un **projet personnel pour son mémoire de fin d'études**. Les documents de ce dossier adoptent une structure professionnelle standard pour démontrer la maîtrise du cycle de vie logiciel, mais l'ensemble des rôles (Développeur, Architecte, PO, DevOps) est assumé par l'étudiant.

Ce dossier contient tous les documents de référence, guides techniques et informations nécessaires pour comprendre, développer et évaluer l'application. Ils sont désormais organisés dans des sous-dossiers spécifiques.

---

## 📖 Documents Disponibles

### 📁 01_Specifications
* **[CAHIER_DES_CHARGES.md](01_Specifications/CAHIER_DES_CHARGES.md)** : Définir le périmètre global et les objectifs du projet (MVP vs V2).
* **[CAHIER_FONCTIONNEL.md](01_Specifications/CAHIER_FONCTIONNEL.md)** : Décrire les fonctionnalités du système du point de vue utilisateur et l'état actuel.

### 📁 02_Architecture_Technique
* **[ARCHITECTURE.md](02_Architecture_Technique/ARCHITECTURE.md)** : Documenter les choix de conception globale (MVC, Flux, Couches).
* **[CAHIER_TECHNIQUE.md](02_Architecture_Technique/CAHIER_TECHNIQUE.md)** : Guide technique pour la mise en place et le développement (Java, Spring, Vanilla JS).
* **[MODELE_DONNEES.md](02_Architecture_Technique/MODELE_DONNEES.md)** : Détailler le schéma de la base de données (Entités JPA et relations).

### 📁 03_Conventions_et_Securite
* **[cybersecurite.md](03_Conventions_et_Securite/cybersecurite.md)** : Politiques de sécurité et bonnes pratiques.
* **[git_nomenclature.md](03_Conventions_et_Securite/git_nomenclature.md)** : Règles de nommage pour les commits et les branches Git.

### 📁 04_Suivi_et_Ressources
* **[ACTIONS_FUTURES.md](04_Suivi_et_Ressources/ACTIONS_FUTURES.md)** : Suivre l'avancement et planifier le travail restant.
* **[GLOSSAIRE.md](04_Suivi_et_Ressources/GLOSSAIRE.md)** : Standardiser le vocabulaire métier et technique du projet.
* **[RESSOURCES_REFERENCES.md](04_Suivi_et_Ressources/RESSOURCES_REFERENCES.md)** : Centraliser les liens et outils utiles.
* **[GUIDE_GIT.md](04_Suivi_et_Ressources/GUIDE_GIT.md)** : Guide de connexion et d'utilisation de Git/GitHub, résolution des conflits.
* **[Maquettes/sitemap.md](04_Suivi_et_Ressources/Maquettes/sitemap.md)** : Diagramme de navigation et d'arborescence (Sitemap).
* **[Diagramme de Gantt (Draw.io)](../gantt_chart.drawio)** : Planification détaillée du projet (Septembre 2025 - Août 2026).

### 📁 05_Plans_Resolution
* **[plan_bulletins_employe.md](05_Plans_Resolution/plan_bulletins_employe.md)** : Plan de résolution pour le bug d'affichage des bulletins de paie côté employé.
* **[plan_bulletins_admin.md](05_Plans_Resolution/plan_bulletins_admin.md)** : Plan de résolution pour le bug d'affichage des bulletins de paie côté administrateur.

### 📁 06_Workflow
**Flux Métiers (Parcours Utilisateurs) :**
* **[01_auth_workflow.md](06_Workflow/flux/01_auth_workflow.md)** : Parcours d'authentification et de redirection.
* **[02_generation_paie_workflow.md](06_Workflow/flux/02_generation_paie_workflow.md)** : Parcours RH de génération de bulletin.
* **[03_gestion_employes_workflow.md](06_Workflow/flux/03_gestion_employes_workflow.md)** : Parcours RH de gestion des employés (CRUD).
* **[04_consultation_employe_workflow.md](06_Workflow/flux/04_consultation_employe_workflow.md)** : Parcours de téléchargement des fiches de paie.

**Processus de Développement :**
* **[01_git_branching_process.md](06_Workflow/processus/01_git_branching_process.md)** : Processus de création de branches (GitFlow).
* **[02_code_validation_process.md](06_Workflow/processus/02_code_validation_process.md)** : Processus de validation de code (Pull Request & CI).
* **[03_versioning_process.md](06_Workflow/processus/03_versioning_process.md)** : Processus de versioning et mise en production.

---

## 🚀 Par où commencer ?

**Nouveau sur le projet ?**
1. Lisez le [CAHIER_DES_CHARGES.md](01_Specifications/CAHIER_DES_CHARGES.md) pour comprendre la vision.
2. Consultez le [GLOSSAIRE.md](04_Suivi_et_Ressources/GLOSSAIRE.md) pour vous familiariser avec le vocabulaire.
3. Suivez le [CAHIER_TECHNIQUE.md](02_Architecture_Technique/CAHIER_TECHNIQUE.md) pour configurer votre environnement.

**Développeur Backend ?**
1. Étudiez l'[ARCHITECTURE.md](02_Architecture_Technique/ARCHITECTURE.md) et le [MODELE_DONNEES.md](02_Architecture_Technique/MODELE_DONNEES.md).
2. Consultez les [ACTIONS_FUTURES.md](04_Suivi_et_Ressources/ACTIONS_FUTURES.md) pour voir les tâches prioritaires.

---
*Dernière mise à jour: 2026-07-22*
