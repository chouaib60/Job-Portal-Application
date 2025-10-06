// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configuration de stockage pour multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads/cv';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Seuls les fichiers PDF, DOC et DOCX sont acceptés'));
    }
  }
});

// Base de données simulée (remplacer par MongoDB/PostgreSQL en production)
let jobs = [
  { id: 1, title: 'Développeur Full Stack', company: 'TechCorp', location: 'Paris', createdAt: new Date() },
  { id: 2, title: 'Designer UI/UX', company: 'DesignStudio', location: 'Lyon', createdAt: new Date() }
];

let applications = [];
let applicationIdCounter = 1;

// ============= ROUTES POUR LES POSTES =============

// Récupérer tous les postes
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

// Récupérer un poste spécifique
app.get('/api/jobs/:id', (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.id));
  if (!job) {
    return res.status(404).json({ message: 'Poste non trouvé' });
  }
  res.json(job);
});

// Créer un nouveau poste (pour recruteur)
app.post('/api/jobs', (req, res) => {
  const { title, company, location, description } = req.body;
  
  if (!title || !company || !location) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }
  
  const newJob = {
    id: jobs.length + 1,
    title,
    company,
    location,
    description,
    createdAt: new Date()
  };
  
  jobs.push(newJob);
  res.status(201).json(newJob);
});

// ============= ROUTES POUR LES CANDIDATURES =============

// Soumettre une candidature avec CV
app.post('/api/jobs/:jobId/apply', upload.single('cv'), (req, res) => {
  try {
    const jobId = parseInt(req.params.jobId);
    const job = jobs.find(j => j.id === jobId);
    
    if (!job) {
      return res.status(404).json({ message: 'Poste non trouvé' });
    }
    
    if (!req.file) {
      return res.status(400).json({ message: 'CV requis' });
    }
    
    const { firstName, lastName, email, phone, coverLetter } = req.body;
    
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: 'Nom, prénom et email sont requis' });
    }
    
    const application = {
      id: applicationIdCounter++,
      jobId,
      jobTitle: job.title,
      firstName,
      lastName,
      email,
      phone,
      coverLetter,
      cvPath: req.file.path,
      cvFilename: req.file.originalname,
      status: 'pending', // pending, reviewed, accepted, rejected
      submittedAt: new Date()
    };
    
    applications.push(application);
    
    res.status(201).json({
      message: 'Candidature soumise avec succès',
      application: {
        id: application.id,
        jobTitle: application.jobTitle,
        submittedAt: application.submittedAt
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la soumission', error: error.message });
  }
});

// Récupérer toutes les candidatures pour un poste (pour recruteur)
app.get('/api/jobs/:jobId/applications', (req, res) => {
  const jobId = parseInt(req.params.jobId);
  const job = jobs.find(j => j.id === jobId);
  
  if (!job) {
    return res.status(404).json({ message: 'Poste non trouvé' });
  }
  
  const jobApplications = applications.filter(app => app.jobId === jobId);
  
  res.json({
    job: job.title,
    count: jobApplications.length,
    applications: jobApplications.map(app => ({
      id: app.id,
      firstName: app.firstName,
      lastName: app.lastName,
      email: app.email,
      phone: app.phone,
      status: app.status,
      submittedAt: app.submittedAt,
      cvFilename: app.cvFilename
    }))
  });
});

// Télécharger un CV spécifique (pour recruteur)
app.get('/api/applications/:applicationId/cv', (req, res) => {
  const applicationId = parseInt(req.params.applicationId);
  const application = applications.find(app => app.id === applicationId);
  
  if (!application) {
    return res.status(404).json({ message: 'Candidature non trouvée' });
  }
  
  const filePath = path.resolve(application.cvPath);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Fichier CV non trouvé' });
  }
  
  res.download(filePath, application.cvFilename);
});

// Mettre à jour le statut d'une candidature (pour recruteur)
app.patch('/api/applications/:applicationId/status', (req, res) => {
  const applicationId = parseInt(req.params.applicationId);
  const { status } = req.body;
  
  const validStatuses = ['pending', 'reviewed', 'accepted', 'rejected'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: 'Statut invalide' });
  }
  
  const application = applications.find(app => app.id === applicationId);
  
  if (!application) {
    return res.status(404).json({ message: 'Candidature non trouvée' });
  }
  
  application.status = status;
  application.updatedAt = new Date();
  
  res.json({
    message: 'Statut mis à jour',
    application: {
      id: application.id,
      status: application.status,
      updatedAt: application.updatedAt
    }
  });
});

// Récupérer toutes les candidatures (tableau de bord recruteur)
app.get('/api/applications', (req, res) => {
  const { status, jobId } = req.query;
  
  let filteredApplications = [...applications];
  
  if (status) {
    filteredApplications = filteredApplications.filter(app => app.status === status);
  }
  
  if (jobId) {
    filteredApplications = filteredApplications.filter(app => app.jobId === parseInt(jobId));
  }
  
  res.json({
    count: filteredApplications.length,
    applications: filteredApplications
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📁 Upload directory: ${path.resolve('./uploads/cv')}`);
});

// Gestion des erreurs
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'Fichier trop volumineux (max 5MB)' });
    }
  }
  res.status(500).json({ message: error.message });
});