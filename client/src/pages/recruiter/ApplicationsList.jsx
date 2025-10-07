// import React from 'react';

// const ApplicationsList = () => {
//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-2xl font-bold mb-6">Candidatures reçues</h1>
//       <div className="space-y-4">
//         <div className="border p-4 rounded">
//           <h3 className="font-semibold">Jean Dupont</h3>
//           <p className="text-gray-600">jean.dupont@email.com</p>
//           <p className="text-sm text-gray-500">Postulé le 06/10/2025</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationsList; // ⬅️ Ajoutez "default" ici

// src/pages/recruiter/ApplicationsList.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ApplicationsList = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, [jobId]);

  const fetchApplications = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/jobs/${jobId}/applications`);
      const data = await response.json();
      
      if (response.ok) {
        setApplications(data.applications);
        setJob(data.job);
      } else {
        toast.error(data.message || 'Erreur lors du chargement');
      }
    } catch (err) {
      toast.error('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (applicationId, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/applications/${applicationId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Statut mis à jour');
        fetchApplications(); // Recharger les données
      } else {
        toast.error(result.message || 'Erreur lors de la mise à jour');
      }
    } catch (err) {
      toast.error('Erreur réseau');
    }
  };

  const downloadCV = async (applicationId, filename) => {
    try {
      const response = await fetch(`http://localhost:5000/api/applications/${applicationId}/cv`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        toast.error('Erreur lors du téléchargement');
      }
    } catch (err) {
      toast.error('Erreur réseau');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'accepted': return 'Accepté';
      case 'rejected': return 'Rejeté';
      case 'reviewed': return 'Examiné';
      default: return 'En attente';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/recruiter/dashboard')}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Retour au tableau de bord
        </button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidatures reçues</h1>
              <p className="text-gray-600">
                Pour l'offre: <span className="font-semibold">{job}</span>
              </p>
              <p className="text-gray-500 mt-2">
                {applications.length} candidature(s) reçue(s)
              </p>
            </div>
          </div>

          {applications.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📭</div>
              <p className="text-gray-500 text-lg mb-4">Aucune candidature pour cette offre</p>
            </div>
          ) : (
            <div className="space-y-6">
              {applications.map((application) => (
                <div key={application.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {application.firstName} {application.lastName}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                          {getStatusText(application.status)}
                        </span>
                      </div>
                      
                      <div className="mt-2 space-y-1">
                        <p className="text-gray-600">
                          <span className="font-medium">Email:</span> {application.email}
                        </p>
                        {application.phone && (
                          <p className="text-gray-600">
                            <span className="font-medium">Téléphone:</span> {application.phone}
                          </p>
                        )}
                        <p className="text-gray-600">
                          <span className="font-medium">Postulé le:</span> {new Date(application.submittedAt).toLocaleDateString('fr-FR')}
                        </p>
                      </div>

                      {application.coverLetter && (
                        <div className="mt-4">
                          <p className="font-medium text-gray-700 mb-2">Lettre de motivation:</p>
                          <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded">
                            {application.coverLetter}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex gap-3">
                      <button
                        onClick={() => downloadCV(application.id, application.cvFilename)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                      >
                        📄 Télécharger CV
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <select
                        value={application.status}
                        onChange={(e) => updateApplicationStatus(application.id, e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="pending">En attente</option>
                        <option value="reviewed">Examiné</option>
                        <option value="accepted">Accepté</option>
                        <option value="rejected">Rejeté</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsList;