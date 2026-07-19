# Modèle de Données Complet - Application Memoire

**Statut:** ✅ COMPLÉTÉ et IMPLÉMENTÉ
**Date:** 2026-07-03
**Nombre d'entités:** 9
**État d'implémentation:** 100% des modèles JPA créés

---

## Sommaire
- [📊 Vue d'Ensemble du Modèle](#-vue-densemble-du-modèle)
- [📋 Détail des Entités](#-détail-des-entités)
- [🔗 Relations Détaillées](#-relations-détaillées)
- [📊 Énumérations](#-énumérations)
- [🔐 Contraintes & Validations](#-contraintes--validations)
- [📈 Capacité & Performance](#-capacité--performance)
- [🔄 Évolutions Futures Possibles](#-évolutions-futures-possibles)
- [✅ Checklist d'Implémentation](#-checklist-dimplémentation)

## 📊 Vue d'Ensemble du Modèle

```
┌─────────────────────────────────────────────────────────────────────┐
│                         APPLICATION MEMOIRE                         │
│                       Schéma de Données v1.0                        │
└─────────────────────────────────────────────────────────────────────┘

                              UTILISATEURS
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
         ┌────▼──────┐      ┌─────▼─────┐      ┌─────▼──────┐
         │ USER      │      │ABSENCE    │      │PAYSLIP    │
         │           │      │           │      │            │
         │(Employé)  │      │(Absence)  │      │(Bulletin)  │
         └────┬──────┘      └─────────────┘      └────┬───────┘
              │                                      │
              │        ┌──────────────────┐           │
              ├───────►│LEAVE_BALANCE    │           │
              │        │(Solde Congés)   │           │
              │        └──────────────────┘           │
              │                                      │
              │              CONTRACT                │
              │        ┌─────────────────┐           │
              └───────►│CONTRACT         │           │
                       │(Contrat Travail)│           │
                       └────────┬────────┘           │
                                │                    │
                    ┌───────────┼──────────┐        │
                    │           │          │        │
              ┌─────▼──┐   ┌────▼──┐  ┌──▼──────┐   │
              │POSITION│   │PAYROLL│  │ PAYSLIP │   │
              │(Poste) │   │ELEMENT│  │ LINE    │◄──┘
              │        │   │(Élém.)│  │(Ligne)  │
              └────────┘   └───────┘  └─────────┘

         ┌──────────────────┐
         │ESTABLISHMENT     │
         │(Établissement)   │
         │                  │
         │FK: USER(ManyToOne)
         └──────────────────┘
```

---

## 📋 Détail des Entités

### 1. USER (Utilisateur/Employé)

**Table:** `user`
**Rôle:** Entité centrale représentant un utilisateur du système

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Column(name = "first_name")
private String firstName;

@Column(name = "last_name")
private String lastName;

@Column(name = "email", unique = true)
private String email;

@Column(name = "password")
private String password;  // Hashé avec bcrypt

@Enumerated(EnumType.STRING)
private Role role;  // ADMIN, MANAGER, EMPLOYEE, PAYROLL

@Column(name = "nsc")
private String nsc;  // Numéro de Sécurité Sociale

@Column(name = "iban")
private String iban;  // Pour virement salaire

@Column(name = "address")
private String address;

@Column(name = "city")
private String city;

@Column(name = "zip_code")
private String zipCode;

@Column(name = "tax_rate")
private BigDecimal taxRate;  // Taux d'imposition
```

#### Relations:

- **ManyToOne** → Establishment (FK: establishment_id)
- **OneToMany** → Contract (inverse)
- **OneToMany** → Absence (inverse)
- **OneToMany** → LeaveBalance (inverse)
- **OneToMany** → Payslip (inverse)

#### Clé primaire: `id` (Integer, auto-incrémenté)

---

### 2. ESTABLISHMENT (Établissement)

**Table:** `establishment`
**Rôle:** Représente un lieu/entité employant les salariés

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Column(name = "name")
private String name;

@Column(name = "siret", unique = true)
private String siret;  // SIRET: identifiant unique établissement

@Column(name = "address")
private String address;

@Column(name = "city")
private String city;

@Column(name = "zip_code")
private String zipCode;
```

#### Relations:

- **OneToMany** → User (inverse)

#### Clé primaire: `id`

---

### 3. POSITION (Poste)

**Table:** `position`
**Rôle:** Catalogue des postes disponibles dans l'entreprise

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Column(name = "title")
private String title;  // Ex: "Développeur Senior"

@Column(name = "description")
private String description;

@Column(name = "min_salary")
private BigDecimal minSalary;

@Column(name = "max_salary")
private BigDecimal maxSalary;
```

#### Relations:

- **OneToMany** → Contract (inverse)

#### Clé primaire: `id`

---

### 4. CONTRACT (Contrat)

**Table:** `contract`
**Rôle:** Représente le contrat de travail d'un employé

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Enumerated(EnumType.STRING)
@Column(name = "contract_type")
private ContractType contractType;  // CDI, CDD, STAGE, ALTERNANCE

@Column(name = "monthly_base_salary")
private BigDecimal monthlyBaseSalary;

@Column(name = "start_date")
private LocalDate startDate;

@Column(name = "end_date")
private LocalDate endDate;  // NULL pour CDI

@Enumerated(EnumType.STRING)
@Column(name = "status")
private ContractStatus status;  // ACTIVE, INACTIVE, TERMINATED
```

#### Relations:

- **ManyToOne** → Position (FK: position_id)
- **ManyToOne** → User (FK: user_id)
- **OneToMany** → PayrollElement (inverse)
- **OneToMany** → Payslip (inverse)

#### Clé primaire: `id`

#### Index recommandés:

- `user_id` (recherche par employé)
- `status` (filtrer contrats actifs)
- `start_date` (historique)

---

### 5. ABSENCE (Absence)

**Table:** `absence`
**Rôle:** Représente une demande d'absence/congé

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Enumerated(EnumType.STRING)
@Column(name = "absence_type")
private AbsenceType absenceType;  // VACATION, SICK_LEAVE, PARENTAL, UNPAID, TRAINING

@Column(name = "start_date")
private LocalDate startDate;

@Column(name = "end_date")
private LocalDate endDate;

@Enumerated(EnumType.STRING)
@Column(name = "status")
private AbsenceStatus status;  // PENDING, APPROVED, REJECTED, CANCELLED

@Column(name = "reason")
private String reason;

@Column(name = "created_at")
private LocalDateTime createdAt;

@Column(name = "approved_at")
private LocalDateTime approvedAt;
```

#### Relations:

- **ManyToOne** → User (FK: user_id)

#### Clé primaire: `id`

#### Index recommandés:

- `user_id`
- `status`
- `start_date`

---

### 6. LEAVEBALANCE (Solde de Congés)

**Table:** `leave_balance`
**Rôle:** Suivi du solde de congés par employé

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Enumerated(EnumType.STRING)
@Column(name = "leave_type")
private LeaveType leaveType;  // ANNUAL, SICK, UNPAID, etc.

@Column(name = "days_earned")
private Integer daysEarned;  // Jours acquis

@Column(name = "days_taken")
private Integer daysTaken;  // Jours utilisés

@Column(name = "year")
private Integer year;  // 2024, 2025, etc.

@Column(name = "last_updated")
private LocalDateTime lastUpdated;
```

#### Relations:

- **ManyToOne** → User (FK: user_id)

#### Clé primaire: `id`

#### Index recommandés:

- `user_id`
- `year`

---

### 7. PAYSLIP (Bulletin de Paie)

**Table:** `payslip`
**Rôle:** Représente un bulletin de paie mensuel

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Column(name = "period_month_year")
private String periodMonthYear;  // Format: "2024-01"

@Column(name = "base_salary")
private BigDecimal baseSalary;

@Column(name = "total_gross")
private BigDecimal totalGross;  // Salaire brut

@Column(name = "total_net")
private BigDecimal totalNet;  // Salaire net

@Column(name = "total_deductions")
private BigDecimal totalDeductions;

@Column(name = "total_contributions")
private BigDecimal totalContributions;

@Enumerated(EnumType.STRING)
@Column(name = "status")
private PayslipStatus status;  // DRAFT, SUBMITTED, VALIDATED, FINALIZED, ARCHIVED

@Column(name = "generation_date")
private LocalDateTime generationDate;

@Column(name = "validation_date")
private LocalDateTime validationDate;
```

#### Relations:

- **ManyToOne** → User (FK: user_id)
- **ManyToOne** → Contract (FK: contract_id)
- **OneToMany** → PayslipLine (inverse)

#### Clé primaire: `id`

#### Unique Constraint: `(user_id, period_month_year)` - Un bulletin par employé par mois

#### Index recommandés:

- `user_id`
- `period_month_year`
- `status`

---

### 8. PAYSLIPLINE (Ligne de Bulletin)

**Table:** `payslip_line`
**Rôle:** Représente une ligne détaillée du bulletin (salaire, primes, retenues, etc.)

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Column(name = "code")
private String code;  // Ex: "SAL", "BONUS", "COTIS", "IMPOT"

@Column(name = "label")
private String label;  // Ex: "Salaire de base"

@Enumerated(EnumType.STRING)
@Column(name = "line_type")
private PayslipLineType lineType;  // EARNING, DEDUCTION, CONTRIBUTION, TAX

@Column(name = "base_calculation")
private BigDecimal baseCalculation;  // Base de calcul

@Column(name = "employee_rate")
private BigDecimal employeeRate;  // Taux employé (%)

@Column(name = "employee_amount")
private BigDecimal employeeAmount;  // Montant côté employé

@Column(name = "employer_rate")
private BigDecimal employerRate;  // Taux employeur (%)

@Column(name = "employer_amount")
private BigDecimal employerAmount;  // Montant côté employeur
```

#### Relations:

- **ManyToOne** → Payslip (FK: payslip_id)

#### Clé primaire: `id`

#### Index recommandés:

- `payslip_id`

---

### 9. PAYROLLELEMENT (Élément de Paie)

**Table:** `payroll_element`
**Rôle:** Catalogue des éléments de paie applicables

#### Fields:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@Column(name = "code")
private String code;  // Ex: "URSSAF", "CESU", "ASSURANCE"

@Column(name = "label")
private String label;  // Libellé descriptif

@Enumerated(EnumType.STRING)
@Column(name = "element_type")
private PayrollElementType elementType;  // SALARY, BONUS, CONTRIBUTION, TAX, DEDUCTION

@Enumerated(EnumType.STRING)
@Column(name = "input_type")
private InputType inputType;  // FIXED (montant fixe), PERCENTAGE (pourcentage), VARIABLE

@Column(name = "value")
private BigDecimal value;  // Valeur (montant ou %)

@Column(name = "quantity")
private Integer quantity;  // Quantité (ex: nombre d'heures)

@Column(name = "start_date")
private LocalDate startDate;  // Date d'application

@Column(name = "end_date")
private LocalDate endDate;  // Date de fin (NULL = toujours valide)

@Column(name = "is_active")
private Boolean isActive;
```

#### Relations:

- **ManyToOne** → Contract (FK: contract_id)
- **ManyToOne** → Payslip (FK: payslip_id)

#### Clé primaire: `id`

#### Index recommandés:

- `contract_id`
- `is_active`

---

## 🔗 Relations Détaillées

### Relations ManyToOne

| Source         | Cible         | FK               | Cardinalité | Notes                                  |
| -------------- | ------------- | ---------------- | ------------ | -------------------------------------- |
| User           | Establishment | establishment_id | N:1          | Chaque employé dans un établissement |
| Contract       | Position      | position_id      | N:1          | Chaque contrat pour un poste           |
| Contract       | User          | user_id          | N:1          | Chaque contrat pour un employé        |
| Absence        | User          | user_id          | N:1          | Chaque absence d'un employé           |
| LeaveBalance   | User          | user_id          | N:1          | Chaque solde pour un employé          |
| Payslip        | User          | user_id          | N:1          | Chaque bulletin pour un employé       |
| Payslip        | Contract      | contract_id      | N:1          | Bulletin généré selon le contrat    |
| PayslipLine    | Payslip       | payslip_id       | N:1          | Chaque ligne appartient à un bulletin |
| PayrollElement | Contract      | contract_id      | N:1          | Éléments par contrat                 |
| PayrollElement | Payslip       | payslip_id       | N:1          | Éléments appliqués au bulletin      |

### Relations OneToMany

| Parent        | Enfant         | Notes                                                  |
| ------------- | -------------- | ------------------------------------------------------ |
| Establishment | User           | Un établissement peut avoir plusieurs employés       |
| Position      | Contract       | Un poste peut avoir plusieurs contrats                 |
| User          | Contract       | Un employé peut avoir plusieurs contrats (historique) |
| User          | Absence        | Un employé peut avoir plusieurs absences              |
| User          | LeaveBalance   | Un employé a plusieurs soldes (par type et année)    |
| User          | Payslip        | Un employé a plusieurs bulletins (un par mois)        |
| Contract      | PayrollElement | Un contrat peut avoir plusieurs éléments de paie     |
| Payslip       | PayslipLine    | Un bulletin a plusieurs lignes (détail)               |

---

## 📊 Énumérations

### Role

```java
enum Role {
    ADMIN,        // Accès complet
    MANAGER,      // Gestion d'équipe
    EMPLOYEE,     // Employé standard
    PAYROLL       // Responsable paie
}
```

### ContractType

```java
enum ContractType {
    CDI,          // Contrat à Durée Indéterminée
    CDD,          // Contrat à Durée Déterminée
    STAGE,        // Stage
    ALTERNANCE    // Alternance
}
```

### ContractStatus

```java
enum ContractStatus {
    ACTIVE,       // Contrat actif
    INACTIVE,     // Contrat suspendu
    TERMINATED    // Contrat terminé
}
```

### AbsenceType

```java
enum AbsenceType {
    VACATION,           // Vacances/Congés payés
    SICK_LEAVE,         // Congé maladie
    PARENTAL_LEAVE,     // Congé parental
    UNPAID_LEAVE,       // Congé sans solde
    TRAINING,           // Formation
    SPECIAL_LEAVE       // Autre congé spécial
}
```

### AbsenceStatus

```java
enum AbsenceStatus {
    PENDING,      // En attente d'approbation
    APPROVED,     // Approuvée
    REJECTED,     // Rejetée
    CANCELLED     // Annulée
}
```

### LeaveType

```java
enum LeaveType {
    ANNUAL,       // Congés annuels
    SICK,         // Congés maladie
    UNPAID,       // Sans solde
    PARENTAL      // Parental
}
```

### PayslipStatus

```java
enum PayslipStatus {
    DRAFT,        // Brouillon
    SUBMITTED,    // Soumis
    VALIDATED,    // Validé
    FINALIZED,    // Finalisé
    ARCHIVED      // Archivé
}
```

### PayslipLineType

```java
enum PayslipLineType {
    EARNING,          // Revenu (salaire, bonus)
    DEDUCTION,        // Déduction (retenue)
    CONTRIBUTION,     // Cotisation sociale
    TAX               // Impôt
}
```

### PayrollElementType

```java
enum PayrollElementType {
    SALARY,           // Salaire
    BONUS,            // Prime/Bonus
    ALLOWANCE,        // Allocation
    CONTRIBUTION,     // Cotisation
    TAX,              // Impôt
    DEDUCTION         // Déduction
}
```

### InputType

```java
enum InputType {
    FIXED,            // Montant fixe (€)
    PERCENTAGE,       // Pourcentage (%)
    VARIABLE          // Variable (heures, etc.)
}
```

---

## 🔐 Contraintes & Validations

### Contraintes Uniques

- `User.email` - Unique (identifiant utilisateur)
- `Establishment.siret` - Unique (identifiant établissement)
- `(Payslip.user_id, Payslip.period_month_year)` - Unique (un bulletin par employé par mois)

### Contraintes de Clés Étrangères

- Toutes les relations ManyToOne impliquent une contrainte FK
- Suppression d'établissement: Cascade? Ou interdire si utilisateurs?
- Suppression d'utilisateur: Soft delete recommandé

### Validations Métier

- LeaveBalance.daysTaken ≤ LeaveBalance.daysEarned
- Absence.startDate ≤ Absence.endDate
- Contract.startDate ≤ Contract.endDate (ou NULL)
- Payslip.totalNet = Payslip.totalGross - Payslip.totalDeductions
- PayslipLine.employeeAmount = PayslipLine.baseCalculation × PayslipLine.employeeRate

---

## 📈 Capacité & Performance

### Données par Entité (Estimations pour 1000 employés)

| Entité        | Enregistrements | Taille approx. |
| -------------- | --------------- | -------------- |
| User           | 1,000           | 500 KB         |
| Establishment  | 10              | 5 KB           |
| Position       | 50              | 10 KB          |
| Contract       | 2,000           | 1 MB           |
| Absence        | 5,000           | 2.5 MB         |
| LeaveBalance   | 10,000          | 2 MB           |
| Payslip        | 12,000          | 6 MB           |
| PayslipLine    | 240,000         | 30 MB          |
| PayrollElement | 500             | 100 KB         |

**Taille totale estimée:** ~45 MB pour 1000 employés avec 12 mois d'historique

### Index Recommandés pour Performance

```sql
-- User
CREATE INDEX idx_user_email ON user(email);
CREATE INDEX idx_user_establishment_id ON user(establishment_id);
CREATE INDEX idx_user_role ON user(role);

-- Contract
CREATE INDEX idx_contract_user_id ON contract(user_id);
CREATE INDEX idx_contract_position_id ON contract(position_id);
CREATE INDEX idx_contract_status ON contract(status);

-- Absence
CREATE INDEX idx_absence_user_id ON absence(user_id);
CREATE INDEX idx_absence_status ON absence(status);
CREATE INDEX idx_absence_period ON absence(start_date, end_date);

-- Payslip
CREATE UNIQUE INDEX idx_payslip_user_period ON payslip(user_id, period_month_year);
CREATE INDEX idx_payslip_status ON payslip(status);

-- LeaveBalance
CREATE INDEX idx_leave_balance_user_year ON leave_balance(user_id, year);
```

---

## 🔄 Évolutions Futures Possibles

### v1.1 Envisagées

- [ ] Ajouter colonne `created_at`, `updated_at` sur toutes les entités
- [ ] Ajouter soft-delete (`deleted_at`)
- [ ] Audit trail séparé (qui a modifié quoi, quand)

### v2.0 Envisagées

- [ ] Entité `Employee` distincte de `User`
- [ ] Entité `TimeSheet` (gestion du temps)
- [ ] Entité `Performance` (évaluations)
- [ ] Entité `Notification` (notifications)
- [ ] Entité `LeaveRequest` (demandes de congés separées)

---

## ✅ Checklist d'Implémentation

- [X] Entités JPA créées
- [X] Relations configurées
- [X] Annotations JPA appliquées
- [X] Énumérations définies
- [X] Repositories générés
- [ ] Custom queries ajoutées
- [ ] Validations @Valid ajoutées
- [ ] Index de base de données créés
- [ ] Seed data mis en place
- [ ] Tests unitaires
- [ ] Tests d'intégration

---

*Dernière mise à jour: 2026-07-03*
*Prochaine révision: Après ajout Service Layer*
