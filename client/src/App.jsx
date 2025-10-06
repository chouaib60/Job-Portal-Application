// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import JobList from './pages/JobList';
import ApplyForm from './pages/ApplyForm';
import CreateJob from './pages/recruiter/CreateJob';
import ApplicationsList from './pages/recruiter/ApplicationsList';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-blue-600">
              Plateforme de Recrutement
            </h1>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs/:jobId/apply" element={<ApplyForm />} />
          <Route path="/recruiter/create-job" element={<CreateJob />} />
          <Route path="/recruiter/jobs/:jobId/applications" element={<ApplicationsList />} />
        </Routes>

        {/* Toast Notifications */}
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
    </BrowserRouter>
  );
}

export default App;