# Plan de Soutenance CDA - Projet GFPS

Ce document détaille le plan de votre présentation, slide par slide, avec le temps estimé, les visuels, votre discours (le script oral), ainsi que le vocabulaire et les définitions associés pour vous aider à maîtriser votre sujet devant le jury.

> [!TIP]
> **Durée totale estimée :** ~20 minutes. 
> Pensez à respirer et à parler à un rythme modéré. N'hésitez pas à pointer les éléments sur vos slides.

---

## ⏱️ Slide 1 : Le projet GFPS (0:30 min)
**Titre :** Le projet GFPS - Génération de Fiches de Paie Simplifiées
**Images/Visuels :** Page de garde avec le titre, votre nom, le logo de votre entreprise (Eiffage), l'année et le logo du diplôme CDA.

**🗣️ À l'oral :**
« Bonjour à tous et merci d'être présents pour ma soutenance du titre de Concepteur Développeur d'Applications. Je m'appelle Victor Alves Fernandes et je vais vous présenter aujourd'hui mon projet de fin d'études : le projet GFPS, qui signifie "Génération de Fiches de Paie Simplifiées". C'est un projet que j'ai mené de bout en bout dans le cadre de mon alternance au sein de l'entreprise Eiffage pour l'année 2025-2026. »

**📚 Vocabulaire & Définitions :**
*   **CDA :** Concepteur Développeur d'Applications (titre professionnel de niveau 6).
*   **GFPS :** Génération de Fiches de Paie Simplifiées, le nom de votre application.

---

## ⏱️ Slide 2 : Au programme aujourd'hui (0:30 min)
**Titre :** Au programme aujourd'hui
**Images/Visuels :** Un sommaire visuel avec des icônes pour chaque grande partie.

**🗣️ À l'oral :**
« Pour cette présentation, nous suivrons le cheminement logique du projet. Nous commencerons par le contexte de l'entreprise et mon rôle, puis nous analyserons l'existant qui a motivé ce projet. Ensuite, nous aborderons la conception fonctionnelle et ergonomique, suivie de la modélisation de la base de données. Enfin, nous plongerons dans la réalisation technique, la sécurité et le déploiement, avant de conclure sur un bilan de mes compétences et les perspectives d'avenir. »

**📚 Vocabulaire & Définitions :**
*   **UI/UX :** User Interface (Interface utilisateur) / User Experience (Expérience utilisateur).
*   **MCD :** Modèle Conceptuel de Données.
*   **CI/CD :** Continuous Integration / Continuous Deployment.

---

## ⏱️ Slide 3 : Avant-propos et Contexte (0:30 min)
**Titre :** Avant-propos et Contexte - Une double démarche
**Images/Visuels :** Deux piliers ou flèches qui convergent.

**🗣️ À l'oral :**
« Ce projet s'inscrit au carrefour de deux exigences majeures : d'une part, il est réalisé dans le cadre de mon alternance au sein du service A-MOA d’Eiffage. Et d'autre part, il vise à la validation intégrale des compétences exigées par le cursus Concepteur Développeur d'Applications. »

**📚 Vocabulaire & Définitions :**
*   **A-MOA :** Assistance à Maîtrise d'Ouvrage.

---

## ⏱️ Slide 4 : Le Groupe Eiffage (0:30 min)
**Titre :** Le Groupe Eiffage
**Images/Visuels :** Chiffres clés (80 000 collaborateurs), carte de l'Europe.

**🗣️ À l'oral :**
« Pour bien comprendre les enjeux, un mot sur mon entreprise d'accueil. Eiffage est un leader européen du BTP et des concessions. Avec plus de 80 000 collaborateurs répartis dans de multiples branches, l'entreprise fait face à une très forte complexité RH, notamment à cause de la multiplicité des conventions collectives et des spécificités des chantiers. »

**📚 Vocabulaire & Définitions :**
*   **Convention collective :** Accord écrit résultant d'une négociation entre syndicats de salariés et employeurs.

---

## ⏱️ Slide 5 : L'ampleur du défi RH (0:30 min)
**Titre :** L'ampleur du défi RH
**Images/Visuels :** Icônes de données volumineuses, calendrier de paie.

**🗣️ À l'oral :**
« À cette échelle, la gestion de la paie est un défi colossal. Nous parlons de millions de données traitées chaque mois : pointages, primes, absences. L'exactitude comptable doit être absolue, car la moindre erreur technique ou humaine a un impact financier direct sur la vie du salarié et sur la conformité légale de l'entreprise. »

