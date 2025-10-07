// src/pages/recruiter/RecruiterDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Récupérer les jobs
      const jobsResponse = await fetch('http://localhost:5000/api/jobs');
      const jobsData = await jobsResponse.json();
      
      // Récupérer toutes les applications
      const appsResponse = await fetch('http://localhost:5000/api/applications');
      const appsData = await appsResponse.json();

      if (jobsResponse.ok && appsResponse.ok) {
        setJobs(jobsData);
        setApplications(appsData.applications || []);
      }
    } catch (err) {
      toast.error('Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  const getStats = () => {
    const totalJobs = jobs.length;
    const totalApplications = applications.length;
    const pendingApplications = applications.filter(app => app.status === 'pending').length;
    const acceptedApplications = applications.filter(app => app.status === 'accepted').length;

    return { totalJobs, totalApplications, pendingApplications, acceptedApplications };
  };

  const stats = getStats();

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord Recruteur</h1>
          <button
            onClick={() => navigate('/recruiter/create-job')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            + Publier une annonce
          </button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="text-blue-600 text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Offres publiées</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalJobs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <span className="text-green-600 text-2xl">📨</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Candidatures totales</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <span className="text-yellow-600 text-2xl">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">En attente</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingApplications}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <span className="text-purple-600 text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Acceptées</p>
                <p className="text-2xl font-bold text-gray-900">{stats.acceptedApplications}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dernières offres */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Mes offres récentes</h2>
            </div>
            <div className="p-6">
              {jobs.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Aucune offre publiée</p>
              ) : (
                <div className="space-y-4">
                  {jobs.slice(0, 5).map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
                        </div>
                        <button
                          onClick={() => navigate(`/recruiter/jobs/${job.id}/applications`)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Voir candidatures
                        </button>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span>Publié le {new Date(job.createdAt).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {jobs.length > 5 && (
                <button
                  onClick={() => navigate('/recruiter/jobs')}
                  className="w-full mt-4 text-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Voir toutes les offres ({jobs.length})
                </button>
              )}
            </div>
          </div>

          {/* Dernières candidatures */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Dernières candidatures</h2>
            </div>
            <div className="p-6">
              {applications.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Aucune candidature reçue</p>
              ) : (
                <div className="space-y-4">
                  {applications.slice(0, 5).map((app) => (
                    <div key={app.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{app.firstName} {app.lastName}</h3>
                          <p className="text-sm text-gray-600">{app.jobTitle}</p>
                          <p className="text-xs text-gray-500">{app.email}</p>
                        </div>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {app.status === 'accepted' ? 'Accepté' :
                           app.status === 'rejected' ? 'Rejeté' :
                           app.status === 'reviewed' ? 'Examiné' : 'En attente'}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Postulé le {new Date(app.submittedAt).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {applications.length > 5 && (
                <button
                  onClick={() => navigate('/recruiter/applications')}
                  className="w-full mt-4 text-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Voir toutes les candidatures ({applications.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;