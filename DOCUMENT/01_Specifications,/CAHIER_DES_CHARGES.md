# Cahier des Charges - Application Memoire

## Sommaire

- [1. Identification du Projet](#1-identification-du-projet)
- [2. Exigences Fonctionnelles](#2-exigences-fonctionnelles)
  - [2.6 Interfaces Utilisateur et Objectifs des Pages](#26-interfaces-utilisateur-et-objectifs-des-pages)
- [3. Exigences Non Fonctionnelles](#3-exigences-non-fonctionnelles)
- [4. Ressources](#4-ressources)
- [5. Estimations du Temps de Travail](#5-estimations-du-temps-de-travail)
- [6. Planning et Phases](#6-planning-et-phases)
- [7. Critères de Réussite](#7-critères-de-réussite)
- [8. Risques et Mitigation](#8-risques-et-mitigation)
- [9. Exclusions](#9-exclusions)
- [10. Validations du Mémoire](#10-validations-du-mémoire)

## 1. Identification du Projet

### 1.1 Général

- **Nom du projet:** Memoire
- **Type:** Application web de gestion RH et paie (Projet personnel - Mémoire de fin d'études en alternance)
- **Développeur:** Seul étudiant en alternance
- **Date de création:** 2026
- **Statut:** En développement

### 1.2 Objectifs

- Centraliser la gestion des ressources humaines
- Automatiser la génération de bulletins de paie
- Faciliter la gestion des absences et congés
- Offrir une interface simple et intuitive
- Assurer la sécurité des données sensibles

## 2. Exigences Fonctionnelles

### 2.1 Authentification

- Authentification par email/mot de passe
- Gestion des rôles (Admin, Manager, Employee, Payroll)
- Contrôle d'accès granulaire
- Politique de mot de passe forte
- Réinitialisation sécurisée de mot de passe

### 2.2 Gestion des Ressources Humaines

#### Utilisateurs et Employés

- CRUD complet pour les employés
- Historique des contrats
- Gestion des informations personnelles
- Archivage des employés

#### Contrats

- Création et modification de contrats
- Types de contrats (CDI, CDD, Stage, Alternance)
- Suivi des périodes d'essai
- Date de fin de contrat
- Génération d'attestations

#### Postes et Établissements

- Catalogue de postes
- Catalogue d'établissements
- Affectation des employés aux postes/établissements
- Historique des affectations

### 2.3 Gestion des Absences

- Demande de congé par les employés
- Workflow d'approbation
- Gestion du solde de congés
- Types d'absence (vacances, maladie, congé parental, etc.)
- Notification des managers
- Historique des absences

### 2.4 Gestion de la Paie

- Création de bulletins de paie
- Éléments de paie (salaires, primes, retenues)
- Calcul automatique des cotisations sociales
- Validation avant finalisation
- Consultation des bulletins par employés
- Export en formats standards (PDF, Excel)
- Historique de paie

### 2.5 Tableau de Bord

- Dashboard personnalisé selon le rôle
- KPIs et statistiques
- Notifications des actions en attente
- Vue d'ensemble de l'activité

### 2.6 Interfaces Utilisateur et Objectifs des Vues

Afin de répondre aux exigences fonctionnelles, l'application est structurée autour des vues principales suivantes (pages et modales imbriquées) :

- **Page 1: Connexion**
  Interface de sécurité (Email/Mot de passe) avec redirection automatique selon le rôle (ADMIN ou Salarié).
- **Page 2: Profil (pour salarié)**
  ces informations persos
- **Page 3: Bulletin de paie (pour salarié)**
  Bulletin de paie
  filtre par mois et année
  extraire sous forme PDF
- **Page 4: Liste des employés (pour RH)**
  Filtre nom prenom
  information sur salarié
  ajouter supprimer et modifier un salarié
  - **Fenêtre A: Création de Salarié (Onboarding)**
  - **Fenêtre B: Suivi et Modification du Salarié**
- **Page 5 : Gestion des Établissements**
  Liste des établissements
  CRUD des établissements
  - **Fenêtre C: Édition / Création d'Établissement**
  - **Fenêtre D: Modification Établissement**
- **Page 6: Bulletin de paie (pour Admin)**
  Bulletin de paie
  filtre par mois, année, personne
  extraire sous forme PDF
  - **Fenêtre E: Détail et Validation du Bulletin** - *Objectif:* Prévisualiser le calcul d'un bulletin avant son verrouillage (validation). S'assure que les retenues et les primes sont correctes et les envoyée.
- **Page 7: Paramétrage**
  Interface technique pour mettre à jour les taux de cotisations , les règles et les variables globales de l'entreprise.
  - **Fenêtre F: Édition / Création de Règle de Paie**
- **Page 8: Conformité Réglementaire et RGPD**
  *Objectif:* Répondre aux obligations légales en exposant de manière transparente la politique de confidentialité et de sécurisation des données sensibles.
- **Page 9: Contact et Support**
  *Objectif:* Fournir un canal de communication direct pour l'assistance technique ou administrative.

## 3. Exigences Non Fonctionnelles

### 3.1 Performance

- Temps de réponse: < 2 secondes pour 95% des requêtes
- Capacité: Support d'au moins 1000 utilisateurs
- Concurrence: Gestion de 100 connexions simultanées
- Export: Génération de 100+ bulletins en < 5 secondes

### 3.2 Disponibilité

- Disponibilité: 99.5% pendant les heures de travail
- Temps de récupération: < 1 heure en cas d'incident
- Sauvegarde: Quotidienne avec retention 30 jours

### 3.3 Sécurité

- Chiffrement des données sensibles (AES-256)
- Authentification sécurisée (bcrypt pour mots de passe)
- RBAC (Role-Based Access Control)
- Audit complet des actions sensibles
- Conformité RGPD
- HTTPS obligatoire
- Protection contre les injections SQL (Parameterized queries)

### 3.4 Scalabilité

- Architecture modulaire
- Support de clustering si nécessaire
- Cache pour les données fréquemment accédées

### 3.5 Maintenabilité

- Code bien documenté
- Tests unitaires et d'intégration
- Logging complèt
- Documentation technique à jour

### 3.6 Compatibilité

- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Responsive design (Desktop, Tablet, Mobile)
- Résolution minimum: 1024x768

## 4. Ressources

### 4.1 Humaines

- **1 Étudiant en alternance** assumant l'ensemble des rôles du cycle de développement :
  - Lead / Architecte Logiciel
  - Développeur Backend & Frontend
  - QA / Testeur
  - Product Owner / Analyse métier

### 4.2 Matérielles

- Serveur de développement
- Serveur de test
- Serveur de production
- Base de données production + backups

### 4.3 Outils

- IDE: IntelliJ IDEA / VS Code
- Contrôle de version: Git
- Build: Maven
- CI/CD: À définir (Jenkins, GitHub Actions, etc.)
- Conteneurisation: Docker
- SGBD: À définir (MySQL/PostgreSQL)

## 5. Estimations du Temps de Travail

*Note : Les coûts financiers classiques sont remplacés par une estimation du temps investi par l'étudiant.*

### 5.1 Développement

- Analyses et conception: 80 h
- Développement Backend: 240 h
- Développement Frontend: 160 h
- Tests et QA: 120 h
- Déploiement et Rédaction du Mémoire: 100 h
- **Total:** ~700 heures

### 5.2 Infrastructure (Environnement de dev)

- Hébergement Cloud (ex: Heroku/AWS) : Gratuit (tiers étudiants) ou faible coût.
- Licences logiciels : Licences étudiantes (IntelliJ Ultimate, etc.)

## 6. Planning et Phases

### 6.1 Phase 1 - Conception (Semaines 1-2)

- [ ] Finaliser les exigences
- [ ] Créer les schémas UML
- [ ] Concevoir la base de données
- [ ] Définir l'architecture

### 6.2 Phase 2 - Développement Backend (Semaines 3-6)

- [ ] Mise en place Spring Boot
- [ ] Implémentation des modèles
- [ ] Implémentation des repositories
- [ ] Implémentation des services
- [ ] Implémentation des contrôleurs API
- [ ] Tests unitaires

### 6.3 Phase 3 - Développement Frontend (Semaines 4-7)

- [ ] Mise en place structure HTML/CSS
- [ ] Implémentation des vues (Login, Dashboard, etc.)
- [ ] Intégration API
- [ ] Responsive design
- [ ] Tests d'intégration

### 6.4 Phase 4 - Tests et Déploiement (Semaines 8-10)

- [ ] Tests de performance
- [ ] Tests de sécurité
- [ ] Préparation des données de production
- [ ] Déploiement en staging
- [ ] UAT (User Acceptance Testing)
- [ ] Déploiement en production

## 7. Critères de Réussite

- ✅ Toutes les fonctionnalités implémentées et testées
- ✅ Performance conforme aux exigences
- ✅ Sécurité validée par audit
- ✅ Documentation complète
- ✅ Acceptation utilisateur
- ✅ Déploiement en production

## 8. Risques et Mitigation

| Risque                    | Probabilité | Impact     | Mitigation                             |
| ------------------------- | ------------ | ---------- | -------------------------------------- |
| Surcharge fonctionnelle   | Moyenne      | Haut       | Prioriser les fonctionnalités MVP     |
| Problèmes de performance | Moyen        | Haut       | Tests de charge réguliers             |
| Défauts de sécurité    | Basse        | Très Haut | Audit de sécurité dès la conception |
| Délais dépassés        | Moyenne      | Moyen      | Suivi strict du planning               |
| Turnover équipe          | Basse        | Haut       | Bonne documentation et onboarding      |

## 9. Exclusions

- Intégration comptable automatique (V2)
- Mobile app native (V2)
- Système de timesheet (V2)
- Évaluation de performances (V2)
- Multi-langue (V1) - English seulement

## 10. Validations du Mémoire

| Rôle               | Nom | Date | Signature |
| ------------------- | --- | ---- | --------- |
| Étudiant           | TBD |      |           |
| Tuteur Pédagogique | TBD |      |           |
| Tuteur Entreprise   | TBD |      |           |

---

*Dernière mise à jour: 2026-07-03*
