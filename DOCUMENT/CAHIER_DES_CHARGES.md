# Cahier des Charges - Application Memoire

## 1. Identification du Projet

### 1.1 Général

- **Nom du projet:** Memoire
- **Type:** Application web de gestion RH et paie
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

- 1 Lead développeur
- 1 Développeur Backend
- 1 Développeur Frontend
- 1 QA/Testeur
- 1 Responsable RH (Product Owner)

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

## 5. Coûts (Estimé)

### 5.1 Développement

- Analyses et conception: 80 h
- Développement Backend: 240 h
- Développement Frontend: 160 h
- Tests et QA: 120 h
- Déploiement: 40 h
- **Total:** 640 heures

### 5.2 Infrastructure

- Serveurs: 2000€/an
- Licences logiciels: 500€/an
- Maintenance: 3000€/an
- **Total:** 5500€/an

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

## 10. Approvals

| Rôle            | Nom | Date | Signature |
| ---------------- | --- | ---- | --------- |
| Directeur Projet | TBD |      |           |
| Product Owner    | TBD |      |           |
| Lead Technique   | TBD |      |           |

---

*Dernière mise à jour: 2026-07-03*