**📚 Vocabulaire & Définitions :**
*   **Pointages :** Enregistrement des heures de travail.

---

## ⏱️ Slide 6 : Eiffage Global Services (EGS) (0:30 min)
**Titre :** Eiffage Global Services (EGS)
**Images/Visuels :** Organigramme situant la branche EGS et le service "RUN".

**🗣️ À l'oral :**
« Au sein d'Eiffage, j'évolue dans la branche EGS (Eiffage Global Services), qui mutualise les fonctions support comme l'informatique et la paie. Plus précisément, je fais partie du service "RUN". Notre mission est de garantir le Maintien en Condition Opérationnelle des applications. Nous assurons le support technique pour que les équipes RH puissent travailler sans interruption. »

**📚 Vocabulaire & Définitions :**
*   **EGS :** Eiffage Global Services.
*   **RUN :** Maintien et exploitation quotidienne d'une application.
*   **MCO :** Maintien en Condition Opérationnelle.

---

## ⏱️ Slide 7 : Mon Rôle : A-MOA (0:45 min)
**Titre :** Mon Rôle : A-MOA
**Images/Visuels :** Un pont entre "IT" et "Métier". Trois piliers : Support technique, Fiabilisation, Assistance.

**🗣️ À l'oral :**
« Mon rôle est celui d'Assistance à Maîtrise d'Ouvrage (A-MOA). J'agis comme un pont entre le monde de l'IT et les gestionnaires RH. Mes missions s'articulent autour de 3 piliers : le support technique sur les mécanismes complexes de paie, la fiabilisation des données via des requêtes SQL, et l'assistance utilisateur au quotidien via notre outil de ticketing. »

**📚 Vocabulaire & Définitions :**
*   **SQL :** Structured Query Language.
*   **Ticketing :** Système de gestion des demandes et incidents.

---

## ⏱️ Slide 8 : Un SIRH Fragmenté (0:30 min)
**Titre :** Un SIRH Fragmenté
**Images/Visuels :** Schéma montrant GXP, BusinessObjects, ACE avec des chemins compliqués.

**🗣️ À l'oral :**
« Le problème actuel chez Eiffage, c'est que ce flux repose sur un système fragmenté : le moteur propriétaire ADP GXP, l'outil décisionnel BusinessObjects pour les requêtes, et l'application ACE pour les éléments variables. Cette multiplication d'outils impose une navigation laborieuse pour les gestionnaires. »

**📚 Vocabulaire & Définitions :**
*   **SIRH :** Système d'Information de Gestion des Ressources Humaines.
*   **BusinessObjects (BO) :** Outil de Business Intelligence.

---

## ⏱️ Slide 9 : Le cycle de paie classique (0:40 min)
**Titre :** Le cycle de paie classique
**Images/Visuels :** Workflow en 4 étapes (Collecte > Calcul > Contrôle > Clôture).

**🗣️ À l'oral :**
« Pour mieux visualiser cette difficulté, on peut le voir à travers le cycle mensuel strict en 4 étapes : d'abord la Collecte des variables du mois, puis le Calcul du Brut vers le Net par le moteur de paie, suivi du Contrôle de cohérence comptable, et enfin la Clôture avec les virements et l'envoi légal de la DSN. Un bon SIRH doit maîtriser parfaitement ce flux. »

**📚 Vocabulaire & Définitions :**
*   **DSN :** Déclaration Sociale Nominative.

---

## ⏱️ Slide 10 : Le projet E-BSI (0:30 min)
**Titre :** Le projet E-BSI : Le déclencheur du besoin
**Images/Visuels :** Logo du Bilan Social Individuel et WINCHApps.

**🗣️ À l'oral :**
« Le projet concret qui m’a permis de valider cette problématique est celui de E-BSI, visant à digitaliser le Bilan Social Individuel des salariés via un outil SaaS externe appelé WINCHApps. Il fallait pour cela extraire toutes nos données de paie pour les envoyer à cet éditeur. »

**📚 Vocabulaire & Définitions :**
*   **BSI :** Bilan Social Individuel.
*   **SaaS :** Software as a Service.

---

## ⏱️ Slide 11 : Mon intervention sur E-BSI (1:00 min)
**Titre :** Mon intervention sur E-BSI
**Images/Visuels :** 3 phases d'intervention (Spécifications > Réalisation > Recette).

