# Cahier des Charges Technique - Memoire

## 1. Architecture du Projet
Le projet suit une architecture monolithique basée sur Spring Boot pour le backend, offrant une API RESTful consommée par une Single Page Application (SPA) en Frontend.

## 2. Stack Technologique Détaillée
### 2.1 Backend (Serveur)
- **Langage** : Java 17+
- **Framework Principal** : Spring Boot 3.x
- **Accès aux données** : Spring Data JPA / Hibernate
- **Sécurité** : Spring Security, jjwt (JSON Web Token)
- **Validation** : Spring Boot Validation (Hibernate Validator)
- **Mapping Objets** : MapStruct (pour transformer les Entités en DTO)
- **Utilitaires** : Lombok (pour réduire le boilerplate code)
- **Outil de Build** : Maven

### 2.2 Frontend (Client)
- **Langage** : JavaScript (ES6+) / TypeScript
- **Framework** : Vue.js ou React (à finaliser selon les ressources)
- **Styling** : Tailwind CSS ou Bootstrap 5 pour un design responsive
- **Client HTTP** : Axios

### 2.3 Base de Données
- **SGBD Relationnel** : PostgreSQL 15+ (pour sa robustesse en production)
- **Gestionnaire de versions de BDD** : Flyway ou Liquibase (recommandé pour suivre les évolutions du schéma).

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
