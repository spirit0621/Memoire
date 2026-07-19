# Architecture Logicielle - Application Memoire

## Sommaire
- [1. Vue d'Ensemble Architecturale](#1-vue-densemble-architecturale)
- [2. Structure des Composants Backend](#2-structure-des-composants-backend)
- [3. Structure du Frontend](#3-structure-du-frontend)
- [4. Flux d'Authentification](#4-flux-dauthentification)
- [5. Flux de Création de Bulletin de Paie](#5-flux-de-création-de-bulletin-de-paie)
- [6. Sécurité et Patterns](#6-sécurité-et-patterns)
- [7. Base de Données - Relations](#7-base-de-données---relations)
- [8. Performance et Optimisation](#8-performance-et-optimisation)
## 1. Vue d'Ensemble Architecturale

### 1.1 Pattern Architectural

L'application suit une **architecture en couches** (Layered Architecture) avec une séparation claire entre:

- **Présentation** (Frontend)
- **Business Logic** (Services)
- **Persistance** (Repository)
- **Data** (Database)

### 1.2 Diagramme Architectural (Vue Générale)

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Frontend (HTML/CSS/JS)                               │  │
│  │  - index.html (SPA)                                   │  │
│  │  - Views (Dashboard, Employees, Payslips, etc.)      │  │
│  │  - API Client (api.js)                                │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬─────────────────────────────────────┘
                         │ HTTP/JSON
┌────────────────────────▼─────────────────────────────────────┐
│                    SERVER LAYER                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Presentation Layer (Controllers)                    │  │
│  │  - AuthController                                    │  │
│  │  - UserController                                    │  │
│  │  - EmployeeController                                │  │
│  │  - PayslipController                                 │  │
│  │  - AbsenceController                                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                         │                                    │
│  ┌──────────────────────▼──────────────────────────────┐  │
│  │  Business Layer (Services)                           │  │
│  │  - UserService                                       │  │
│  │  - EmployeeService                                   │  │
│  │  - PayrollService                                    │  │
│  │  - AbsenceService                                    │  │
│  │  - ContractService                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│                         │                                    │
│  ┌──────────────────────▼──────────────────────────────┐  │
│  │  Data Layer (Repositories)                           │  │
│  │  - UserRepository                                    │  │
│  │  - EmployeeRepository                                │  │
│  │  - PayslipRepository                                 │  │
│  │  - AbsenceRepository                                 │  │
│  │  - ContractRepository                                │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬─────────────────────────────────────┘
                         │ JDBC
┌────────────────────────▼─────────────────────────────────────┐
│                    DATABASE LAYER                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Relational Database (MySQL/PostgreSQL)              │  │
│  │  - Users, Employees, Contracts, Positions           │  │
│  │  - Payslips, Absences, LeaveBalance                 │  │
│  │  - PayrollElements, Establishments                   │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## 2. Structure des Composants Backend

### 2.1 Couche de Présentation (Controllers)

```
Controllers/
├── AuthController
│   ├── POST /auth/login
│   ├── POST /auth/logout
│   ├── POST /auth/refresh-token
│   └── POST /auth/reset-password
│
├── UserController
│   ├── GET /users (avec pagination)
│   ├── GET /users/{id}
│   ├── POST /users
│   ├── PUT /users/{id}
│   └── DELETE /users/{id}
│
├── EmployeeController
│   ├── GET /employees (avec filtres)
│   ├── GET /employees/{id}
│   ├── GET /employees/{id}/contracts
│   ├── GET /employees/{id}/absences
│   ├── GET /employees/{id}/payslips
│   ├── POST /employees
│   ├── PUT /employees/{id}
│   └── DELETE /employees/{id}
│
├── ContractController
│   ├── GET /contracts
│   ├── GET /contracts/{id}
│   ├── POST /contracts
│   ├── PUT /contracts/{id}
│   └── DELETE /contracts/{id}
│
├── PayslipController
│   ├── GET /payslips
│   ├── GET /payslips/{id}
│   ├── POST /payslips
│   ├── PUT /payslips/{id}
│   ├── POST /payslips/{id}/validate
│   └── GET /payslips/{id}/export
│
└── AbsenceController
    ├── GET /absences
    ├── POST /absences
    ├── PUT /absences/{id}/approve
    └── PUT /absences/{id}/reject
```

### 2.2 Couche Métier (Services)

```
Services/
├── AuthService
│   ├── authenticate(email, password)
│   ├── generateToken()
│   ├── validateToken()
│   └── resetPassword()
│
├── UserService
│   ├── getAllUsers()
│   ├── getUserById()
│   ├── createUser()
│   ├── updateUser()
│   └── deleteUser()
│
├── EmployeeService
│   ├── getAllEmployees()
│   ├── getEmployeeDetails()
│   ├── createEmployee()
│   ├── updateEmployee()
│   └── getEmployeePayslips()
│
├── PayrollService
│   ├── generatePayslip()
│   ├── calculateSalary()
│   ├── calculateTaxes()
│   ├── calculateContributions()
│   ├── validatePayslip()
│   └── exportPayslip()
│
├── AbsenceService
│   ├── requestAbsence()
│   ├── approveAbsence()
│   ├── rejectAbsence()
│   ├── calculateLeaveBalance()
│   └── getAbsenceHistory()
│
├── ContractService
│   ├── createContract()
│   ├── updateContract()
│   └── getContractHistory()
│
└── UtilityServices
    ├── EmailService (notifications)
    ├── ExportService (PDF, Excel)
    └── ReportService (rapports)
```

### 2.3 Couche Données (Repositories)

```
Repositories/
├── UserRepository extends JpaRepository
│   ├── findByEmail()
│   ├── findByRole()
│   └── Custom queries
│
├── EmployeeRepository extends JpaRepository
│   ├── findByEstablishment()
│   ├── findByPosition()
│   └── Custom queries
│
├── ContractRepository extends JpaRepository
│   ├── findByEmployee()
│   ├── findActiveContracts()
│   └── Custom queries
│
├── PayslipRepository extends JpaRepository
│   ├── findByEmployee()
│   ├── findByPeriod()
│   └── Custom queries
│
├── AbsenceRepository extends JpaRepository
│   ├── findByEmployee()
│   ├── findByStatus()
│   └── Custom queries
│
└── ... (autres repositories)
```

### 2.4 Modèles de Données (JPA Entities)

```
Models/
├── User
│   ├── id: Long
│   ├── email: String (unique)
│   ├── password: String (hashed)
│   ├── role: Role enum
│   ├── active: boolean
│   └── timestamps
│
├── Employee
│   ├── id: Long
│   ├── user: User (FK)
│   ├── firstName: String
│   ├── lastName: String
│   ├── position: Position (FK)
│   ├── establishment: Establishment (FK)
│   ├── contracts: List<Contract>
│   ├── absences: List<Absence>
│   └── payslips: List<Payslip>
│
├── Contract
│   ├── id: Long
│   ├── employee: Employee (FK)
│   ├── type: ContractType enum
│   ├── startDate: LocalDate
│   ├── endDate: LocalDate
│   ├── salary: BigDecimal
│   └── position: Position
│
├── Payslip
│   ├── id: Long
│   ├── employee: Employee (FK)
│   ├── period: String (2024-01)
│   ├── lines: List<PayslipLine>
│   ├── totalGross: BigDecimal
│   ├── totalDeductions: BigDecimal
│   ├── netSalary: BigDecimal
│   └── status: PayslipStatus enum
│
├── PayslipLine
│   ├── id: Long
│   ├── payslip: Payslip (FK)
│   ├── element: PayrollElement (FK)
│   ├── amount: BigDecimal
│   └── type: LineType (EARNING, DEDUCTION)
│
├── Absence
│   ├── id: Long
│   ├── employee: Employee (FK)
│   ├── type: AbsenceType enum
│   ├── startDate: LocalDate
│   ├── endDate: LocalDate
│   ├── status: AbsenceStatus enum
│   ├── reason: String
│   └── approvedBy: User (FK)
│
└── ... (autres modèles)
```

## 3. Structure du Frontend

### 3.1 Architecture SPA

```
index.html (Point d'entrée unique)
    ↓
app.js (Initialisation)
    ├→ router.js (Navigation)
    ├→ state.js (Gestion d'état global)
    ├→ api.js (Appels API)
    ├→ ui.js (Utilitaires UI)
    │
    └→ views/ (Composants de vue)
        ├── login.js (Authentification)
        ├── dashboard.js (Accueil)
        ├── employees.js (Liste employés)
        ├── navbar.js (Navigation)
        ├── payslips.js (Bulletins de paie)
        ├── absences.js (Gestion absences)
        └── settings.js (Paramètres)
```

### 3.2 Flux de Données Frontend

```
Router (URL change)
    ↓
View Loading
    ↓
API Call (api.js)
    ↓ API Response
State Update (state.js)
    ↓
UI Render (ui.js)
    ↓
DOM Update
    ↓
User Interaction
```

### 3.3 CSS Architecture

```
css/
├── base/
│   ├── variables.css (CSS variables)
│   ├── base.css (Reset, styles par défaut)
│   └── layout.css (Layout global, flexbox, grid)
│
└── components/
    ├── auth.css
    ├── buttons.css
    ├── cards.css
    ├── forms.css
    ├── modals.css
    ├── tables.css
    ├── payroll.css
    ├── avatars.css
    ├── badges.css
    └── toasts.css (Notifications)
```

## 4. Flux d'Authentification

```
Login Page
    ↓
User enters credentials
    ↓
api.js -> POST /auth/login
    ↓
Backend validates
    ↓ Token generated (JWT or Session)
state.js -> Store token
    ↓
Router -> Redirect to Dashboard
    ↓
Every request includes token (Authorization header)
    ↓
Backend validates token
    ↓
Proceed or Redirect to Login
```

## 5. Flux de Création de Bulletin de Paie

```
Responsable Paie
    ↓
Click "Générer bulletins"
    ↓
api.js -> POST /payslips
    ↓
Backend:
  1. Récupère les employés actifs
  2. Pour chaque employé:
     a. Récupère le contrat actif
     b. Applique les éléments de paie
     c. Calcule les cotisations
     d. Calcule les taxes
     e. Crée le bulletin
    ↓
PayslipService generates bulletins
    ↓
Save to Database
    ↓ Response with payslips
Display in UI
    ↓
User validates/edits
    ↓
User clicks validate
    ↓
Payslip status = FINALIZED
```

## 6. Sécurité et Patterns

### 6.1 Patterns de Sécurité

- **Authentication:** JWT ou Session-based auth
- **Authorization:** RBAC (Role-Based Access Control)
- **Input Validation:** Validation côté serveur et client
- **SQL Injection Prevention:** Parameterized queries (JPA)
- **XSS Prevention:** Escaping de données
- **CSRF Protection:** Tokens CSRF

### 6.2 Hiérarchie des Rôles

```
ADMIN
├── Accès complet
└── Gestion des utilisateurs, configurations

MANAGER
├── Gestion de l'équipe
├── Approbation des absences
└── Consultation paie de l'équipe

EMPLOYEE
├── Consultation propres données
├── Demande de congés
└── Consultation bulletins

PAYROLL
├── Gestion des paies
└── Génération bulletins
```

## 7. Base de Données - Relations

```
User 1---∞ Employee
Employee 1---∞ Contract
Employee 1---∞ Payslip
Employee 1---∞ Absence
Contract M---N Position
Contract M---N Establishment
Payslip 1---∞ PayslipLine
PayslipLine M---N PayrollElement
Absence M---N AbsenceType
```

## 8. Performance et Optimisation

### 8.1 Strategies

- **Lazy Loading:** Charger les données à la demande
- **Pagination:** Limiter les résultats
- **Caching:** Redis pour données fréquemment accédées
- **Indexing:** Indexes sur les colonnes de recherche
- **Async Processing:** Tasks asynchrones pour opérations lourdes

### 8.2 Monitoring

- **Logs:** Application logs
- **Metrics:** Performance metrics
- **Alerts:** Alertes sur anomalies

---

*Dernière mise à jour: 2026-07-03*