**🗣️ À l'oral :**
« C'est la version dématérialisée du Bilan Social Individuel. Mon intervention s'est faite sur 3 phases. Phase 1 : m'appuyer sur les spécifications WINCHApps et prendre en compte la matrice d'import. Phase 2 : la réalisation concrète en créant des requêtes BO et en validant les données. Phase 3 : la recette, où j'ai dû diagnostiquer les erreurs en distinguant ce qui relevait de la requête source ou du paramétrage de l'outil cible. »

**📚 Vocabulaire & Définitions :**
*   **Recette :** Phase de tests avant mise en production.
*   **Matrice :** Document définissant le format d'import attendu.

---

## ⏱️ Slide 12 : Les limites opérationnelles (0:30 min)
**Titre :** Les limites opérationnelles
**Images/Visuels :** Icône Excel, chaîne brisée.

**🗣️ À l'oral :**
« Cette fragmentation a des conséquences directes : elle crée des ruptures de chaîne de données compensées par des fichiers Excel manuels, ce qui favorise les erreurs. De plus, ces systèmes propriétaires sont très rigides et chers à faire évoluer. Enfin, il manque un véritable portail unifié où le collaborateur pourrait être autonome. »

**📚 Vocabulaire & Définitions :**
*   **Rupture de chaîne de données :** Interruption de l'automatisation.

---

## ⏱️ Slide 13 : Le Projet GFPS (0:30 min)
**Titre :** Le Projet GFPS - Génération de Fiches de Paie Simplifiées
**Images/Visuels :** Représentation d'une solution unifiée (Admin + Calcul + Employé).

**🗣️ À l'oral :**
« C'est ainsi qu'est né le projet GFPS : Génération de Fiches de Paie Simplifiées. J'ai décidé de créer un Proof of Concept d'une solution unifiée qui regrouperait l'administration RH, le calcul pur de la paie, et un portail collaborateur, tout cela dans une seule application web. »

**📚 Vocabulaire & Définitions :**
*   **PoC :** Proof of Concept.

---

## ⏱️ Slide 14 : Méthodologie de projet : Kanban (0:45 min)
**Titre :** Méthodologie de projet : Kanban
**Images/Visuels :** Tableau GitHub Projects.

**🗣️ À l'oral :**
« Travaillant seul sur ce projet tout en étant en alternance, j'avais besoin de flexibilité. J'ai choisi d'adopter une démarche Agile. Au lieu de figer toutes les spécifications fonctionnelles dans un cahier des charges initial, je préfère les définir et les modifier tout au long du projet. J'ai donc choisi la méthodologie Kanban grâce à GitHub Projects. Cela m'a permis de gérer mon backlog et de limiter mon Work in Progress (WIP) pour m'assurer de terminer et tester une fonctionnalité avant d'en commencer une autre. »

**📚 Vocabulaire & Définitions :**
*   **Kanban :** Méthode agile visuelle (tableau à colonnes).
*   **WIP :** Work In Progress (travail en cours).

---

## ⏱️ Slide 15 : Planning GANTT (0:30 min)
**Titre :** Planning GANTT
**Images/Visuels :** Capture du diagramme de Gantt.

**🗣️ À l'oral :**
« Le diagramme de Gantt offre une vision à long terme pour s'assurer que le projet global respecte les délais impartis. Il permet d'anticiper les coupures liées au rythme de l'alternance. Il identifie clairement les dépendances entre les tâches majeures afin de structurer l'ordre logique des développements et matérialise les jalons clés du projet de manière parfaitement complémentaire au pilotage quotidien du Kanban. »

**📚 Vocabulaire & Définitions :**
*   **Diagramme de Gantt :** Outil de planification graphique.
*   **Jalon (Milestone) :** Événement clé marquant la fin d'une phase.

---

## ⏱️ Slide 16 : 3 Objectifs Majeurs (0:30 min)
**Titre :** 3 Objectifs Majeurs
**Images/Visuels :** Personas Admin RH et Employé.

**🗣️ À l'oral :**
« L'application repose sur une séparation stricte des rôles. D'un côté, l'Admin RH a tous les droits pour onboarder des salariés, saisir les primes, déclencher les calculs et paramétrer les taux. De l'autre, l'Employé accède à un espace "Self-Service" en lecture seule pour suivre ses compteurs de congés et télécharger ses fiches de paie. »

