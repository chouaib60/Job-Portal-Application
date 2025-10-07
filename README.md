# 🌐 Job Portal - Plateforme de Recrutement

**Job Portal** est une application web complète de recrutement qui permet :  
- aux **candidats** de trouver et postuler à des offres d’emploi,  
- aux **recruteurs** de publier et gérer leurs annonces ainsi que les candidatures reçues.  

---

## 🚀 Fonctionnalités

### 👨‍💼 Pour les Candidats
- Consultation des offres d'emploi  
- Recherche et filtrage (titre, localisation, catégorie, type de contrat)  
- Postulation en ligne avec téléchargement de CV  
- Suivi des candidatures envoyées  
- Interface responsive et intuitive  

### 🏢 Pour les Recruteurs
- Publication d'annonces détaillées  
- Gestion des candidatures reçues  
- Téléchargement des CV des candidats  
- Tableau de bord avec statistiques  
- Modification du statut des candidatures  

---

## 🛠️ Technologies Utilisées

### Frontend
- [React 18](https://react.dev/) avec [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/) pour le design  
- [React Router](https://reactrouter.com/) pour la navigation  
- [Clerk](https://clerk.com/) pour l’authentification  
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) pour les notifications  

### Backend
- [Node.js](https://nodejs.org/) avec [Express](https://expressjs.com/)  
- [Multer](https://github.com/expressjs/multer) pour l’upload de fichiers  
- [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) pour les requêtes cross-origin  
- Stockage local des fichiers (CV)  

---

## ⚙️ Installation

### 📌 Prérequis
- [Node.js](https://nodejs.org/) (version **16 ou supérieure**)  
- npm ou yarn  

### 🔧 Installation du Backend
### 🔧 Installation du Backend

cd backend
npm install
npm start

🔑 Configuration
Variables d’Environnement

Créer un fichier .env dans le dossier client :

VITE_CLERK_PUBLISHABLE_KEY=votre_cle_publique_clerk

Configuration Clerk

Créez un compte sur Clerk

Récupérez votre clé publique

Ajoutez-la dans le fichier .env

# 📂 Structure du Projet

<img width="303" height="952" alt="image" src="https://github.com/user-attachments/assets/fee798fc-bb2f-455a-99f1-12d1ac1bf31c" />


## 📡 API Endpoints

### Offres d’Emploi
- `GET /api/jobs` → Liste toutes les offres  
- `GET /api/jobs/:id` → Détails d'une offre  
- `POST /api/jobs` → Créer une nouvelle offre (recruteur)  

### Candidatures
- `POST /api/jobs/:jobId/apply` → Postuler à une offre  
- `GET /api/jobs/:jobId/applications` → Candidatures pour une offre  
- `GET /api/applications` → Toutes les candidatures  
- `PATCH /api/applications/:id/status` → Modifier le statut d'une candidature  
- `GET /api/applications/:id/cv` → Télécharger un CV  

---

## 👨‍🎓 Utilisation

### Pour les Candidats
1. Inscrivez-vous ou connectez-vous  
2. Parcourez les offres d'emploi  
3. Utilisez les filtres pour affiner votre recherche  
4. Cliquez sur **"Apply Now"** pour postuler  
5. Remplissez le formulaire et uploadez votre CV  
6. Consultez **"Mes Candidatures"** pour suivre vos postulations  

### Pour les Recruteurs
1. Connectez-vous à votre compte  
2. Accédez à **Espace Recruteur**  
3. Publiez de nouvelles annonces via **"Publier une annonce"**  
4. Consultez les candidatures reçues  
5. Téléchargez les CV et modifiez les statuts  
6. Utilisez le tableau de bord pour consulter les statistiques  

---

## 🔍 Fonctionnalités Avancées
- Recherche par mots-clés dans le titre  
- Filtrage par localisation, catégorie d’emploi et type de contrat  
- Upload sécurisé de CV (PDF, DOC, DOCX — max 5MB)  
- Téléchargement direct des CV  

---

## 🔒 Sécurité
- Authentification via **Clerk**  
- Validation des fichiers uploadés  
- Protection **CORS**  
- Validation des données côté serveur  

---

## 🛠️ Développement

### Ajout de Nouvelles Fonctionnalités
1. Créez le composant dans le dossier approprié  
2. Ajoutez la route dans `App.jsx` si nécessaire  
3. Mettez à jour l'API si besoin  
4. Testez les fonctionnalités  

### Personnalisation
- Modifier les couleurs via **Tailwind CSS**  
- Ajouter de nouvelles catégories dans `assets.js`  
- Personnaliser les modèles d'email  
- Adapter les formulaires selon vos besoins  


