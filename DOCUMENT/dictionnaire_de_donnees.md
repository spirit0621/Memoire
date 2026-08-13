# Dictionnaire de Données

| Entité                  | Nom de la donnée | Format          | Longueur | Type élémentaire | Type calculé | Description                                    |
| :----------------------- | :---------------- | :-------------- | :------- | :----------------- | :------------ | :--------------------------------------------- |
| **Absence**        | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique de l'absence                |
| Absence                  | user_id           | Numérique      | 11       | Oui                | Non           | Clé étrangère vers l'utilisateur            |
| Absence                  | absenceType       | Alphanumérique | 255      | Oui                | Non           | Type d'absence (ex: maladie, congé)           |
| Absence                  | startDate         | Date            | 10       | Oui                | Non           | Date de début de l'absence                    |
| Absence                  | endDate           | Date            | 10       | Oui                | Non           | Date de fin de l'absence                       |
| Absence                  | status            | Alphanumérique | 255      | Oui                | Non           | Statut de l'absence (ex: PENDING)              |
| **Contract**       | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique du contrat                  |
| Contract                 | contractType      | Alphanumérique | 255      | Oui                | Non           | Type de contrat (CDI, CDD...)                  |
| Contract                 | monthlyBaseSalary | Décimal        | 19,2     | Oui                | Non           | Salaire de base mensuel                        |
| Contract                 | startDate         | Date            | 10       | Oui                | Non           | Date de début du contrat                      |
| Contract                 | endDate           | Date            | 10       | Oui                | Non           | Date de fin du contrat                         |
| Contract                 | status            | Alphanumérique | 255      | Oui                | Non           | Statut du contrat (ex: ACTIVE)                 |
| Contract                 | position_id       | Numérique      | 11       | Oui                | Non           | Clé étrangère vers le poste (Position)      |
| Contract                 | user_id           | Numérique      | 11       | Oui                | Non           | Clé étrangère vers l'employé (User)        |
| **Establishment**  | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique de l'établissement         |
| Establishment            | name              | Alphanumérique | 255      | Oui                | Non           | Nom de l'établissement                        |
| Establishment            | siret             | Alphanumérique | 255      | Oui                | Non           | Numéro SIRET                                  |
| Establishment            | address           | Alphanumérique | 255      | Oui                | Non           | Adresse postale                                |
| Establishment            | city              | Alphanumérique | 255      | Oui                | Non           | Ville de l'établissement                      |
| Establishment            | zipCode           | Alphanumérique | 20       | Oui                | Non           | Code postal                                    |
| **LeaveBalance**   | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique du solde de congés         |
| LeaveBalance             | user_id           | Numérique      | 11       | Oui                | Non           | Clé étrangère vers l'utilisateur            |
| LeaveBalance             | leaveType         | Alphanumérique | 255      | Oui                | Non           | Type de congé (ex: CP, RTT)                   |
| LeaveBalance             | daysEarned        | Décimal        | 19,2     | Oui                | Non           | Jours de congés acquis                        |
| LeaveBalance             | daysTaken         | Décimal        | 19,2     | Oui                | Non           | Jours de congés pris                          |
| **PayrollElement** | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique de l'élément de paie      |
| PayrollElement           | contract_id       | Numérique      | 11       | Oui                | Non           | Clé étrangère vers le contrat               |
| PayrollElement           | payslip_id        | Numérique      | 11       | Oui                | Non           | Clé étrangère vers la fiche de paie         |
| PayrollElement           | code              | Alphanumérique | 255      | Oui                | Non           | Code de l'élément                            |
| PayrollElement           | label             | Alphanumérique | 255      | Oui                | Non           | Libellé de l'élément                        |
| PayrollElement           | elementType       | Alphanumérique | 255      | Oui                | Non           | Type de l'élément                            |
| PayrollElement           | inputType         | Alphanumérique | 255      | Oui                | Non           | Type de saisie                                 |
| PayrollElement           | value             | Alphanumérique | 255      | Oui                | Non           | Valeur de l'élément                          |
| PayrollElement           | quantity          | Décimal        | 19,2     | Oui                | Non           | Quantité associée                            |
| PayrollElement           | startDate         | Date            | 10       | Oui                | Non           | Date de début d'application                   |
| PayrollElement           | endDate           | Date            | 10       | Oui                | Non           | Date de fin d'application                      |
| **Payslip**        | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique de la fiche de paie         |
| Payslip                  | user_id           | Numérique      | 11       | Oui                | Non           | Clé étrangère vers l'employé               |
| Payslip                  | contract_id       | Numérique      | 11       | Oui                | Non           | Clé étrangère vers le contrat               |
| Payslip                  | periodMonthYear   | Alphanumérique | 255      | Oui                | Non           | Période de paie (Mois/Année)                 |
| Payslip                  | baseSalary        | Décimal        | 19,2     | Oui                | Non           | Salaire de base                                |
| Payslip                  | totalGross        | Décimal        | 19,2     | Non                | Oui           | Total brut                                     |
| Payslip                  | totalNet          | Décimal        | 19,2     | Non                | Oui           | Total net                                      |
| Payslip                  | status            | Alphanumérique | 255      | Oui                | Non           | Statut (ex: DRAFT)                             |
| Payslip                  | generationDate    | Date/Heure      | 19       | Oui                | Non           | Date et heure de génération                  |
| **PayslipLine**    | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique de la ligne de paie         |
| PayslipLine              | payslip_id        | Numérique      | 11       | Oui                | Non           | Clé étrangère vers la fiche de paie         |
| PayslipLine              | code              | Alphanumérique | 255      | Oui                | Non           | Code de la ligne de paie                       |
| PayslipLine              | label             | Alphanumérique | 255      | Oui                | Non           | Libellé de la ligne                           |
| PayslipLine              | lineType          | Alphanumérique | 255      | Oui                | Non           | Type de ligne (ex: Cotisation, Prime)          |
| PayslipLine              | baseCalculation   | Décimal        | 19,2     | Oui                | Non           | Base de calcul                                 |
| PayslipLine              | employeeRate      | Décimal        | 19,2     | Oui                | Non           | Taux salarial                                  |
| PayslipLine              | employeeAmount    | Décimal        | 19,2     | Non                | Oui           | Montant salarial calculé                      |
| PayslipLine              | employerRate      | Décimal        | 19,2     | Oui                | Non           | Taux patronal                                  |
| PayslipLine              | employerAmount    | Décimal        | 19,2     | Non                | Oui           | Montant patronal calculé                      |
| **Position**       | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique du poste                    |
| Position                 | title             | Alphanumérique | 255      | Oui                | Non           | Intitulé du poste                             |
| Position                 | description       | Alphanumérique | 255      | Oui                | Non           | Description du poste                           |
| Position                 | minSalary         | Décimal        | 19,2     | Oui                | Non           | Salaire minimum pour ce poste                  |
| Position                 | maxSalary         | Décimal        | 19,2     | Oui                | Non           | Salaire maximum pour ce poste                  |
| **User**           | id                | Numérique      | 11       | Oui                | Non           | Identifiant unique de l'utilisateur            |
| User                     | firstName         | Alphanumérique | 255      | Oui                | Non           | Prénom                                        |
| User                     | lastName          | Alphanumérique | 255      | Oui                | Non           | Nom de famille                                 |
| User                     | email             | Alphanumérique | 255      | Oui                | Non           | Adresse email                                  |
| User                     | password          | Alphanumérique | 255      | Oui                | Non           | Mot de passe (haché)                          |
| User                     | role              | Alphanumérique | 255      | Oui                | Non           | Rôle de l'utilisateur (ex: Admin, RH)         |
| User                     | nsc               | Alphanumérique | 255      | Oui                | Non           | Numéro de Sécurité Sociale                  |
| User                     | iban              | Alphanumérique | 255      | Oui                | Non           | Coordonnées bancaires IBAN                    |
| User                     | address           | Alphanumérique | 255      | Oui                | Non           | Adresse personnelle                            |
| User                     | city              | Alphanumérique | 255      | Oui                | Non           | Ville de résidence                            |
| User                     | zipCode           | Alphanumérique | 20       | Oui                | Non           | Code postal                                    |
| User                     | taxRate           | Décimal        | 19,2     | Oui                | Non           | Taux d'imposition (Prélèvement à la source) |
| User                     | establishment_id  | Numérique      | 11       | Oui                | Non           | Clé étrangère vers l'établissement         |