**📚 Vocabulaire & Définitions :**
*   **Self-Service :** Fonctionnalité permettant à l'utilisateur de réaliser des opérations par lui-même.

---

## ⏱️ Slide 17 : Les différentes contraintes (0:30 min)
**Titre :** Les différentes contraintes
**Images/Visuels :** Liste des FP (Fonctions Principales) et FC (Fonctions Contraintes).

**🗣️ À l'oral :**
« J'ai défini un ensemble de contraintes pour le projet. La fonction principale (FP1) est de permettre à l'Admin RH de gérer les employés et la paie. Les contraintes incluent l'ergonomie (FC1), la facilité d'accès (FC2), le respect strict de la réglementation RGPD (FC3), une compatibilité web moderne (FC4) et un stockage sécurisé des données (FC5). »

**📚 Vocabulaire & Définitions :**
*   **RGPD :** Règlement Général sur la Protection des Données.

---

## ⏱️ Slide 18 : L'environnement de travail technique (0:30 min)
**Titre :** L'environnement de travail technique
**Images/Visuels :** Logos : Looping, Draw.io, VS Code, Git, Gemini.

**🗣️ À l'oral :**
« Mon environnement de travail était complet : Looping pour la modélisation Merise, Draw.io pour l'UML, VS Code comme IDE principal, Git et GitHub pour le versionnage, et enfin l'IA Gemini que j'ai utilisée comme assistant de pair-programming pour m'aider à optimiser certains algorithmes complexes. »

**📚 Vocabulaire & Définitions :**
*   **Merise / UML :** Méthodes de modélisation.
*   **IDE :** Integrated Development Environment.
*   **Pair-programming :** Programmation en binôme.

---

## ⏱️ Slide 19 : Périmètre fonctionnel (Séparation des rôles) (0:15 min)
**Titre :** Périmètre fonctionnel (Séparation des rôles)
**Images/Visuels :** Tableau comparatif Admin vs Employé.

**🗣️ À l'oral :**
« Comme évoqué, l'application repose sur une séparation stricte des rôles garantissant l'étanchéité totale du système. »

**📚 Vocabulaire & Définitions :**
*   *Pas de vocabulaire spécifique supplémentaire ici.*

---

## ⏱️ Slide 20 : Arborescence & Navigation (Sitemap) (0:30 min)
**Titre :** Arborescence & Navigation (Sitemap)
**Images/Visuels :** Organigramme : Login -> Aiguillage RH / Employé.

**🗣️ À l'oral :**
« L'architecture de navigation est simple et sécurisée. L'application possède un point d'entrée unique : la page de connexion. Ensuite, un aiguillage intelligent basé sur le token de l'utilisateur le redirige automatiquement vers les espaces RH ou Employé auxquels il a droit. »

**📚 Vocabulaire & Définitions :**
*   **Token :** Jeton numérique prouvant l'identité.

---

## ⏱️ Slide 21 : Cycle de conception visuelle (0:30 min)
**Titre :** Cycle de conception visuelle
**Images/Visuels :** 3 étapes (Zoning, Wireframes, Maquettes).

**🗣️ À l'oral :**
« Le design a suivi un cycle itératif classique : j'ai commencé par des zonings pour définir la structure, puis j'ai détaillé les composants avec des wireframes, avant d'appliquer la charte graphique complète sur des maquettes haute fidélité, prêtes à être intégrées. »

**📚 Vocabulaire & Définitions :**
*   **Zoning :** Découpage de l'écran en grandes zones.
*   **Wireframe :** Maquette fonctionnelle (squelette).

---

## ⏱️ Slide 22 : Conception Ergonomique (UI/UX) (0:45 min)
**Titre :** Conception Ergonomique (UI/UX)
**Images/Visuels :** Palette de couleurs et style Glass Morphisme.

**🗣️ À l'oral :**
« L'enjeu ergonomique principal était de réduire la fatigue visuelle, car un RH traite énormément de données. J'ai opté pour un style "Glass Morphisme" aéré et transparent. J'ai également mis en place un code couleur sémantique strict : le bleu pour la confiance, le vert pour les validations, et le rouge pour les alertes. »

**📚 Vocabulaire & Définitions :**
*   **Glass Morphisme :** Effet de design simulant du verre.

---

