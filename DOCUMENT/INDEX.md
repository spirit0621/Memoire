# Index de Documentation du Projet Memoire (Application RH & Paie)

## Sommaire
- [📚 Vue d'Ensemble](#-vue-densemble)
- [📖 Documents Disponibles](#-documents-disponibles)
- [🚀 Par où commencer ?](#-par-où-commencer-)

## 📚 Vue d'Ensemble

Bienvenue dans la documentation de l'application **Memoire** - un système intégré de gestion des ressources humaines et de la paie.

> **Contexte du Projet :** Ce projet est développé par un **seul étudiant en alternance** dans le cadre d'un **projet personnel pour son mémoire de fin d'études**. Les documents de ce dossier adoptent une structure professionnelle standard pour démontrer la maîtrise du cycle de vie logiciel, mais l'ensemble des rôles (Développeur, Architecte, PO, DevOps) est assumé par l'étudiant.

Ce dossier contient tous les documents de référence, guides techniques et informations nécessaires pour comprendre, développer et évaluer l'application.

---

## 📖 Documents Disponibles

### 1. [CAHIER_DES_CHARGES.md](CAHIER_DES_CHARGES.md)
**Objectif:** Définir le périmètre global et les objectifs du projet.
**Contient:**
- Identification et objectifs (MVP vs V2)
- Exigences fonctionnelles et non fonctionnelles (Performance, Sécurité)
- Ressources estimées, coûts et planning des phases
**Pour qui:** Jury, Tuteurs, Évaluateurs du mémoire

### 2. [CAHIER_FONCTIONNEL.md](CAHIER_FONCTIONNEL.md)
**Objectif:** Décrire les fonctionnalités du système du point de vue utilisateur et l'état actuel.
**Contient:**
- Résumé d'implémentation (Progression actuelle : 10%)
- Fonctionnalités principales détaillées (Authentification, Employés, Paie, Absences, etc.)
- Flux de travail clés et navigation UI
- Points critiques de blocage (Service Layer)
**Pour qui:** Jury, Examinateurs, Utilisateurs finaux

### 3. [ARCHITECTURE.md](ARCHITECTURE.md)
**Objectif:** Documenter les choix de conception globale.
**Contient:**
- Modèle architectural (Layered Architecture, MVC)
- Vue détaillée des couches (Frontend, Controller, Service, Repository, Database)
- Flux d'authentification (JWT/Session) et flux de paie
**Pour qui:** Évaluateurs techniques, Architecte Logiciel

### 4. [CAHIER_TECHNIQUE.md](CAHIER_TECHNIQUE.md)
**Objectif:** Guide technique pour la mise en place et le développement.
**Contient:**
- Stack technologique (Java 21, Spring Boot 3, MySQL, Vanilla JS)
- Configuration des environnements (Dev, Docker)
- Conventions de code, stratégies de tests et CI/CD
**Pour qui:** Évaluateurs techniques

### 5. [MODELE_DONNEES.md](MODELE_DONNEES.md)
**Objectif:** Détailler le schéma de la base de données.
**Contient:**
- Diagramme des 9 entités JPA (User, Contract, Payslip, Absence...)
- Description détaillée de chaque table et de ses relations (OneToMany, ManyToOne)
- Énumérations et contraintes métier
**Pour qui:** Évaluateurs techniques

### 6. [ACTIONS_FUTURES.md](ACTIONS_FUTURES.md)
**Objectif:** Suivre l'avancement et planifier le travail restant.
**Contient:**
- Résumé d'exécution et blocages identifiés (Service Layer, PayrollService)
- Liste des tâches à faire par catégorie (Backend, Frontend, Tests, Déploiement)
- Dépendances entre les tâches et priorisation
**Pour qui:** Tuteur de mémoire, Étudiant

### 7. [GLOSSAIRE.md](GLOSSAIRE.md)
**Objectif:** Standardiser le vocabulaire du projet.
**Contient:**
- Définitions des termes métier RH (Bulletin de paie, cotisations, absences)
- Définitions des termes techniques (JPA, DTO, JWT)
- Conventions de nommage (Base de données, Java, JavaScript, CSS)
**Pour qui:** Tous les lecteurs du mémoire

### 8. [RESSOURCES_REFERENCES.md](RESSOURCES_REFERENCES.md)
**Objectif:** Centraliser les liens et outils utiles.
**Contient:**
- Liens vers la documentation officielle (Spring, Java, MDN, Docker)
- Dépendances Maven recommandées (pom.xml)
- Templates de code (Controllers Spring Boot, Fetch API JS)
**Pour qui:** Étudiant / Développeur

---

## 🚀 Par où commencer ?

**Nouveau sur le projet ?**
1. Lisez le [CAHIER_DES_CHARGES.md](CAHIER_DES_CHARGES.md) pour comprendre la vision.
2. Consultez le [GLOSSAIRE.md](GLOSSAIRE.md) pour vous familiariser avec le vocabulaire.
3. Suivez le [CAHIER_TECHNIQUE.md](CAHIER_TECHNIQUE.md) pour configurer votre environnement.

**Développeur Backend ?**
1. Étudiez l'[ARCHITECTURE.md](ARCHITECTURE.md) et le [MODELE_DONNEES.md](MODELE_DONNEES.md).
2. Consultez les [ACTIONS_FUTURES.md](ACTIONS_FUTURES.md) pour voir les tâches prioritaires (Actuellement : *Création de la Service Layer*).

---
*Dernière mise à jour: 2026-07-04*
