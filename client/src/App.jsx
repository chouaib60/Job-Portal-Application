// src/pages/App.jsx
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Vos composants existants
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';

// Nouveaux composants pour le système CV
import ApplyForm from './ApplyForm';
import CreateJob from './recruiter/CreateJob';
import ApplicationsList from './recruiter/ApplicationsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <Routes>
        {/* Route principale - Page d'accueil */}
        <Route path="/" element={
          <>
            <Hero />
            <JobListing />
          </>
        } />
        
        {/* Route pour postuler à une offre */}
        <Route path="/jobs/:jobId/apply" element={<ApplyForm />} />
        
        {/* Route pour créer une annonce (recruteur) */}
        <Route path="/recruiter/create-job" element={<CreateJob />} />
        
        {/* Route pour voir les CV reçus (recruteur) */}
        <Route path="/recruiter/jobs/:jobId/applications" element={<ApplicationsList />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;