## ⏱️ Slide 23 : Aperçu des écrans de l'application (0:30 min)
**Titre :** Aperçu des écrans de l'application
**Images/Visuels :** Captures d'écran : Login, Dashboard Admin, Espace Salarié.

**🗣️ À l'oral :**
« Voici concrètement les écrans clés : un formulaire de connexion épuré, un Dashboard Administrateur permettant de gérer les employés sous forme de listes interactives, et l'espace Salarié focalisé sur la consultation des compteurs et l'export PDF. »

**📚 Vocabulaire & Définitions :**
*   **Dashboard :** Tableau de bord.

---

## ⏱️ Slide 24 : Diagramme de Cas d'Utilisation (0:30 min)
**Titre :** Diagramme de Cas d'Utilisation
**Images/Visuels :** Diagramme UML de cas d'utilisation.

**🗣️ À l'oral :**
« D'un point de vue modélisation UML, le diagramme de cas d'utilisation définit les frontières. L'authentification est un prérequis obligatoire pour tous. L'employé est limité à la lecture, tandis que l'Admin RH détient les privilèges d'exécution des calculs et de modification des règles de gestion. »

**📚 Vocabulaire & Définitions :**
*   **Cas d'utilisation :** Interactions entre les utilisateurs et le système.

---

## ⏱️ Slide 25 : Modélisation Conceptuelle (MCD) (1:00 min)
**Titre :** Modélisation Conceptuelle (MCD)
**Images/Visuels :** Schéma MCD (Utilisateur, Établissement, Contrat, Poste, Payslip).

**🗣️ À l'oral :**
« Pour modéliser l'architecture de notre application GFPS, nous avons commencé par élaborer un Modèle Conceptuel de Données pour traduire fidèlement les règles de gestion RH. La pierre angulaire est l'entité Utilisateur, rattachée à un Établissement. Une règle métier essentielle est l'évolution de carrière : c'est pourquoi nous avons séparé l'utilisateur de son Contrat (pour conserver un historique exact). Enfin, pour la flexibilité législative, la fiche de paie (Payslip) est composée de plusieurs Lignes de Paie indépendantes. »

**📚 Vocabulaire & Définitions :**
*   **Entité :** Objet de gestion.
*   **Historisation :** Conservation de l'historique des changements.

---

## ⏱️ Slide 26 : Modélisation Logique (MLD) (1:00 min)
**Titre :** Modélisation Logique (MLD)
**Images/Visuels :** Schéma MLD avec tables, clés primaires et clés étrangères.

**🗣️ À l'oral :**
« Une fois ces règles établies, nous les avons traduites informatiquement via le Modèle Logique de Données (MLD). Les associations sont devenues des clés primaires et étrangères pour garantir l'intégrité référentielle. Par exemple, la table PAYSLIP intègre deux clés étrangères : l'ID de l'employé et l'ID du contrat. Lors de la génération du PDF, l'application remonte ces clés pour récupérer toutes les informations contractuelles exactes au moment T. »

**📚 Vocabulaire & Définitions :**
*   **Clé primaire / étrangère :** Liens d'identifiants entre tables.
*   **Intégrité référentielle :** Garantie de validité des liens.

---

## ⏱️ Slide 27 : Justification de la Stack Technique (1:15 min)
**Titre :** Justification de la Stack Technique
**Images/Visuels :** Logos : Java, Spring Boot, JS, HTML, CSS, MySQL.

**🗣️ À l'oral :**
« J’ai choisi de développer le backend avec Java et Spring Boot pour leur robustesse face aux données sensibles. Cela nous offre Spring Security pour l'authentification et Spring Data JPA pour la manipulation propre des données.
Pour le frontend, j’ai pris le parti de tout coder en JavaScript natif, HTML5 et CSS. Cela prouve notre maîtrise des fondamentaux et offre une interface ultra-légère. L'utilisation de jsPDF décharge le serveur puisque c'est le navigateur qui dessine le PDF.
Enfin, le choix de MySQL est stratégique : seule une base de données relationnelle nous garantit que les liens critiques entre un employé, son contrat et sa fiche de paie ne seront jamais cassés. »

**📚 Vocabulaire & Définitions :**
*   **Stack technique :** Ensemble des technologies.
*   **JPA :** Java Persistence API.

---

## ⏱️ Slide 28 : Architecture 3-Tiers (1:00 min)
**Titre :** Architecture 3-Tiers
**Images/Visuels :** Schéma 3 blocs : Client (Navigateur) <-> Serveur (Spring Boot) <-> BDD (MySQL).

