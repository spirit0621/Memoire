# Memoire - Application RH & Paie (GFPS)

> **GFPS (Génération de Fiches de Paie Simplifiées)** est un Proof of Concept (PoC) développé dans le cadre d'un mémoire de fin d'études en alternance. Ce projet vise à moderniser et centraliser la gestion des ressources humaines et le calcul de la paie.

L'intégralité de la documentation d'analyse, d'architecture et de suivi de projet est centralisée dans le dossier **[DOCUMENT/INDEX.md](DOCUMENT/INDEX.md)**.

---

## 📑 Sommaire

1. [Vue d&#39;ensemble du Projet](#1-vue-densemble-du-projet)
2. [Cahier des Charges](#2-cahier-des-charges)
3. [Architecture &amp; Technique](#3-architecture--technique)
4. [Guide de Démarrage Rapide](#4-guide-de-démarrage-rapide)

---

## 1. Vue d'ensemble du Projet

Face à la fragmentation des outils actuels au sein de grands groupes (comme Eiffage avec les logiciels GXP, Business Objects, ACE) et à la rigidité des processus vieillissants, **GFPS** se positionne comme un système moderne, intégré et paramétrable, évitant la rupture de la chaîne de données et les ressaisies manuelles chronophages.

**Objectifs :**

- 💼 **Métier :** Centraliser, uniformiser et fluidifier la gestion RH et le calcul de la paie.
- ⚙️ **Technique :** Offrir de la flexibilité via un moteur de paie paramétrable.
- 🎓 **Académique :** Prouver la maîtrise d'un cycle de développement complet (Full-Stack) et assurer une fiabilité absolue.

---

## 2. Cahier des Charges

Le périmètre du MVP a été défini selon une méthodologie **Agile (Kanban)**, adaptée à un développement "solo dev", garantissant une priorisation des fonctionnalités critiques.

### 2.1 Exigences Fonctionnelles (MVP)

- **Authentification & Sécurité :** Connexion par Email/Mot de passe, politique de mot de passe forte, et gestion stricte des rôles via RBAC (Admin, Employé). Redirection automatique selon le rôle.
- **Gestion RH (CRUD) :** Interface Administrateur pour la création, la modification et l'archivage d'employés. Gestion des affectations (Établissements / Postes) et de l'historique des contrats (CDI, CDD, Alternance, Stage).
- **Gestion des Absences :** Système de demande de congés par les employés, incluant un workflow d'approbation et le calcul des soldes de congés.
- **Génération de la Paie :** Moteur de paie permettant le calcul automatique des salaires nets (déductions, primes, cotisations patronales/salariales). Phase de validation par l'Administrateur avant verrouillage, et export en PDF.
- **Espaces Employés :** Accès sécurisé pour chaque salarié à son profil et à l'historique de ses bulletins téléchargeables.
- **Paramétrage :** Interface technique permettant l'édition des règles de paie et des taux de cotisations de l'entreprise.

### 2.2 Exigences Non Fonctionnelles

- **Performances :** Temps de réponse inférieur à 2 secondes pour 95% des requêtes. Génération de rapports et bulletins (plus de 100 bulletins) en moins de 5 secondes. Conçu pour supporter une charge de 100 connexions simultanées.
- **Sécurité :** Chiffrement des mots de passe (Bcrypt), chiffrement des données sensibles (AES-256), prévention des injections SQL (via requêtes paramétrées Hibernate JPA), et conformité aux standards RGPD.
- **Ergonomie :** Application entièrement *Responsive* (Mobile, Tablette, Desktop) garantissant une expérience fluide via une SPA.

---

## 3. Architecture & Technique

L'application repose sur une **Architecture N-Tiers (Monolithique)** robuste. Le choix du monolithe découplé (Backend API / Frontend SPA) permet d'éviter l'over-engineering tout en permettant une évolution future vers des microservices.

### 3.1 Stack Technologique

* **Backend :**
  * Java 21
  * Spring Boot 3.5.11
  * Spring Web (API RESTful), Spring Data JPA (Hibernate), Spring Security (JWT/Session).
  * Outil de build : Maven.
* **Base de données :** MySQL (Connecteur `mysql-connector-j`), modélisation optimisée (Merise) pour gérer les cardinalités complexes entre les contrats, les éléments de paie et les bulletins.
* **Frontend :**
  * Vanilla JS (ES6+) fonctionnant via un routeur client léger (`router.js`).
  * CSS natif sans framework lourd, basé sur les principes de design "Glassmorphism" pour une interface moderne.

### 3.2 Normes et Outils de Développement

- **Outils de Modélisation :** Looping (MCD/MLD de la base de données), Draw.io (Wireframes, Sitemap, Workflows).
- **Gestion de versions :** Git & GitHub (GitFlow : `feature/`, `bugfix/` vers `develop`).
- **Assistance et Qualité :** Pair-programming avec l'IA Gemini pour la validation algorithmique du moteur de paie. Code Java formaté selon Checkstyle (CamelCase).
- **Stratégie de Test cible :** JUnit 5 / Mockito pour les tests unitaires des Services, couverture de code visée à plus de 80% (via SonarQube/Jacoco).
- **Conteneurisation :** Déploiement local et orchestration de la base de données via Docker et Docker Compose.

---

## 4. Guide de Démarrage Rapide

### Prérequis

- Java 21
- Maven
- Docker & Docker Compose

### 4.1. Lancer la Base de Données

Un fichier `compose.yml` est inclus dans le dossier `memoire` pour provisionner rapidement l'environnement MySQL local. Placez-vous d'abord dans ce dossier :

```bash
cd memoire
docker-compose up -d
```

*(Identifiants : User: `myuser`, Password: `userpassword`, Database: `MemoireDB`, Port: `3306`)*

### 4.2. Lancer le Serveur Spring Boot

Le projet inclut un wrapper Maven (`mvnw`) pour garantir la bonne version. Placez-vous à la racine du dossier `memoire` :

**Sous Linux / macOS :**

```bash
./mvnw spring-boot:run
```

**Sous Windows :**

```cmd
mvnw.cmd spring-boot:run
```

L'application sera accessible sur `http://localhost:8080`.
