// src/components/JobCard.jsx
import { useNavigate } from 'react-router-dom';
import company_icon from '../assets/company_icon.svg';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className='border p-6 shadow rounded'>
      <div className='flex justify-between items-center'>
        <img className='h-8' src={company_icon} alt="" />
      </div>
      
      <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
      
      <div className='flex items-center gap-3 mt-2'>
        <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
          {job.location}
        </span>
        {job.level && (
          <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
            {job.level}
          </span>
        )}
      </div>
      
      <p 
        className='text-gray text-sm mt-4' 
        dangerouslySetInnerHTML={{
          __html: job.description ? job.description.slice(0, 150) : ''
        }}
      />
      
      <div className='mt-4 flex gap-4 text-sm'>
        {/* Bouton Postuler - navigue vers le formulaire */}
        <button 
          onClick={() => navigate(`/jobs/${job.id}/apply`)}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
        >
          Apply Now
        </button>
        
        <button className='text-gray-500 border border-gray-500 rounded px-4 py-2 hover:bg-gray-50 transition'>
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;