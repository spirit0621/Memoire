# 🧩 Stratégie Git et Conventions de Nommage

## Sommaire
- [🪄 Types de branches](#-types-de-branches)
- [🌿 Nomenclature des Branches](#-nomenclature-des-branches)
- [💬 Nomenclature des Commits](#-nomenclature-des-commits)

## 🪄 Types de branches

- **feature** : nouvelle fonctionnalité  
- **chore** : nettoyage du code source, gestion des dépendances (sans modification du code)  
- **experiment** : expérimentation de fonctionnalités  
- **bugfix** : modification à apporter sur la branche `develop` pour les bugs non critiques  
- **hotfix** : modification à apporter sur la production pour les bugs critiques  
- **doc** : documentation  

> ⚠️ **Très important :**  
> Les branches **hotfix** sont les seules que l’on crée à partir de la branche `master`.  
> Il est **impossible** de les créer à partir de `develop`, car au moment du merge, tous les nouveaux développements seraient également ajoutés sur la production — ce que l’on ne souhaite **ABSOLUMENT PAS**.  
>
> Une fois la branche `hotfix` mergée sur `master`, il faut **aussi la merger sur `develop`**, sinon la modification sera perdue lors de la prochaine release.

---

## 🌿 Nomenclature des Branches

La nomenclature est la suivante :  
```
TYPEDEBRANCHE/IDTICKET-DESCRIPTION_DU_TICKET
```

### Exemple :
```
feature/251-ajout_du_mockup
```
---

## 💬 Nomenclature des Commits

La nomenclature est la suivante :  
```
TYPEDECOMMIT(SCOPE): DESCRIPTION
```

- **TYPEDECOMMIT** : `feat`, `docs`, `refactor`, `perf`, etc.  
- **(SCOPE)** : contexte optionnel entre parenthèses  
- **DESCRIPTION** : brève explication du changement  

### Exemples :
```
feat: add italian as new language
refactor(user): add comments on all users’ functions
docs: correct spelling of CHANGELOG
```
