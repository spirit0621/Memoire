# Glossaire - Application Memoire

## Sommaire
- [1. Termes Métier RH](#1-termes-métier-rh)
- [2. Termes Techniques](#2-termes-techniques)
- [3. Termes Projet](#3-termes-projet)
- [4. Abréviations](#4-abréviations)
- [5. Statuts et Énumérations](#5-statuts-et-énumérations)
- [6. Conventions de Nommage](#6-conventions-de-nommage)
- [7. Autres Termes](#7-autres-termes)

## 1. Termes Métier RH

### 1.1 Employé / Employee

Personne travaillant pour l'établissement. Possède un profil dans le système avec informations personnelles, contrats, absences et bulletins de paie.

### 1.2 Contrat / Contract

Document légal définissant la relation de travail entre l'établissement et l'employé. Définit le type (CDI, CDD, Stage), la période, le salaire et les conditions.

### 1.3 Poste / Position

Fonction occupée par l'employé dans l'établissement. Exemples: Développeur, Manager, RH, etc.

### 1.4 Établissement / Establishment

Lieu ou entité juridique employant les salariés. Exemple: Siège social, filiale, agence.

### 1.5 Bulletin de Paie / Payslip

Document détaillant le salaire brut, les déductions, les cotisations et le salaire net pour une période donnée. Remis mensuellement à chaque employé.

### 1.6 Salaire Brut / Gross Salary

Montant total avant déductions. Somme du salaire de base et des primes.

### 1.7 Salaire Net / Net Salary

Montant reçu par l'employé après déductions et cotisations.

### 1.8 Cotisations Sociales / Social Contributions

Prélèvements obligatoires (sécurité sociale, retraite, assurance chômage, etc.).

### 1.9 Retenue d'Impôt / Income Tax Withholding

Impôt prélevé sur le salaire.

### 1.10 Éléments de Paie / Payroll Elements

Composantes du bulletin: salaire, primes, bonus, heures supplémentaires, retenues, cotisations.

### 1.11 Absence / Absence

Période où l'employé n'est pas présent au travail. Types: Congés, maladie, congé parental, formation.

### 1.12 Solde de Congés / Leave Balance

Nombre de jours de congés disponibles pour l'employé.

### 1.13 Congé Payé / Paid Leave

Période d'absence rémunérée où l'employé ne travaille pas mais reçoit son salaire.

### 1.14 Jour Férié / Public Holiday

Jour non travaillé officiel où l'employé n'est pas tenu de travailler.

### 1.15 Période de Paie / Payroll Period

Période couverte par un bulletin (généralement mensuelle): 2024-01, 2024-02, etc.

## 2. Termes Techniques

### 2.1 Backend

Partie serveur de l'application. Code exécuté côté serveur (Spring Boot, Java).

### 2.2 Frontend

Partie client de l'application. Code exécuté dans le navigateur (HTML, CSS, JavaScript).

### 2.3 API (Application Programming Interface)

Interface permettant la communication entre Frontend et Backend. REST API exposant des endpoints.

### 2.4 REST / RESTful API

Style architectural pour créer des APIs utilisant HTTP (GET, POST, PUT, DELETE).

### 2.5 Endpoint

URL accessible par une API. Exemple: `/api/employees/{id}`

### 2.6 Repository

Classe d'accès aux données. Contient les requêtes pour récupérer et persister les données en base.

### 2.7 Service

Classe contenant la logique métier. Utilisée par les Controllers, appelle les Repositories.

### 2.8 Controller

Classe recevant les requêtes HTTP et appelant les Services appropriés.

### 2.9 Entity / Model

Classe représentant une table de base de données. Utilise annotations JPA.

### 2.10 DTO (Data Transfer Object)

Objet utilisé pour transférer les données entre couches.

### 2.11 ORM (Object-Relational Mapping)

Technologie mappant les objets Java aux tables de base de données (JPA/Hibernate).

### 2.12 JPA (Java Persistence API)

Spécification pour la persistance des données en Java.

### 2.13 Hibernate

Implémentation open-source de JPA.

### 2.14 Maven

Outil de build et gestionnaire de dépendances pour les projets Java.

### 2.15 Spring Boot

Framework simplifiant la création d'applications Spring.

### 2.16 Dependency Injection

Pattern d'inversion de contrôle. Spring injecte les dépendances automatiquement (@Autowired).

### 2.17 JWT (JSON Web Token)

Token d'authentification. Format standardisé pour les tokens.

### 2.18 Session

Mécanisme d'authentification alternatif stockant l'état côté serveur.

### 2.19 Token

Identificateur unique accordé après authentification. Utilisé dans chaque requête.

### 2.20 SPA (Single Page Application)

Application web où le contenu est chargé dynamiquement sans rechargement de page.

### 2.21 Router

Composant navigant entre les différentes vues de la SPA.

### 2.22 State

Données globales partagées par l'application Frontend.

### 2.23 CRUD

Create, Read, Update, Delete - Opérations de base sur les données.

### 2.24 RBAC (Role-Based Access Control)

Contrôle d'accès basé sur les rôles utilisateur.

### 2.25 CORS (Cross-Origin Resource Sharing)

Mécanisme permettant à une application web d'accéder aux ressources d'un autre domaine.

### 2.26 CSRF (Cross-Site Request Forgery)

Attaque web. Mitigation: Tokens CSRF.

### 2.27 XSS (Cross-Site Scripting)

Injection de code malveillant. Mitigation: Escaping de données.

### 2.28 SQL Injection

Attaque exploitant les entrées SQL. Mitigation: Parameterized queries.

### 2.29 Docker

Plateforme de containerisation. Permet d'empaqueter l'application avec ses dépendances.

### 2.30 Docker Compose

Outil orchestrant plusieurs conteneurs Docker.

### 2.31 CI/CD (Continuous Integration / Continuous Deployment)

Pipeline automatisant le build, test et déploiement.

## 3. Termes Projet

### 3.1 MVP (Minimum Viable Product)

Version minimale du produit avec les fonctionnalités essentielles.

### 3.2 UAT (User Acceptance Testing)

Tests d'acceptation utilisateur avant production.

### 3.3 v1.0, v2.0

Version du logiciel. v1.0 = MVP, v2.0 = Évolutions futures.

### 3.4 Roadmap

Plan de développement montrant les phases et évolutions futures.

### 3.5 User Story

Description d'une fonctionnalité du point de vue utilisateur.

### 3.6 Sprint

Période de développement (généralement 2 semaines).

### 3.7 Deliverable

Livrable: Document, code, ou fonctionnalité prêt pour livraison.

## 4. Abréviations

| Abréviation | Signification                        |
| ------------ | ------------------------------------ |
| RH           | Ressources Humaines                  |
| API          | Application Programming Interface    |
| HTTP         | HyperText Transfer Protocol          |
| HTTPS        | HTTP Secure                          |
| REST         | Representational State Transfer      |
| CRUD         | Create, Read, Update, Delete         |
| ORM          | Object-Relational Mapping            |
| JPA          | Java Persistence API                 |
| SQL          | Structured Query Language            |
| JDBC         | Java Database Connectivity           |
| JWT          | JSON Web Token                       |
| RBAC         | Role-Based Access Control            |
| CORS         | Cross-Origin Resource Sharing        |
| CSRF         | Cross-Site Request Forgery           |
| XSS          | Cross-Site Scripting                 |
| SPA          | Single Page Application              |
| DTO          | Data Transfer Object                 |
| MVP          | Minimum Viable Product               |
| UAT          | User Acceptance Testing              |
| CI/CD        | Continuous Integration/Deployment    |
| CDI          | Contrat à Durée Indéterminée     |
| CDD          | Contrat à Durée Déterminée       |
| HTML         | HyperText Markup Language            |
| CSS          | Cascading Style Sheets               |
| JS           | JavaScript                           |
| IDE          | Integrated Development Environment   |
| PR           | Pull Request                         |
| GIT          | Système de contrôle de version     |
| JSON         | JavaScript Object Notation           |
| PDF          | Portable Document Format             |
| CSV          | Comma-Separated Values               |
| KPI          | Key Performance Indicator            |
| QA           | Quality Assurance                    |
| UI/UX        | User Interface/User Experience       |
| WCAG         | Web Content Accessibility Guidelines |

## 5. Statuts et Énumérations

### 5.1 Statut Utilisateur

- **ACTIVE:** Utilisateur actif
- **INACTIVE:** Utilisateur inactif

### 5.2 Rôles Utilisateur

- **ADMIN:** Administrateur système
- **MANAGER:** Manager d'équipe
- **EMPLOYEE:** Employé standard
- **PAYROLL:** Responsable paie

### 5.3 Types de Contrat

- **CDI:** Contrat à Durée Indéterminée
- **CDD:** Contrat à Durée Déterminée
- **STAGE:** Stage
- **ALTERNANCE:** Alternance

### 5.4 Statut de Bulletin de Paie

- **DRAFT:** Brouillon
- **SUBMITTED:** Soumis
- **VALIDATED:** Validé
- **FINALIZED:** Finalisé
- **ARCHIVED:** Archivé

### 5.5 Statut d'Absence

- **PENDING:** En attente d'approbation
- **APPROVED:** Approuvé
- **REJECTED:** Rejeté
- **CANCELLED:** Annulé

### 5.6 Types d'Absence

- **VACATION:** Vacances/Congés payés
- **SICK_LEAVE:** Congé maladie
- **PARENTAL_LEAVE:** Congé parental
- **UNPAID_LEAVE:** Congé sans solde
- **TRAINING:** Formation
- **SPECIAL_LEAVE:** Congé spécial

### 5.7 Types d'Éléments de Paie

- **SALARY:** Salaire de base
- **BONUS:** Prime/Bonus
- **OVERTIME:** Heures supplémentaires
- **ALLOWANCE:** Allocation
- **SOCIAL_CONTRIBUTION:** Cotisation sociale
- **TAX_WITHHOLDING:** Retenue d'impôt
- **INSURANCE:** Assurance
- **DEDUCTION:** Déduction

## 6. Conventions de Nommage

### 6.1 Base de Données

- Tables: `snake_case`, pluriel (ex: `employees`, `user_roles`)
- Colonnes: `snake_case` (ex: `first_name`, `created_at`)
- Primary Key: `id`
- Foreign Key: `{entity}_id` (ex: `employee_id`, `user_id`)

### 6.2 Java Code

- Classes: `PascalCase` (ex: `Employee`, `PayslipService`)
- Méthodes: `camelCase` (ex: `calculateSalary()`, `getEmployeeById()`)
- Variables: `camelCase` (ex: `totalSalary`, `isActive`)
- Constantes: `UPPER_SNAKE_CASE` (ex: `MAX_EMPLOYEE_COUNT`)
- Packages: `lowercase.hierarchy` (ex: `victor.project.memoire.service`)

### 6.3 Frontend (JavaScript)

- Variables: `camelCase` (ex: `userId`, `isLoading`)
- Constants: `UPPER_SNAKE_CASE` (ex: `API_BASE_URL`)
- Functions: `camelCase` (ex: `fetchEmployees()`, `handleSubmit()`)
- Classes/Constructors: `PascalCase`

### 6.4 CSS/HTML

- Classes CSS: `kebab-case` (ex: `user-card`, `btn-primary`)
- IDs HTML: `camelCase` ou `kebab-case` (ex: `userId`, `user-id`)

## 7. Autres Termes

### 7.1 Workflow

Processus / flux de travail. Ex: Workflow d'approbation de congés.

### 7.2 Notification

Message informatif envoyé à l'utilisateur (email, in-app, SMS).

### 7.3 Audit

Traçabilité des actions. Qui a fait quoi, quand et comment.

### 7.4 Log

Enregistrement d'événements du système pour debugging et suivi.

### 7.5 Cache

Stockage temporaire de données fréquemment accédées.

### 7.6 Query

Requête à la base de données.

### 7.7 Migration

Changement du schéma de base de données.

### 7.8 Seed Data

Données de test initiales chargées dans la base de données.

### 7.9 Scalability

Capacité à gérer une augmentation de charge (utilisateurs, données).

### 7.10 Latency

Délai entre une requête et sa réponse.

### 7.11 Throughput

Nombre de requêtes traitées par unité de temps.

---

*Dernière mise à jour: 2026-07-03*
