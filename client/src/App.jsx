// // src/App.jsx
// import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Composants depuis le dossier components
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import JobListing from './components/JobListing';

// // Pages depuis le dossier pages
// import ApplyForm from './pages/ApplyForm';
// import CreateJob from './pages/recruiter/CreateJob';
// import ApplicationsList from './pages/recruiter/ApplicationsList';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <Routes>
//         {/* Route principale - Page d'accueil */}
//         <Route path="/" element={
//           <>
//             <Hero />
//             <JobListing />
//           </>
//         } />
        
//         {/* Route pour postuler à une offre */}
//         <Route path="/jobs/:jobId/apply" element={<ApplyForm />} />
        
//         {/* Route pour créer une annonce (recruteur) */}
//         <Route path="/recruiter/create-job" element={<CreateJob />} />
        
//         {/* Route pour voir les CV reçus (recruteur) */}
//         <Route path="/recruiter/jobs/:jobId/applications" element={<ApplicationsList />} />
//       </Routes>

//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Composants
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobListing from './components/JobListing';
// Pages
import ApplyForm from './pages/ApplyForm';
import CreateJob from './pages/recruiter/CreateJob';
import ApplicationsList from './pages/recruiter/ApplicationsList';
import Applications from './pages/Applications'; // ⬅️ Ajoutez cette importation

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <Routes>
        {/* Route principale */}
        <Route path="/" element={
          <>
            <Hero />
            <JobListing />
          </>
        } />
        
        {/* Route pour les candidatures de l'utilisateur */}
        <Route path="/Applications" element={<Applications />} />
        
        {/* Autres routes */}
        <Route path="/jobs/:jobId/apply" element={<ApplyForm />} />
        <Route path="/recruiter/create-job" element={<CreateJob />} />
        <Route path="/recruiter/jobs/:jobId/applications" element={<ApplicationsList />} />
        <Route path="/Applications" element={<Applications />} />

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;