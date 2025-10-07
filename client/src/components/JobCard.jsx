// // // src/components/JobCard.jsx
// // import { useNavigate } from 'react-router-dom';
// // import company_icon from '../assets/company_icon.svg';

// // const JobCard = ({ job }) => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className='border p-6 shadow rounded'>
// //       <div className='flex justify-between items-center'>
// //         <img className='h-8' src={company_icon} alt="" />
// //       </div>
      
// //       <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
      
// //       <div className='flex items-center gap-3 mt-2'>
// //         <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
// //           {job.location}
// //         </span>
// //         {job.level && (
// //           <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
// //             {job.level}
// //           </span>
// //         )}
// //       </div>
      
// //       <p 
// //         className='text-gray text-sm mt-4' 
// //         dangerouslySetInnerHTML={{
// //           __html: job.description ? job.description.slice(0, 150) : ''
// //         }}
// //       />
      
// //       <div className='mt-4 flex gap-4 text-sm'>
// //         {/* Bouton Postuler - navigue vers le formulaire */}
// //         <button 
// //           onClick={() => navigate(`/jobs/${job.id}/apply`)}
// //           className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
// //         >
// //           Apply Now
// //         </button>
        
// //         <button className='text-gray-500 border border-gray-500 rounded px-4 py-2 hover:bg-gray-50 transition'>
// //           Learn more
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobCard;

// // src/components/JobCard.jsx
// import { useNavigate } from 'react-router-dom';
// import company_icon from '../assets/company_icon.svg';

// const JobCard = ({ job }) => {
//   const navigate = useNavigate();

//   return (
//     <div className='border p-6 shadow rounded'>
//       <div className='flex justify-between items-center'>
//         <img className='h-8' src={company_icon} alt="" />
//       </div>
      
//       <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
      
//       <div className='flex items-center gap-3 mt-2'>
//         <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
//           {job.location}
//         </span>
//         {job.level && (
//           <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
//             {job.level}
//           </span>
//         )}
//       </div>
      
//       <p className='text-gray text-sm mt-4'>
//         {job.description ? job.description.slice(0, 150) + '...' : ''}
//       </p>
      
//       <div className='mt-4 flex gap-4 text-sm'>
//         {/* Bouton Postuler */}
//         <button 
//           onClick={() => navigate(`/jobs/${job.id}/apply`)} 
//           className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
//         >
//           Apply Now
//         </button>
        
//         <button className='text-gray-500 border border-gray-500 rounded px-4 py-2 hover:bg-gray-50 transition'>
//           Learn more
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
// src/components/JobCard.jsx
// :*****************************************



// import { useNavigate } from 'react-router-dom';
// import company_icon from '../assets/company_icon.svg';

// const JobCard = ({ job }) => {
//   const navigate = useNavigate();

//   // Fonction pour nettoyer le HTML de la description
//   const cleanDescription = (html) => {
//     if (!html) return '';
//     // Supprime les balises HTML et limite à 150 caractères
//     const text = html.replace(/<[^>]*>/g, '');
//     return text.length > 150 ? text.slice(0, 150) + '...' : text;
//   };

//   return (
//     <div className='border p-6 shadow rounded hover:shadow-lg transition'>
//       <div className='flex justify-between items-center'>
//         <img className='h-8' src={company_icon} alt="Company" />
//         <span className='text-sm text-gray-500 font-medium'>{job.company}</span>
//       </div>
      
//       <h4 className='font-medium text-xl mt-2 text-gray-900'>{job.title}</h4>
      
//       <div className='flex items-center gap-3 mt-2'>
//         <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded text-blue-700 text-sm'>
//           {job.location}
//         </span>
//         {job.level && (
//           <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded text-red-700 text-sm'>
//             {job.level}
//           </span>
//         )}
//       </div>
      
//       <p className='text-gray-600 text-sm mt-4 min-h-[60px]'>
//         {cleanDescription(job.description)}
//       </p>
      
//       <div className='mt-4 flex gap-4 text-sm'>
//         {/* Bouton Postuler */}
//         <button 
//           onClick={() => {
//             console.log('🎯 Application pour job ID:', job.id);
//             navigate(`/jobs/${job.id}/apply`);
//           }}
//           className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium'
//         >
//           Apply Now
//         </button>
        
//         <button className='text-gray-600 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition font-medium'>
//           Learn more
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;

// src/components/JobCard.jsx
import { useNavigate } from 'react-router-dom';
import company_icon from '../assets/company_icon.svg';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  // Fonction pour nettoyer le HTML de la description
  const cleanDescription = (html) => {
    if (!html) return '';
    const text = html.replace(/<[^>]*>/g, '');
    return text.length > 150 ? text.slice(0, 150) + '...' : text;
  };

  return (
    <div className='border p-6 shadow rounded hover:shadow-lg transition'>
      <div className='flex justify-between items-center'>
        <img className='h-8' src={company_icon} alt="Company" />
        <span className='text-sm text-gray-500 font-medium'>{job.company}</span>
      </div>
      
      <h4 className='font-medium text-xl mt-2 text-gray-900'>{job.title}</h4>
      
      <div className='flex items-center gap-3 mt-2'>
        <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded text-blue-700 text-sm'>
          {job.location}
        </span>
        {job.level && (
          <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded text-red-700 text-sm'>
            {job.level}
          </span>
        )}
      </div>
      
      <p className='text-gray-600 text-sm mt-4 min-h-[60px]'>
        {cleanDescription(job.description)}
      </p>
      
      <div className='mt-4 flex gap-4 text-sm'>
        <button 
          onClick={() => {
            console.log('🎯 Application pour job ID:', job.id);
            navigate(`/jobs/${job.id}/apply`);
          }}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium'
        >
          Apply Now
        </button>
        
        <button className='text-gray-600 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition font-medium'>
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;