# Politique et Mesures de Cybersécurité - Projet GFPS

## Sommaire
- [1. Authentification et Gestion des Accès](#1-authentification-et-gestion-des-accès)
- [2. Protection des Données Personnelles (Conformité RGPD)](#2-protection-des-données-personnelles-conformité-rgpd)
- [3. Sécurité des Communications et du Réseau](#3-sécurité-des-communications-et-du-réseau)
- [4. Protection contre les Vulnérabilités Courantes (OWASP Top 10)](#4-protection-contre-les-vulnérabilités-courantes-owasp-top-10)

> **Contexte du Projet :** Ce projet est développé de A à Z par un **seul étudiant en alternance** pour son mémoire de fin d'études. Les mesures de sécurité décrites ci-dessous témoignent de la volonté d'appliquer des normes professionnelles rigoureuses, bien qu'il s'agisse d'un projet académique.

Ce document recense les bonnes pratiques et les mesures techniques de sécurité implémentées (ou à implémenter) dans le cadre du projet pour garantir la protection des données des employés et la robustesse de l'application.

## 1. Authentification et Gestion des Accès
- **Chiffrement des mots de passe :** Les mots de passe ne sont jamais stockés en clair. Ils sont hachés via BCrypt (Spring Security) dans `AuthController`.
- **Contrôle d'accès basé sur les rôles (RBAC) :** GFPS différencie strictement les rôles (`ADMIN`, `EMPLOYEE`). L'Admin gère les employés et génère les bulletins, tandis que l'Employé n'a accès qu'en lecture seule à ses propres fiches et congés.
- **Protection des points d'entrée :** L'architecture REST est sécurisée par des JSON Web Tokens (JWT) Stateless, interdisant toute requête non authentifiée.

## 2. Protection des Données Personnelles (Conformité RGPD)
Étant un logiciel de gestion des ressources humaines, l'application manipule des données extrêmement sensibles (Numéro de Sécurité Sociale, IBAN, fiches de paie).
- **Minimisation des données exposées :** Lors de l'authentification, seules les informations nécessaires (ID, Nom, Prénom, Email, Rôle) sont renvoyées via `LoginResponse`. Le hachage du mot de passe ne quitte jamais le serveur.
- **Chiffrement au repos (Encryption at Rest) :** Recommandation de chiffrer les champs très sensibles (comme l'IBAN) directement dans la base de données.

## 3. Sécurité des Communications et du Réseau
- **Protocole HTTPS / TLS :** En production, tous les échanges entre l'interface utilisateur (frontend) et le serveur (backend Spring Boot) doivent obligatoirement se faire via HTTPS pour empêcher l'interception des données (Man-In-The-Middle).
- **CORS (Cross-Origin Resource Sharing) :** Le backend doit être configuré pour n'accepter que les requêtes provenant de l'URL légitime du frontend.

## 4. Protection contre les Vulnérabilités Courantes (OWASP Top 10)
- **Injection SQL :** L'utilisation de Spring Data JPA / Hibernate garantit la création de requêtes paramétrées, ce qui élimine quasiment le risque d'injections SQL.
- **Faille XSS (Cross-Site Scripting) :** Les frameworks frontend modernes échappent automatiquement le contenu affiché. De plus, les données entrantes doivent être validées côté serveur.
- **CSRF (Cross-Site Request Forgery) :** Géré soit par la configuration Spring Security, soit atténué par l'utilisation d'API REST sans session d'état (Stateless) utilisant des tokens JWT placés dans le header `Authorization`.

---
[⬅️ Retour à l'Index principal](../INDEX.md)
