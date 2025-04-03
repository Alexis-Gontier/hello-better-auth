# Better Auth Explorer

Better Auth Explorer est une application web construite avec Next.js et Prisma, utilisant SQLite, qui démontre un flux d'authentification sécurisé avec better-auth. Ce projet sert d'outil de découverte pour explorer les techniques modernes d'authentification et les bonnes pratiques de développement web.

## Aperçu du Projet
Better Auth Explorer permet aux utilisateurs de :
- S'inscrire et se connecter de manière sécurisée grâce à better-auth.
- Explorer différents flux d'authentification et la gestion des sessions.
- Interagir avec une interface utilisateur moderne et responsive, conçue avec les composants ShadCN UI.

## Fonctionnalités
- **Authentification Sécurisée :** Inscription et connexion via better-auth avec gestion des sessions.
- **Intégration Base de Données :** Utilisation de Prisma ORM avec une base de données SQLite.
- **Interface Moderne :** Design réactif et élégant grâce aux composants ShadCN UI.
- **Avantages de Next.js :** Rendu côté serveur et routage dynamique pour une meilleure performance.

## Stack Technique
- **Framework :** Next.js
- **UI :** Composants ShadCN UI
- **Base de Données :** SQLite via Prisma ORM
- **Authentification :** better-auth pour la gestion sécurisée des utilisateurs
- **API :** Routes API de Next.js

## Installation et Configuration
### Prérequis
- Node.js (v18 ou supérieur)
- npm

```bash
git clone https://github.com/Alexis-Gontier/hello-better-auth
cd hello-better-auth
```

### Configuration des Variables d'Environnement
Créez un fichier `.env` à la racine du projet et ajoutez-y :
```env
DATABASE_URL="file:./dev.db"

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
```

### Installation des Dépendances
```bash
npm install
```

### Lancer le Serveur de Développement
```bash
npm run dev
```
Accédez à l'application via `http://localhost:3000`