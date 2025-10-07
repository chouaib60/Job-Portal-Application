# Job Portal - Plateforme de Recrutement
Description
Job Portal est une application web complète de recrutement qui permet aux candidats de trouver des offres d'emploi et aux recruteurs de gérer leurs annonces et candidatures.

Fonctionnalités
Pour les Candidats
Consultation des offres d'emploi

Recherche et filtrage des offres par titre, localisation, catégorie

Postulation en ligne avec téléchargement de CV

Suivi des candidatures envoyées

Interface responsive et intuitive

Pour les Recruteurs
Publication d'annonces détaillées

Gestion des candidatures reçues

Téléchargement des CV des candidats

Tableau de bord avec statistiques

Modification du statut des candidatures

Technologies Utilisées
Frontend
React 18 avec Vite

Tailwind CSS pour le styling

React Router pour la navigation

Clerk pour l'authentification

React Toastify pour les notifications

Backend
Node.js avec Express

Multer pour l'upload de fichiers

CORS pour les requêtes cross-origin

Stockage local des fichiers (CV)

Installation
Prérequis
Node.js (version 16 ou supérieure)

npm ou yarn

Installation du Backend
bash
cd backend
npm install
npm start
Le backend sera accessible sur http://localhost:5000

Installation du Frontend
bash
cd client
npm install
npm run dev
Le frontend sera accessible sur http://localhost:5173

Configuration
Variables d'Environnement
Créez un fichier .env dans le dossier client :

text
VITE_CLERK_PUBLISHABLE_KEY=votre_cle_publique_clerk
Configuration Clerk
Créez un compte sur Clerk

Récupérez votre clé publique

Ajoutez-la dans le fichier .env

Structure du Projet
text
job-portal/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── uploads/
│       └── cv/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── JobListing.jsx
│   │   │   └── JobCard.jsx
│   │   ├── pages/
│   │   │   ├── ApplyForm.jsx
│   │   │   ├── UserApplications.jsx
│   │   │   └── recruiter/
│   │   │       ├── CreateJob.jsx
│   │   │       ├── ApplicationsList.jsx
│   │   │       └── RecruiterDashboard.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── assets/
│   │   │   └── assets.js
│   │   └── App.jsx
│   └── package.json
API Endpoints
Offres d'Emploi
GET /api/jobs - Liste toutes les offres

GET /api/jobs/:id - Détails d'une offre

POST /api/jobs - Créer une nouvelle offre (recruteur)

Candidatures
POST /api/jobs/:jobId/apply - Postuler à une offre

GET /api/jobs/:jobId/applications - Candidatures pour une offre

GET /api/applications - Toutes les candidatures

PATCH /api/applications/:id/status - Modifier le statut

GET /api/applications/:id/cv - Télécharger un CV

Utilisation
Pour les Candidats
Inscrivez-vous ou connectez-vous

Parcourez les offres d'emploi

Utilisez les filtres pour affiner votre recherche

Cliquez sur "Apply Now" pour postuler

Remplissez le formulaire et uploadez votre CV

Consultez "Mes Candidatures" pour suivre vos postulations

Pour les Recruteurs
Connectez-vous à votre compte

Accédez à "Espace Recruteur"

Publiez de nouvelles annonces via "Publier une annonce"

Consultez les candidatures reçues

Téléchargez les CV et modifiez les statuts

Utilisez le tableau de bord pour les statistiques

Fonctionnalités Avancées
Recherche et Filtrage
Recherche par mots-clés dans le titre

Filtrage par localisation

Filtrage par catégorie d'emploi

Filtrage par type de contrat

Gestion des Fichiers
Upload de CV (PDF, DOC, DOCX)

Taille maximale : 5MB

Stockage sécurisé des fichiers

Téléchargement direct des CV

Sécurité
Authentification via Clerk

Validation des fichiers uploadés

Protection CORS

Validation des données côté serveur

Développement
Ajout de Nouvelles Fonctionnalités
Créez le composant dans le dossier approprié

Ajoutez la route dans App.jsx si nécessaire

Mettez à jour l'API si besoin

Testez les fonctionnalités

Personnalisation
Modifiez les couleurs dans Tailwind CSS

Ajoutez de nouvelles catégories dans assets.js

Personnalisez les modèles d'email

Adaptez les formulaires à vos besoins
