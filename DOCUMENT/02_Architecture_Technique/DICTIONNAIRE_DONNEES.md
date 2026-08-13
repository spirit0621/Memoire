# Dictionnaire de Données

Ce document détaille la structure de la base de données relationnelle de l'application Memoire (basée sur les entités JPA de Spring Boot). Il décrit chaque table, ses colonnes, ses types de données et ses relations.

---

## 1. Table `establishment` (Établissement)
Représente une entreprise ou un établissement physique.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `name` | String | VARCHAR | Nom de l'établissement |
| `siret` | String | VARCHAR | Numéro SIRET |
| `address` | String | VARCHAR | Adresse |
| `city` | String | VARCHAR | Ville |
| `zipCode` | String | VARCHAR | Code postal |

**Relations :**
* `1` `Establishment` -> `N` `User` (Un établissement possède plusieurs employés)

---

## 2. Table `user` (Utilisateur / Employé)
Représente un employé ou un utilisateur du système.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `establishment_id` | Integer | INT | Clé étrangère vers la table `establishment` |
| `firstName` | String | VARCHAR | Prénom de l'employé |
| `lastName` | String | VARCHAR | Nom de l'employé |
| `email` | String | VARCHAR | Adresse e-mail |
| `password` | String | VARCHAR | Mot de passe (Hashé) |
| `role` | String | VARCHAR | Rôle système (ex: ADMIN, USER) |
| `nsc` | String | VARCHAR | Numéro de Sécurité Sociale |
| `iban` | String | VARCHAR | Coordonnées bancaires |
| `address` | String | VARCHAR | Adresse personnelle |
| `city` | String | VARCHAR | Ville |
| `zipCode` | String | VARCHAR | Code postal |
| `taxRate` | BigDecimal | DECIMAL | Taux d'imposition (Prélèvement à la source), défaut = 0 |

**Relations :**
* `N` `User` -> `1` `Establishment`
* `1` `User` -> `N` `Contract` (Un employé peut avoir plusieurs contrats successifs)

---

## 3. Table `position` (Poste / Emploi)
Définit un rôle ou un poste au sein de l'entreprise.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `title` | String | VARCHAR | Intitulé du poste |
| `description` | String | VARCHAR | Description du poste |
| `minSalary` | BigDecimal | DECIMAL | Salaire minimum de la grille |
| `maxSalary` | BigDecimal | DECIMAL | Salaire maximum de la grille |

**Relations :**
* `1` `Position` -> `N` `Contract` (Plusieurs contrats peuvent être liés à ce même poste)

---

## 4. Table `contract` (Contrat de Travail)
Lie un utilisateur à un poste avec des conditions salariales.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `user_id` | Integer | INT | Clé étrangère vers `user` |
| `position_id` | Integer | INT | Clé étrangère vers `position` |
| `contractType` | String | VARCHAR | Type de contrat (CDI, CDD, Alternance...) |
| `monthlyBaseSalary` | BigDecimal | DECIMAL | Salaire de base mensuel brut |
| `startDate` | LocalDate | DATE | Date de début du contrat |
| `endDate` | LocalDate | DATE | Date de fin du contrat (Null si CDI) |
| `status` | String | VARCHAR | Statut du contrat (Défaut : "ACTIVE") |

**Relations :**
* `N` `Contract` -> `1` `User`
* `N` `Contract` -> `1` `Position`

---

## 5. Table `absence` (Absence / Congé)
Enregistre les demandes d'absences des employés.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `user_id` | Integer | INT | Clé étrangère vers `user` (Non Null) |
| `absenceType` | String | VARCHAR | Type d'absence (CP, Maladie...) |
| `startDate` | LocalDate | DATE | Date de début de l'absence |
| `endDate` | LocalDate | DATE | Date de fin de l'absence |
| `status` | String | VARCHAR | Statut de la demande (Défaut : "PENDING") |

**Relations :**
* `N` `Absence` -> `1` `User`

---

## 6. Table `leave_balance` (Solde de Congés)
Gère le compteur de jours acquis et pris par employé.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `user_id` | Integer | INT | Clé étrangère vers `user` (Non Null) |
| `leaveType` | String | VARCHAR | Type de congé concerné (ex: CP, RTT) |
| `daysEarned` | BigDecimal | DECIMAL | Nombre de jours acquis (Défaut: 0) |
| `daysTaken` | BigDecimal | DECIMAL | Nombre de jours pris (Défaut: 0) |

**Relations :**
* `N` `LeaveBalance` -> `1` `User`

---

## 7. Table `payslip` (Fiche de Paie)
Entête de la fiche de paie mensuelle d'un employé.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `user_id` | Integer | INT | Clé étrangère vers `user` |
| `contract_id` | Integer | INT | Clé étrangère vers `contract` |
| `periodMonthYear` | String | VARCHAR | Période concernée (ex: "07/2026") |
| `baseSalary` | BigDecimal | DECIMAL | Salaire de base de la période |
| `totalGross` | BigDecimal | DECIMAL | Total brut |
| `totalNet` | BigDecimal | DECIMAL | Total net avant impôt |
| `status` | String | VARCHAR | Statut (Défaut : "DRAFT") |
| `generationDate` | LocalDateTime | TIMESTAMP | Date et heure de génération |

**Relations :**
* `N` `Payslip` -> `1` `User`
* `N` `Payslip` -> `1` `Contract`

---

## 8. Table `payslip_line` (Ligne de Fiche de Paie)
Détail de chaque rubrique (cotisation, prime) sur une fiche de paie.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `payslip_id` | Integer | INT | Clé étrangère vers `payslip` (Non Null) |
| `code` | String | VARCHAR | Code de la rubrique |
| `label` | String | VARCHAR | Libellé affiché sur la fiche |
| `lineType` | String | VARCHAR | Type (Prime, Cotisation Sécu...) |
| `baseCalculation` | BigDecimal | DECIMAL | Base de calcul de la ligne |
| `employeeRate` | BigDecimal | DECIMAL | Taux salarial |
| `employeeAmount` | BigDecimal | DECIMAL | Montant salarial retenu/ajouté |
| `employerRate` | BigDecimal | DECIMAL | Taux patronal |
| `employerAmount` | BigDecimal | DECIMAL | Montant patronal versé |

**Relations :**
* `N` `PayslipLine` -> `1` `Payslip`

---

## 9. Table `payroll_element` (Élément Variable de Paie)
Éléments exceptionnels saisis (ex: Primes exceptionnelles, Heures sup) à intégrer à la paie.

| Nom de colonne | Type Java | Type SQL (JPA) | Description / Contraintes |
|---|---|---|---|
| `id` | Integer | INT | Clé primaire (Auto-incrémentée) |
| `contract_id` | Integer | INT | Clé étrangère vers `contract` (Non Null) |
| `payslip_id` | Integer | INT | Clé étrangère vers `payslip` (Non Null) |
| `code` | String | VARCHAR | Code de l'élément |
| `label` | String | VARCHAR | Libellé |
| `elementType` | String | VARCHAR | Type d'élément |
| `inputType` | String | VARCHAR | Type de saisie (Montant, Pourcentage, Unité) |
| `value` | String | VARCHAR | Valeur saisie |
| `quantity` | BigDecimal | DECIMAL | Quantité (Défaut : 1) |
| `startDate` | LocalDate | DATE | Date de début d'application |
| `endDate` | LocalDate | DATE | Date de fin d'application |

**Relations :**
* `N` `PayrollElement` -> `1` `Contract`
* `N` `PayrollElement` -> `1` `Payslip`
