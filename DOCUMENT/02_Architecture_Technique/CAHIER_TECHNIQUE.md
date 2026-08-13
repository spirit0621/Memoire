# Cahier Technique - Application Memoire

## Sommaire

- [1. Architecture du Projet](#1-architecture-du-projet)
- [2. Stack Technologique Détaillée](#2-stack-technologique-détaillée)
- [3. Déploiement et Infrastructure](#3-déploiement-et-infrastructure)
- [4. Stratégie de Test (À implémenter)](#4-stratégie-de-test-à-implémenter)
- [5. Normes et Conventions de Code](#5-normes-et-conventions-de-code)
- [6. Outils de Gestion de Projet et Conception](#6-outils-de-gestion-de-projet-et-conception)

## 1. Architecture du Projet

Le projet suit une architecture monolithique basée sur Spring Boot pour le backend, offrant une API RESTful consommée par une Single Page Application (SPA) en Frontend.

## 2. Stack Technologique Détaillée

### 2.1 Backend (Serveur)

- **Langage** : Java 21
- **Framework Principal** : Spring Boot 3.5.11
- **Modules Spring** :
  - Spring Web (pour l'API REST)
  - Spring Data JPA (avec Hibernate pour l'accès aux données)
  - Spring Security (pour l'authentification et l'autorisation)
  - Spring Boot Actuator (monitoring)
  - Spring Boot DevTools
- **Outil de Build** : Maven

### 2.2 Frontend (Client)

- **Langage** : JavaScript (ES6+) / Vanilla JS
- **Architecture** : Single Page Application (SPA) maison via le routeur `router.js` (sans framework lourd type React/Vue)
- **Styling** : CSS personnalisé (Vanilla CSS) avec principes Glassmorphism, pas de librairies lourdes (Bootstrap/Tailwind)
- **Client HTTP** : Fetch API ou Axios

### 2.3 Base de Données

- **SGBD Relationnel** : MySQL (connecteur `mysql-connector-j`)
- **Base de données configurée** : `MemoireDB` (port 3306)
- **Gestion du Schéma** : Auto-génération via Hibernate (`spring.jpa.hibernate.ddl-auto=update`)

## 3. Déploiement et Infrastructure

- **Conteneurisation** : Docker
  - `Dockerfile` pour le backend Spring Boot (OpenJDK Alpine).
  - `Dockerfile` pour le frontend (Node.js pour le build, Nginx pour servir les fichiers statiques).
  - `docker-compose.yml` pour orchestrer la base de données, le backend et le frontend en environnement de dev/test.

## 4. Stratégie de Test (À implémenter)

- **Tests Unitaires** : JUnit 5 et Mockito pour tester la couche Service isolément.
- **Tests d'Intégration** : TestRestTemplate ou MockMvc pour tester les endpoints de l'API avec une base de données embarquée (H2).
- **Couverture de code** : SonarQube ou Jacoco (objectif > 80%).

## 5. Normes et Conventions de Code

- **Git Flow** : Utilisation de branches `feature/nom-fonctionnalite`, `bugfix/nom-bug`, fusionnées vers `develop` via Pull Requests.
- **Conventions Java** : Respect strict du standard Java (CamelCase, packages en minuscules). Utilisation de Checkstyle.
- **API REST** :
  - Noms de ressources au pluriel (`/api/employees`, `/api/payrolls`).
  - Codes HTTP standard (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Error).

## 6. Outils de Gestion de Projet et Conception

Dans le cadre du développement de la plateforme GFPS, plusieurs outils spécialisés ont été utilisés pour structurer la conception, gérer le code et planifier l'avancement du projet en autonomie :

### 6.1 Looping (Modélisation de la Base de Données)
Pour assurer l'intégrité des données critiques (salaires, contrats, historique des employés), j'ai utilisé **Looping** afin de concevoir le Modèle Conceptuel de Données (MCD) et le Modèle Logique de Données (MLD). Cet outil m'a permis de visualiser clairement les cardinalités et les associations entre les différentes entités du projet (Employé, Établissement, Contrat, Bulletin) en respectant la méthode Merise. Il a été essentiel pour garantir une base de données relationnelle MySQL robuste, évolutive et sans redondance.

### 6.2 Draw.io (Conception Ergonomique et Navigation)
**Draw.io** m'a servi à modéliser toute l'expérience utilisateur (UX) avant même d'écrire la moindre ligne de code front-end. J'y ai conçu les *Wireframes* (maquettes de l'interface du tableau de bord RH et de l'espace salarié), l'arborescence de navigation du site (*Sitemap*) pour structurer les différentes pages, ainsi que les diagrammes de cas d'utilisation UML. Cela m'a permis d'avoir une vision visuelle claire des écrans à développer.

### 6.3 Git et GitHub (Versionnage et Sauvegarde)
Travaillant seul sur ce projet de mémoire, **Git** a été mon filet de sécurité indispensable. Il m'a permis de versionner mon code source (Java/Spring Boot) à chaque étape clé. J'ai utilisé **GitHub** comme dépôt distant pour sauvegarder mon travail dans le cloud, ce qui m'a garanti de ne jamais perdre mon code et m'a forcé à documenter mon avancement grâce à des historiques de commits clairs et structurés.

### 6.4 IA Gemini (Assistance et Pair-Programming)
Face à la complexité d'une architecture logicielle complète de A à Z, **l'IA Gemini** a joué le rôle de partenaire de "Pair-Programming". Elle m'a servi à optimiser mes algorithmes (notamment pour le moteur de calcul de la paie), à comprendre et résoudre plus rapidement les erreurs de compilation complexes de Java, et à m'assister dans la rédaction de la documentation technique. C'est un véritable atout qui a accéléré la résolution de bogues.

### 6.5 Planning et Méthode Kanban (Gestion du Temps)
Étant en alternance, je devais jongler entre mon travail chez Eiffage, mes cours au CFA INSTA et le développement de ce projet. J'ai donc opté pour une organisation agile en flux tendu via un **tableau Kanban** visuel (À faire, En cours, Terminé). Plutôt que de faire des Sprints rigides, cette méthode m'a permis de prioriser le développement des fonctionnalités critiques (comme l'authentification et les bulletins) et d'avancer à mon rythme sans surcharger mon planning.

---
[⬅️ Retour à l'Index principal](../INDEX.md)
