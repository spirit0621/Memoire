# Cahier Fonctionnel - Application Memoire

**Date:** 2026-07-03
**Version:** 1.1 (Mis à jour avec état d'implémentation)
**État Global:** 5-10% - Phase 2 Backend en cours

---

## Sommaire
- [1. Présentation du Projet](#1-présentation-du-projet)
- [2. Fonctionnalités Principales](#2-fonctionnalités-principales)
- [3. Flux de Travail Clés](#3-flux-de-travail-clés)
- [4. Interfaces Utilisateur (Vue Navigation)](#4-interfaces-utilisateur-vue-navigation)
- [5. Critères de Validation](#5-critères-de-validation)
- [6. Évolutions Futures (v2.0 et au-delà)](#6-évolutions-futures-v20-et-au-delà)
- [7. Tableau de Synthèse - État d'Implémentation](#7-tableau-de-synthèse---état-dimplémentation)
- [8. Notes Importantes pour l'Équipe](#8-notes-importantes-pour-léquipe)

## 📊 Résumé d'Implémentation

```
✅ = Fonctionnel (Endpoint API opérationnel)
⚠️  = UI existante / Backend manquant
❌ = Non commencé
```

**Progression globale:** 5-10% complété

- ✅ **Authentification (Login):** FONCTIONNEL
- ✅ **Base de données:** 100% modèles créés
- ⚠️  **Frontend UI:** 100% des vues créées (mais sans API)
- ❌ **Services métier:** À créer (BLOCAGE)
- ❌ **Endpoints REST:** Seulement login + liste utilisateurs

---

## 1. Présentation du Projet

### 1.1 Objectif

L'application **Memoire** est une plateforme de gestion intégrée des ressources humaines (RH) et de la paie, permettant une administration simplifiée des employés, contrats, absences et bulletins de paie.

### 1.2 Utilisateurs Cibles

- **Administrateurs RH:** Gestion complète du système
- **Managers:** Suivi des équipes et absences
- **Employés:** Consultation de leurs données et bulletins de paie
- **Responsable Paie:** Génération et gestion des bulletins

## 2. Fonctionnalités Principales

### 2.1 Authentification et Autorisation

**Acteur:** Tous les utilisateurs
**État d'implémentation:** ✅ 50% - Login fonctionnel, RBAC en attente

#### Besoins Fonctionnels

- [X] ✅ **Connexion avec email et mot de passe** - FONCTIONNEL

  - Endpoint: `POST /api/auth/login`
  - Credentials de test: `alice.martin@techcorp.fr` / `admin` (Admin)
  - Credentials de test: `bob.dupont@techcorp.fr` / `employe` (Employee)
  - Validation BCrypt sécurisée
  - Retourne utilisateur connecté
- [ ] ⚠️ **Gestion des rôles** - Modèles OK, API de gestion manquante

  - Rôles en BD: ADMIN, MANAGER, EMPLOYEE, PAYROLL
  - À implémenter: Endpoints de gestion des rôles
- [ ] ❌ **Contrôle d'accès basé sur les rôles (RBAC)** - À implémenter

  - @PreAuthorize sur les endpoints requis
- [ ] ⚠️ **Déconnexion sécurisée** - Interface existe, backend manquant

  - Bouton Logout en navbar
  - À implémenter: `POST /api/auth/logout`
- [ ] ❌ **Réinitialisation de mot de passe** - Non commencé
- [ ] ❌ **Authentification multi-facteurs** - Future version (v2)

### 2.2 Gestion des Utilisateurs

**Acteur:** Administrateur RH
**État d'implémentation:** ❌ 5% - Listage basique seulement

#### Besoins Fonctionnels

- [ ] ⚠️ **Consulter la liste des utilisateurs** - PARTIELLEMENT

  - Endpoint: `GET /users` - Retourne liste basique
  - À compléter: Pagination, filtrage, formatage
- [ ] ❌ **Créer un utilisateur** - Non commencé

  - À implémenter: `POST /users` avec validation
- [ ] ❌ **Consulter détails utilisateur** - Non commencé

  - À implémenter: `GET /users/{id}`
- [ ] ❌ **Modifier les informations d'un utilisateur** - Non commencé

  - À implémenter: `PUT /users/{id}`
- [ ] ❌ **Supprimer un utilisateur (soft delete)** - Non commencé

  - À implémenter: `DELETE /users/{id}`
- [ ] ❌ **Assigner un rôle à un utilisateur** - Non commencé
- [ ] ❌ **Rechercher et filtrer les utilisateurs** - Non commencé

  - UI existe mais API manquante
- [ ] ❌ **Activer/désactiver un utilisateur** - Non commencé

### 2.3 Gestion des Employés

**Acteur:** Administrateur RH, Manager
**État d'implémentation:** ⚠️ 0% - Interface créée, API MANQUANTE

#### Besoins Fonctionnels

- [ ] ⚠️ **Créer un profil employé** - Interface UI existe, API manquante

  - Endpoint requis: `POST /api/employees`
  - Modal créé, formulaire prêt
- [ ] ⚠️ **Consulter les informations personnelles** - Interface existe, API manquante

  - Endpoint requis: `GET /api/employees`
  - Tableau d'affichage créé, mais pas de données
- [ ] ❌ **Modifier les coordonnées** - Non commencé

  - Endpoint requis: `PUT /api/employees/{id}`
- [ ] ❌ **Consulter l'historique des contrats** - Non commencé

  - Données en BD, API manquante
- [ ] ❌ **Consulter les absences** - Non commencé

  - Données en BD, API manquante
- [ ] ❌ **Voir le solde de congés** - Non commencé

  - Données en BD (LeaveBalance), API manquante
- [ ] ❌ **Consulter les bulletins de paie** - Non commencé

  - Interface existe, API manquante
- [ ] ❌ **Exporter les données (PDF, Excel)** - Non commencé

### 2.4 Gestion des Contrats

**Acteur:** Administrateur RH, Manager
**État d'implémentation:** ❌ 0% - Données en BD, API MANQUANTE

#### Besoins Fonctionnels

- [ ] ❌ **Créer un contrat** - Non commencé

  - Endpoint requis: `POST /api/contracts`
  - Modèle BD: ✅ Prêt (Contract avec relations)
- [ ] ❌ **Éditer les détails du contrat** - Non commencé

  - Endpoint requis: `PUT /api/contracts/{id}`
- [ ] ❌ **Consulter l'historique des contrats** - Non commencé

  - Endpoint requis: `GET /api/employees/{id}/contracts`
  - Données existent en BD
- [ ] ❌ **Définir date de début et fin** - Non commencé

  - Champs BD: startDate, endDate ✅ Existent
- [ ] ❌ **Associer un poste au contrat** - Non commencé

  - Relation BD: ✅ ManyToOne vers Position
- [ ] ❌ **Définir le type de contrat** - Non commencé

  - Enum BD: ✅ ContractType (CDI, CDD, STAGE, ALTERNANCE)
- [ ] ❌ **Générer une attestation d'emploi** - Non commencé

### 2.5 Gestion des Postes

**Acteur:** Administrateur RH
**État d'implémentation:** ❌ 0% - Données de test en BD, API MANQUANTE

#### Besoins Fonctionnels

- [ ] ❌ **Créer un poste** - Non commencé

  - Endpoint requis: `POST /api/positions`
  - Données test: ✅ Existent (Java Developer, Project Manager)
- [ ] ❌ **Consulter les postes disponibles** - Non commencé

  - Endpoint requis: `GET /api/positions`
- [ ] ❌ **Modifier les détails d'un poste** - Non commencé

  - Endpoint requis: `PUT /api/positions/{id}`
- [ ] ❌ **Archiver un poste** - Non commencé
- [ ] ❌ **Attribuer des employés à un poste** - Non commencé
- [ ] ❌ **Définir le salaire de base par poste** - Non commencé

  - Champs BD: ✅ minSalary, maxSalary existent

### 2.6 Gestion des Établissements

**Acteur:** Administrateur RH
**État d'implémentation:** ❌ 0% - Données de test en BD, API MANQUANTE

#### Besoins Fonctionnels

- [ ] ❌ **Créer un établissement** - Non commencé

  - Endpoint requis: `POST /api/establishments`
  - Données test: ✅ Existent (TechCorp SAS, Innovate SARL)
- [ ] ❌ **Consulter la liste des établissements** - Non commencé

  - Endpoint requis: `GET /api/establishments`
- [ ] ❌ **Modifier les informations** - Non commencé

  - Endpoint requis: `PUT /api/establishments/{id}`
- [ ] ❌ **Supprimer un établissement** - Non commencé

  - Endpoint requis: `DELETE /api/establishments/{id}`
- [ ] ❌ **Affecter des employés à un établissement** - Non commencé

### 2.7 Gestion des Absences et Congés

**Acteur:** Employé, Manager, Administrateur RH
**État d'implémentation:** ❌ 0% - Données de test en BD, API MANQUANTE

#### Besoins Fonctionnels

- [ ] ❌ **Demander une absence/congé** - Non commencé

  - Endpoint requis: `POST /api/absences`
  - Données test: ✅ Existent (PAID_LEAVE: 7/14-7/25)
- [ ] ❌ **Soumettre une demande de congé** - Non commencé

  - UI existe, API manquante
- [ ] ❌ **Approuver/Rejeter une demande** - Non commencé

  - Endpoints requis: `PUT /api/absences/{id}/approve`, `/reject`
- [ ] ❌ **Consulter l'historique des absences** - Non commencé

  - Endpoint requis: `GET /api/employees/{id}/absences`
- [ ] ❌ **Voir le solde de congés disponibles** - Non commencé

  - Endpoint requis: `GET /api/employees/{id}/leave-balance`
  - Données test: ✅ Existent (LeaveBalance créé dans Seed)
- [ ] ❌ **Calculer automatiquement le solde** - Non commencé

  - À implémenter dans AbsenceService
- [ ] ❌ **Gérer les types d'absences** - Non commencé

  - Enum BD: ✅ AbsenceType (VACATION, SICK_LEAVE, PARENTAL, UNPAID, TRAINING)

### 2.8 Gestion de la Paie

**Acteur:** Responsable Paie, Administrateur RH
**État d'implémentation:** ❌ 0% - Données de test en BD, LOGIQUE MANQUANTE

#### Besoins Fonctionnels

- [ ] ❌ **Créer un bulletin de paie** - Non commencé

  - Endpoint requis: `POST /api/payslips`
  - Données test: ✅ Existent (Payslip 04-2025 créé dans Seed)
  - Service requis: PayrollService avec logique de calcul
- [ ] ❌ **Ajouter des éléments de paie** - Non commencé

  - Endpoint requis: `POST /api/payslips/{id}/lines`
  - Données test: ✅ Existent (PERF_BONUS €200)
- [ ] ⚠️ **Consulter les bulletins générés** - Interface UI existe, API MANQUANTE

  - Endpoint requis: `GET /api/payslips`
  - Endpoint requis: `GET /api/payslips?period=2024-01`
- [ ] ❌ **Éditer un bulletin avant validation** - Non commencé
- [ ] ❌ **Valider et finaliser un bulletin** - Non commencé

  - Endpoint requis: `PUT /api/payslips/{id}/validate`
- [ ] ❌ **Calculer les retenues** - CRITIQUE - Non commencé

  - À implémenter dans PayrollService:
    - Calcul des cotisations sociales
    - Calcul des impôts
    - Calcul du net = Brut - Retenues
- [ ] ❌ **Générer les bulletins en masse** - Non commencé

  - Endpoint requis: `POST /api/payslips/batch`
  - UI existe mais backend manquant
- [ ] ❌ **Exporter les paies (format comptable)** - Non commencé
- [ ] ❌ **Consulter l'historique de paie** - Non commencé

### 2.9 Gestion des Éléments de Paie

**Acteur:** Responsable Paie, Administrateur RH
**État d'implémentation:** ⚠️ 0% - Données de test en BD, API MANQUANTE

#### Besoins Fonctionnels

- [ ] ⚠️ **Définir les éléments de paie** - Données test existent

  - Endpoint requis: `POST /api/payroll-elements`
  - Données test: ✅ PERF_BONUS créé dans Seed
  - Interface UI créée
- [ ] ❌ **Créer des éléments de paie personnalisés** - Non commencé

  - Endpoint requis: `POST /api/payroll-elements`
- [ ] ❌ **Associer les éléments aux employés** - Non commencé
- [ ] ❌ **Définir le montant et la fréquence** - Non commencé

  - Champs BD: ✅ value, quantity, inputType (FIXED, PERCENTAGE, VARIABLE)
- [ ] ❌ **Appliquer automatiquement les éléments aux bulletins** - Non commencé

  - À implémenter dans PayrollService

### 2.10 Tableau de Bord

**Acteur:** Tous les utilisateurs
**État d'implémentation:** ✅ 30% - Interface créée, logique partiellement implémentée

#### Besoins Fonctionnels

- [X] ✅ **Afficher les informations pertinentes selon le rôle** - PARTIELLEMENT

  - Dashboard Admin: ✅ Affiche total staff et infos paie
  - Dashboard Employee: ✅ Affiche heures supplémentaires
  - Endpoints requis pour compléter: plusieurs
- [X] ✅ **Dashboard Admin** - FONCTIONNEL BASIQUE

  - Nombre d'employés: ✅ Affiché (via UserRepository)
  - Base payroll: ✅ Calculé
  - Absences en attente: Endpoint requis
- [ ] ⚠️ **Dashboard Manager** - Interface non créée

  - Équipe, absences, performance: À construire
- [X] ✅ **Dashboard Employé** - FONCTIONNEL BASIQUE

  - Heures supplémentaires: ✅ Affiché
  - Solde de congés: Interface existe, API manquante
  - Derniers bulletins: Interface existe, API manquante
- [ ] ❌ **Graphiques et statistiques** - Non commencé

  - Requis: Charting library (Chart.js ou similaire)

### 2.11 Rapports et Exports

**Acteur:** Administrateur RH, Manager, Responsable Paie
**État d'implémentation:** ❌ 0% - Interface créée, API MANQUANTE

#### Besoins Fonctionnels

- [ ] ⚠️ **Générer des rapports de paie** - Buttons UI existent, API manquante

  - Endpoint requis: `POST /api/payslips/report`
- [ ] ⚠️ **Exporter en PDF** - Button prêt, API manquante

  - Endpoint requis: `GET /api/payslips/{id}/export/pdf`
  - Librairie requise: iText ou similaire
- [ ] ❌ **Exporter en Excel** - Non commencé

  - Endpoint requis: `GET /api/payslips/export/excel`
- [ ] ❌ **Exporter en format comptable** - Non commencé

  - Formats: SAGE, Ciel, etc.
- [ ] ❌ **Générer des lettres d'attestation d'emploi** - Non commencé

## 3. Flux de Travail Clés

### 3.1 Flux d'Embauche

**État:** ❌ Non implémenté

1. Admin crée un nouvel utilisateur (❌ Endpoint manquant)
2. Admin crée un profil employé (❌ Endpoint manquant)
3. Admin crée un contrat (❌ Endpoint manquant)
4. Admin affecte un poste (❌ Endpoint manquant)
5. Admin affecte un établissement (❌ Endpoint manquant)
6. Système initialise le solde de congés (⚠️ Logique à implémenter)

### 3.2 Flux de Gestion de Paie (Mensuel)

**État:** ❌ Non implémenté - CRITIQUE

1. Responsable Paie crée les bulletins pour la période (❌ Endpoint manquant)
2. Système applique les éléments de paie standards (❌ Logique manquante dans PayrollService)
3. Responsable ajoute les primes/ajustements (❌ Endpoint manquant)
4. Responsable valide et finalise (❌ Endpoint manquant)
5. Système génère les fichiers d'export (❌ Service manquant)
6. Employés consultent leurs bulletins (⚠️ Interface existe, API manquante)

### 3.3 Flux de Congés

**État:** ❌ Non implémenté

1. Employé soumet une demande (❌ Endpoint manquant)
2. Manager reçoit une notification (❌ Service de notifications manquant)
3. Manager approuve/rejette (❌ Endpoint manquant)
4. Si approuvée: système ajuste le solde (❌ Logique manquante)
5. Employé reçoit la confirmation (❌ Service manquant)

## 4. Interfaces Utilisateur (Vue Navigation)

### 4.1 Détail des Vues (Pages et Fenêtres imbriquées)

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

### 4.2 Arborescence Principale

```
├── Dashboard ✅ Créée
├── Employés ⚠️ UI créée, API manquante
│   ├── Liste ⚠️
│   └── Détail employé ⚠️
├── Contrats ❌ À créer
│   ├── Liste ❌
│   └── Détail contrat ❌
├── Paie ⚠️ UI créée, API manquante
│   ├── Bulletins ⚠️
│   ├── Éléments de paie ⚠️
│   └── Rapport de paie ⚠️
├── Absences ⚠️ UI partiellement créée
│   ├── Demandes ⚠️
│   └── Historique ⚠️
├── Établissements ❌ À créer
├── Postes ❌ À créer
├── Utilisateurs (Admin) ⚠️ UI créée, CRUD manquant
├── Paramètres ⚠️ UI créée, API manquante
└── Déconnexion ✅ Bouton créé, backend manquant
```

**Légende:**

- ✅ Implémenté et fonctionnel
- ⚠️ Interface créée, API/backend manquant
- ❌ À faire

## 5. Critères de Validation

### 5.1 Fonctionnalité

- ❌ Toutes les opérations CRUD fonctionnelles (Actuellement: 5% seulement)
- ❌ Calculs de paie exacte (À implémenter dans PayrollService)
- ❌ Validation de données robuste (À ajouter)
- ❌ Gestion des erreurs appropriée (À implémenter)

**État:** Seule l'authentification login fonctionne actuellement

### 5.2 Performance

- ⏳ Temps de réponse < 2 secondes (À tester)
- ⏳ Support 1000+ employés (À optimiser)
- ⏳ Export bulk < 5 secondes (À implémenter)

### 5.3 Sécurité

- ✅ Authentification sécurisée (BCrypt en place)
- ❌ RBAC appliqué correctement (À implémenter sur endpoints)
- ❌ Données sensibles chiffrées (À confirmer)
- ❌ Audit des modifications (À implémenter)

### 5.4 Expérience Utilisateur

- ✅ Interface intuitive (UI créée pour 100% des pages)
- ✅ Responsive design (CSS en place)
- ⚠️ Messages d'erreur clairs (À implémenter sur frontend)
- ❌ Notifications appropriées (À implémenter - Service manquant)

## 6. Évolutions Futures (v2.0 et au-delà)

- [ ] Système de notifications (email, SMS)
- [ ] Timesheet/Gestion du temps
- [ ] Évaluation des performances
- [ ] Organigramme interactif
- [ ] Intégration comptable automatique
- [ ] Mobile app
- [ ] Analytics avancées

## 7. Tableau de Synthèse - État d'Implémentation

| Catégorie                        | Complété    | État                     | Effort Restant       |
| --------------------------------- | ------------- | ------------------------- | -------------------- |
| **Authentification**        | 50%           | ✅ Login OK               | 2-3h (Logout + RBAC) |
| **Gestion Utilisateurs**    | 5%            | ⚠️ Listage seulement    | 4-5h                 |
| **Gestion Employés**       | 0%            | ⚠️ UI OK, API manquante | 6-8h                 |
| **Gestion Contrats**        | 0%            | ❌ À faire               | 5-6h                 |
| **Gestion Postes**          | 0%            | ❌ À faire               | 2-3h                 |
| **Gestion Établissements** | 0%            | ❌ À faire               | 2-3h                 |
| **Gestion Absences**        | 0%            | ❌ À faire               | 5-6h                 |
| **Gestion Paie**            | 0%            | ❌ CRITIQUE               | 12-15h               |
| **Dashboard**               | 30%           | ✅ Admin OK               | 2-3h                 |
| **Rapports & Exports**      | 0%            | ⚠️ UI OK, API manquante | 4-5h                 |
| **Frontend Integration**    | 15%           | ⚠️ Vues créées        | 10-15h               |
| **Tests**                   | 0%            | ❌ À faire               | 15-20h               |
| **TOTAL**                   | **10%** |                           | **70-90h**     |

## 8. Notes Importantes pour l'Équipe

### ✅ Ce qui fonctionne actuellement

1. **Login/Authentification** - Endpoint `/api/auth/login` opérationnel
2. **Modèles de données** - 10 entités JPA créées et relationnelles
3. **Seed Data** - Données de test chargées au démarrage
4. **Interface UI** - Toutes les pages créées et ergonomiques

### 🔴 Points Critiques de Blocage

1. **Service Layer inexistante** - Bloque toute logique métier
2. **PayrollService manquante** - Service le plus complexe et critique
3. **Endpoints REST incomplets** - Seulement 2 controllers sur 6 requis

### ⚠️ Dépendances Clés

- Les frontend dépend de la Service Layer
- La paie dépend de PayrollService
- Les endpoints dépendent des services

### 📋 Recommandation d'Ordre d'Implémentation

1. **Priorité 1:** Créer Service Layer (UserService, ContractService, PayrollService, AbsenceService)
2. **Priorité 2:** Implémenter PayrollService avec logique de calcul
3. **Priorité 3:** Compléter tous les endpoints REST
4. **Priorité 4:** Ajouter validation et gestion d'erreurs
5. **Priorité 5:** Tests et Frontend integration

---

*Dernière mise à jour: 2026-07-03*
*Version: 1.1 (Mise à jour avec état d'implémentation réel)*
*Responsable: Équipe Développement*