**🗣️ À l'oral :**
« Sur cette diapositive, je vous présente l'architecture en 3 tiers. Le premier tiers est le Client (le navigateur web) exécutant notre Single Page Application en JavaScript, qui dialogue via requêtes HTTP JSON.
Le deuxième tiers est notre Serveur Spring Boot, découpé en Controller (porte d'entrée), Service (logique métier), et Repository (dialogue avec la BDD via JPA).
Le troisième tiers est la Base de Données MySQL. Cette séparation nous assure sécurité et forte modularité (API REST prête pour mobile). »

**📚 Vocabulaire & Définitions :**
*   **Architecture 3-Tiers :** Découpage logique (Présentation, Traitement, Données).
*   **SPA :** Single Page Application.
*   **API REST :** Interface de communication au format JSON.

---

## ⏱️ Slide 29 : CI/CD, versionning deploiment (1:00 min)
**Titre :** CI/CD, versionning deploiment
**Images/Visuels :** Pipeline CI/CD (Dev -> Push -> Tests JUnit -> Tomcat -> DB protégée).

**🗣️ À l'oral :**
« Pour l'aspect opérationnel, voici notre architecture de déploiement. Tout part de l'environnement de développement local. À chaque push sur GitHub, notre chaîne CI s'exécute avec des tests unitaires JUnit automatisés. Si un test échoue, le déploiement est bloqué.
Ensuite, l'application est déployée sur notre serveur d'application intégrant Tomcat. La base de données MySQL, elle, est dans une zone protégée, non exposée sur internet, dialoguant de façon sécurisée avec notre serveur. »

**📚 Vocabulaire & Définitions :**
*   **CI/CD :** Continuous Integration / Continuous Deployment.
*   **Tomcat :** Serveur web Java.
*   **JUnit :** Framework de tests pour Java.

---

## ⏱️ Slide 30 : Cybersécurité : Les Risques Identifiés (0:45 min)
**Titre :** Cybersécurité : Les Risques Identifiés
**Images/Visuels :** 3 risques (Usurpation, Fuite MySQL, Manipulation d'URL).

**🗣️ À l'oral :**
« Manipuler des bulletins de salaire nous impose un respect strict du RGPD. Nous avons ciblé trois menaces principales : 
Premièrement, l'usurpation d'identité RH (altération des règles). 
Deuxièmement, la fuite de données massives (base MySQL). 
Troisièmement, les accès transversaux par manipulation d'URL : le risque qu'un salarié accède aux fiches d'un tiers. »

**📚 Vocabulaire & Définitions :**
*   **RGPD :** Règlement Général sur la Protection des Données.
*   **Accès transversal :** Vulnérabilité via le changement d'identifiant dans une URL.

---

## ⏱️ Slide 31 : Cybersécurité : Solutions Techniques (0:45 min)
**Titre :** Cybersécurité : Solutions Techniques
**Images/Visuels :** Hachage (BCrypt) / Contrôle RBAC (@PreAuthorize) / Anti-Injection (JPA).

**🗣️ À l'oral :**
« Pour répondre concrètement à ces risques, nous avons déployé trois parades :
Côté mots de passe : Hachage robuste par algorithme BCrypt avec salage.
Côté accès : Contrôle RBAC strict via l'annotation `@PreAuthorize` de Spring Security, bloquant toute requête non autorisée avec une erreur 403.
Côté base de données : L'ORM Spring Data JPA génère nativement des requêtes préparées, bloquant totalement les injections SQL. »

**📚 Vocabulaire & Définitions :**
*   **BCrypt :** Algorithme de hachage.
*   **RBAC :** Role-Based Access Control.
*   **Injection SQL :** Faille d'injection de code dans une requête BDD.

---

## ⏱️ Slide 32 : Authentification JWT (1:15 min)
**Titre :** Authentification JWT
**Images/Visuels :** Diagramme de séquence du login.

**🗣️ À l'oral :**
« Voici le diagramme de l'authentification. L'utilisateur saisit ses identifiants qui sont envoyés via POST à notre API. Le Contrôleur vérifie via le Repository et compare le mot de passe avec BCrypt. En cas de succès, un Token JWT (JSON Web Token) signé numériquement est généré et renvoyé au client. Le navigateur stocke ce token dans le SessionStorage ou LocalStorage et redirige dynamiquement l'utilisateur selon son rôle (Admin ou Employé). »

**📚 Vocabulaire & Définitions :**
*   **JWT :** JSON Web Token (jeton d'authentification sécurisé).
*   **LocalStorage :** Stockage local du navigateur web.

---

## ⏱️ Slide 33 : Consultation des Fiches de Paie (Côté Employé) (1:00 min)
**Titre :** Consultation des Fiches de Paie (Côté Employé)
**Images/Visuels :** Schéma de workflow (GET -> Filtrage -> DTO -> jsPDF).

**🗣️ À l'oral :**
« Côté employé, l'extraction est ciblée et sécurisée. Une requête GET est envoyée pour récupérer les fiches. Le backend convertit les entités de base de données en objets DTO pour alléger le transfert réseau et masquer les données inutiles. Une fois la liste JSON reçue, lorsque l'employé clique sur télécharger, la librairie jsPDF génère instantanément le PDF côté client, sans surcharger le serveur. »

**📚 Vocabulaire & Définitions :**
*   **DTO (Data Transfer Object) :** Objet servant au transport des données.
*   **jsPDF :** Librairie JavaScript pour générer des fichiers PDF côté client.

---

## ⏱️ Slide 34 : Focus Backend : Spring Data JPA (1:00 min)
**Titre :** Focus Backend : Spring Data JPA
**Images/Visuels :** Code Java de la classe Payslip.

**🗣️ À l'oral :**
« Pour illustrer concrètement l'ORM, voici un extrait de la classe Payslip. Les annotations `@Entity` et `@Table` mappent la classe à la table MySQL. L'identifiant est autogénéré via `@GeneratedValue`. L'annotation `@ManyToOne` indique la liaison relationnelle, générant la clé étrangère automatiquement. De plus, les valeurs financières utilisent le type `BigDecimal` pour prévenir les bugs d'arrondis mathématiques. »

**📚 Vocabulaire & Définitions :**
*   **ORM :** Object-Relational Mapping.
*   **BigDecimal :** Type Java pour des calculs financiers ultra-précis.

---

## ⏱️ Slide 35 : Focus Backend : Spring Data JPA (AuthController) (0:45 min)
**Titre :** Focus Backend : Spring Data JPA (AuthController)
**Images/Visuels :** Code Java de la classe AuthController (méthode login).

**🗣️ À l'oral :**
« Dans le même esprit de sécurité, voici notre `AuthController`. Il est annoté `@RestController`. Dans la méthode POST du login, nous utilisons notre repository pour trouver l'utilisateur et `passwordEncoder.matches` pour vérifier le mot de passe de manière sécurisée. Si c'est valide, un `LoginResponse` est généré et renvoyé avec un statut 200 OK, sinon c'est un statut 401 Unauthorized. »

**📚 Vocabulaire & Définitions :**
*   *Code-specific terms explained in speech.*

---

## ⏱️ Slide 36 : Demonstration GFPS (TBD min)
**Titre :** Demonstration GFPS
**Images/Visuels :** Interface en direct ou vidéo.

**🗣️ À l'oral :**
*(Présentation en conditions réelles de l'application : connexion, interface Admin, génération de paie, vue Employé).*

**📚 Vocabulaire & Définitions :**
*   *Pas de vocabulaire technique.*

---

## ⏱️ Slide 37 : Bilan Professionnel (0:30 min)
**Titre :** Bilan Professionnel
**Images/Visuels :** Validation de compétences, logos CDA.

**🗣️ À l'oral :**
« Ce projet m'a permis de comprendre et valider les différentes compétences d’un Concepteur et Développeur d'Application : de l'analyse du besoin auprès des utilisateurs A-MOA à la conception de la BDD, jusqu'au développement full-stack et à la sécurisation des composants. »

**📚 Vocabulaire & Définitions :**
*   **Full-stack :** Développeur capable d'intervenir en Front-End et Back-End.

---

## ⏱️ Slide 38 : Fin de la présentation (0:15 min)
**Titre :** Fin de la présentation
**Images/Visuels :** Message de remerciements.

**🗣️ À l'oral :**
« En conclusion, GFPS démontre la faisabilité d'une solution unifiée et moderne pour la gestion de la paie. GFPS reste un prototype prometteur. Je vous remercie sincèrement pour votre attention et je suis disponible pour répondre à vos questions. »

**📚 Vocabulaire & Définitions :**
*   *Fin.*
