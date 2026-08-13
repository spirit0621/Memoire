# Plan de Résolution : Affichage des Fiches de Paie (Côté Administrateur)

Ce plan documente la cause du dysfonctionnement empêchant le chargement et l'affichage des données de paie pour le profil Administrateur (RH) et détaille la correction apportée.

## Description du Problème

Lorsqu'un administrateur (ex: Alice Martin, Responsable RH) se connectait, la section "Fiches de paie" restait vide ou ne chargeait pas les données globales des employés.
L'origine du problème se trouvait dans la méthode `fetchAll()` du fichier `api.js`. Le code front-end vérifiait de manière stricte si le rôle de l'utilisateur était `'RH'`. Cependant, l'authentification côté backend (configurée dans `UserSeed.java`) définissait le rôle de l'administrateur comme `'ADMIN'`.
À cause de cette différence (`'ADMIN'` au lieu de `'RH'`), l'application considérait l'administrateur comme un simple employé et omettait de charger la liste complète des employés (`/api/employees`) et des fiches de paie (`/api/payslips`). 

## Modifications Apportées

Pour rétablir le tableau de bord administrateur, nous avons modifié la logique de vérification des rôles dans le fichier d'accès à l'API (`api.js`) :

### 1. Adaptation de la condition de rôle (api.js)

#### [MODIFY] [api.js](file:///c:/Users/alves/Desktop/Memoire-chore-24Sous-Tache/memoire/src/main/resources/static/js/api.js#L34)
La vérification de sécurité a été élargie pour valider à la fois `'ADMIN'` et `'RH'`, garantissant ainsi que l'application charge bien les données étendues pour tout profil RH.
```javascript
- if (state.user.role === 'RH') {
+ if (state.user.role === 'ADMIN' || state.user.role === 'RH') {
      const [emps, pays, vars, depts] = await Promise.all([
          fetch('/api/employees').then(r => r.json()),
          fetch('/api/payslips').then(r => r.json()),
          fetch('/api/variables').then(r => r.json()),
          fetch('/api/departments').then(r => r.json())
      ]);
```

## Plan de Vérification

### Vérification Manuelle
- Connectez-vous avec le compte administrateur (RH) (`alice.martin@techcorp.fr`).
- Accédez à la section "Fiches de paie" dans la barre de navigation.
- **Résultat attendu** :
  - Le tableau affiche la liste complète des fiches de paie de l'entreprise (incluant celles de Bob Dupont et potentiellement d'autres).
  - Le bouton "Générer la paie" et "Tout télécharger (ZIP)" sont visibles et fonctionnels.
  - Le filtre par établissement fonctionne correctement avec les données chargées.

> [!NOTE]
> Cette correction a déjà été intégrée dans le code en même temps que le correctif pour les employés. L'interface administrateur est désormais opérationnelle.
