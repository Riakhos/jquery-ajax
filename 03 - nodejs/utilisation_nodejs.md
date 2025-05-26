# Utilisation de base de Node.js

Node.js est un environnement d'exécution JavaScript côté serveur qui permet d'exécuter JavaScript en dehors du navigateur.
Voici les étapes de base pour démarrer avec Node.js.

## 1. Vérifier l'installation de Node.js

Assurez-vous que Node.js est installé en exécutant les commandes suivantes dans le terminal :

```bash
node -v
npm -v
```

Vous devriez voir les versions installées de Node.js et npm.

## 2. Créer et Exécuter un Script JavaScript

1. Créez un fichier `app.js` avec le contenu suivant :

    ```javascript
    console.log("Bonjour, Node.js !");
    ```

2. Exécutez ce script dans le terminal :

    ```bash
    node app.js
    ```

Vous devriez voir "Bonjour, Node.js !" s'afficher dans le terminal.

## 3. Utiliser npm pour Installer des Packages

npm (Node Package Manager) permet d'ajouter des fonctionnalités à votre projet via des packages.

### 1. Initialisez un projet Node.js (ceci crée un fichier `package.json`)

```bash
npm init -y
```

### 2. Installez un package, par exemple **lodash**

```bash
npm install lodash
```

### 3. Utilisez le package installé dans votre fichier `app.js`

```javascript
const _ = require('lodash');

const tableau = [1, 2, 3, 4];
console.log("Dernier élément :", _.last(tableau));
```

### 4. Exécutez à nouveau le script

```bash
node app.js
```

## 4. Création d'un Serveur Simple avec le Module HTTP

Node.js permet de créer facilement un serveur HTTP sans librairies supplémentaires.

### 1. Créez un fichier `server.js` avec le code suivant

```javascript
    const http = require('http');

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Bienvenue sur notre serveur Node.js !');
    });

    server.listen(3000, () => {
        console.log('Serveur en écoute sur le port 3000');
    });
```

### 2. Démarrez le serveur

```bash
node server.js
```

### 3. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir le message du serveur

## 5. Utiliser les Modules Internes de Node.js

Node.js inclut plusieurs modules intégrés, comme `fs` pour manipuler les fichiers.

Exemple pour écrire dans un fichier :

```javascript
const fs = require('fs');

fs.writeFile('exemple.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('Le fichier a été créé !');
});
```

## Conclusion

Ce guide couvre les bases pour commencer avec Node.js : vérifier l'installation, exécuter un script, utiliser npm pour installer des packages, et créer un serveur basique. Avec Node.js, vous pouvez développer des applications côté serveur puissantes et flexibles.
