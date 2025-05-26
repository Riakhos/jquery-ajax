# Introduction et Installation de Node.js sur Visual Studio Code

## Qu'est-ce que Node.js ?

Node.js est une plateforme d'exécution JavaScript construite sur le moteur JavaScript V8 de Chrome. Il permet d'exécuter du code JavaScript côté serveur, ce qui le rend idéal pour construire des applications web rapides et évolutives.

Node.js est particulièrement utilisé pour le développement backend, mais il peut également être utilisé pour des scripts d'automatisation, des outils en ligne de commande, et des applications temps réel.

## Installation de Node.js

### Étape 1 : Télécharger Node.js

1. Rendez-vous sur le site officiel de Node.js : [https://nodejs.org/](https://nodejs.org/).
2. Téléchargez la version recommandée pour la plupart des utilisateurs (LTS) ou la version actuelle si vous avez besoin des dernières fonctionnalités.

### Étape 2 : Installer Node.js

1. Une fois le fichier téléchargé, ouvrez-le et suivez les instructions d'installation.
2. Après l'installation, vérifiez si Node.js et npm (le gestionnaire de paquets de Node) sont installés correctement en ouvrant un terminal et en exécutant les commandes suivantes :

```bash
node -v
npm -v
```

Cela devrait afficher les versions de Node.js et npm installées.

## Installation de Visual Studio Code

1. Téléchargez Visual Studio Code (VS Code) depuis [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. Installez VS Code en suivant les instructions pour votre système d'exploitation.

## Configuration de Node.js dans Visual Studio Code

### Étape 1 : Ouvrir un projet Node.js dans VS Code

1. Lancez VS Code.
2. Ouvrez un dossier contenant votre projet Node.js ou créez-en un nouveau.

### Étape 2 : Configurer le Terminal pour Node.js

1. Dans VS Code, ouvrez le terminal intégré en allant dans **Terminal > Nouveau Terminal**.
2. Assurez-vous que le terminal pointe vers le bon dossier de projet où Node.js est initialisé.

### Étape 3 : Exécuter du Code Node.js dans VS

1. Créez un fichier JavaScript (ex. `app.js`) dans votre dossier de projet.
2. Ajoutez le code suivant comme exemple :

    ```javascript
    console.log("Bonjour, Node.js est bien configuré dans VS Code !");
    ```

3. Exécutez le fichier en tapant la commande suivante dans le terminal :

    ```bash
    node app.js
    ```

   Vous devriez voir le message "Bonjour, Node.js est bien configuré dans VS Code !" s'afficher dans le terminal.

### Étape 4 : Utiliser des Extensions VS Code pour Node

- Il existe plusieurs extensions pour améliorer votre expérience Node.js dans VS Code, comme **ESLint** pour le linting JavaScript, et **Debugger for Node.js** pour le débogage.
- Pour installer une extension, allez dans la barre latérale Extensions (ou appuyez sur `Ctrl+Shift+X`), recherchez l'extension souhaitée et cliquez sur **Installer**.

## Conclusion

Vous avez maintenant installé et configuré Node.js avec Visual Studio Code. Vous pouvez commencer à développer et exécuter des applications Node.js directement dans votre éditeur.
