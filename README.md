# Civalgo
Projet full stack pour l’entrevue chez Civalgo

## Comment exécuter le projet
- Créez un fichier `.env` à la racine du projet et dans le dossier `backend` avec les variables nécessaires pour la BD et le serveur.
- `docker-compose up -d` au root folder.
- `npm install` dans les dossiers `frontend` et `backend`.
- Lancez le backend avec `npm run dev`.
- Lancez le frontend avec `npm run dev`.

## Choix technologiques
- **Backend** : Node.js avec Express et TypeScript. J’ai utilisé Sequelize pour la connexion à la base de données PostgreSQL, et le package `ws` pour la gestion des WebSockets afin d’avoir les données des travailleurs sur le site en temps réel.
- **Frontend** : Initialisé avec `npx create-next-app@latest` pour une application Next.js avec React et TypeScript. J’utilise Material UI pour les composantes UI déja fait.
- **Base de données** : PostgreSQL, lancée localement via Docker.

## Fonctionnalités non terminées / Limitations
- **Authentification** : Elle est très simple pour le moment. Je vérifie seulement que quelque chose est envoyé dans les headers pour les opérations de check-out et de récupération des données. Pour les on site workers, je vérifie si le token est égal à `"supervisor"`. En production, il faudrait valider un vrai token JWT et ensuite vérifier le rôle de l’utilisateur.
- **UI** : L'affichage des données est très simple, en format JSON. Je n’ai pas eu le temps de faire des beaux tableaux. J’aurais utilisé un composant de tableau plus structuré avec un affichage clair de chaque donnée.
- **Relation entre les tables** : Lors du `check-in`, un nouvel utilisateur est créé, mais je ne récupère que le `user id`. J’aurais aimé créer une vraie association Sequelize entre `User` et les autres tables pour ensuite afficher le nom et le rôle de l’utilisateur directement dans l’interface.
- **Accès aux données** : Lors du check in, je crée des workers, donc théoriquement il ne pourrait pas voir la table des on site workers, mais je voulais m'assurer de montrer l'info pareille.
- **Messages d'erreur** : Je n'ai pas eu le temps de mettre des messages d'erreurs partout, ou des checks complèts au cas ou qu'un call ne fonctionne pas, etc. Il faudrait display un message d'erreur avec un snackbar.

En général, il y a plusieurs fonctionnalités que je n'ai pas pu terminer par manque de temps, mais j’ai priorisé les plus importantes à mes yeux pour cette démo.

## Fonctionnalités futures possibles
- Section de statistiques, par exemple: nombre de check-in par jour/semaine.
- Ajouter des filtres dans les tableaux: Clsser par rôle (`worker` ou `supervisor`), par date, heure, etc.
- Rendre le UI plus beau.
