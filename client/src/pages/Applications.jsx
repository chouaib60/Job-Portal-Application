// src/pages/Applications.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import company_icon from '../assets/company_icon.svg';

const Applications = () => {
  const { applications } = useContext(AppContext);
  const navigate = useNavigate();

  console.log('📋 Applications:', applications); // Pour debug

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Retour aux offres
        </button>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes candidatures</h1>
          <p className="text-gray-600 mb-8">
            {applications.length === 0 
              ? "Vous n'avez pas encore postulé à des offres." 
              : `Vous avez postulé à ${applications.length} offre(s)`}
          </p>

          {applications.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <p className="text-gray-500 text-lg mb-4">Aucune candidature pour le moment</p>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Voir les offres d'emploi
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {applications.map((application) => (
                <div 
                  key={application.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={company_icon} 
                        alt="Company" 
                        className="h-12 w-12 rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {application.jobTitle}
                        </h3>
                        <p className="text-gray-600">{application.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>Poste #{application.jobId}</span>
                          <span>•</span>
                          <span>Postulé le {application.appliedDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        application.status === 'En attente' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : application.status === 'Accepté'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {application.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Candidat:</span>
                        <p className="text-gray-600">{application.firstName} {application.lastName}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Email:</span>
                        <p className="text-gray-600">{application.email}</p>
                      </div>
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

export default Applications;