# Guide de Connexion et d'Utilisation de Git/GitHub

Ce document retrace les étapes complètes pour initialiser un projet local, le lier à GitHub, et envoyer (push) ses modifications. Il est particulièrement utile pour se reconnecter à Git après un téléchargement ou une perte du dossier caché `.git`.

## 1. Initialiser Git (Si le projet n'est pas encore suivi)
Si vous avez téléchargé le projet en `.zip` ou que Git ne reconnaît pas le projet, placez-vous à la racine globale du projet et tapez :
```bash
git init
```
*(Cela crée un dossier caché `.git` qui va suivre l'historique de vos fichiers).*

## 2. Lier le projet local à GitHub
Pour que votre ordinateur sache où envoyer les fichiers sur Internet, connectez le dépôt distant (remote) :
```bash
git remote add origin https://github.com/spirit0621/Memoire.git
```

## 3. Se placer sur la bonne branche de travail
Par exemple, pour basculer sur la branche `chore/#24Sous-Tache` (les guillemets sont importants à cause du caractère `#`) :
```bash
git checkout "chore/#24Sous-Tache"
```
*(Si la branche n'existe pas encore localement et que vous voulez la créer, ajoutez `-b` : `git checkout -b "chore/#24Sous-Tache"`).*

## 4. Sauvegarder vos modifications locales (Commit)
Avant d'envoyer quoi que ce soit, il faut valider l'état de vos fichiers locaux :
```bash
git add .
git commit -m "Description claire de ce qui a été modifié"
```

## 5. Gérer l'Authentification (Le Token)
GitHub n'accepte plus les mots de passe de compte classiques dans les terminaux.
Si le terminal vous demande un mot de passe, vous devez fournir un **Personal Access Token (PAT)** :
1. Sur GitHub : *Settings > Developer settings > Personal access tokens > Tokens (classic)*
2. *Generate new token*, cochez impérativement la case **repo**.
3. Copiez le code généré (qui commence souvent par `ghp_...`) et collez-le dans le terminal (clic droit) quand le mot de passe est demandé.

> **Astuce :** Utiliser l'interface de VS Code (l'onglet *Contrôle de code source* à gauche, puis bouton bleu *Publier / Synchroniser*) permet d'éviter le terminal. VS Code ouvrira simplement une page web pour vous connecter automatiquement !

## 6. Envoyer le code sur Internet (Push)
Une fois le *commit* fait, envoyez le tout sur GitHub :
```bash
git push -u origin "chore/#24Sous-Tache"
```

---

### Cas particuliers & Résolution de problèmes fréquents

#### A. Erreur "Updates were rejected (non-fast-forward)"
Cela signifie que GitHub possède des modifications que vous n'avez pas localement.
* **Option A (Fusionner GitHub avec vos fichiers locaux)** : 
  `git pull origin "chore/#24Sous-Tache" --allow-unrelated-histories`
* **Option B (Écraser la version GitHub par votre version locale)** : 
  `git push -f origin "chore/#24Sous-Tache"`

#### B. Erreur "Need to specify how to reconcile divergent branches"
Git ne sait pas comment mélanger l'historique Internet et l'historique local. Définissez la méthode de fusion par défaut ("merge"), puis relancez votre *pull* :
```bash
git config pull.rebase false
```

#### C. Récupérer la version exacte de GitHub (et écraser le travail local)
Si vous voulez annuler toutes vos modifications locales et cloner l'état exact de GitHub :
```bash
git fetch origin
git reset --hard origin/"chore/#24Sous-Tache"
```

#### D. Erreur "Could not open a connection to your authentication agent."
Cette erreur survient si vous utilisez une clé SSH et que l'agent SSH n'est pas en cours d'exécution.
* **Étape 1 : Démarrer l'agent SSH**
  ```bash
  eval "$(ssh-agent -s)"
  ```
  *(Vous devriez voir une réponse comme `Agent pid 2118`)*
* **Étape 2 : Trouver le nom de votre clé privée** (celle sans l'extension `.pub`)
  ```bash
  ls -al ~/.ssh
  ```
* **Étape 3 : Ajouter votre clé à l'agent** (remplacez `id_rsa` par le nom exact de votre clé)
  ```bash
  ssh-add ~/.ssh/id_rsa
  ```
  *(Vous devriez voir le message `Identity added: ...`)*
