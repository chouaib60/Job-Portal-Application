import company_icon from '../assets/company_icon.svg'
// jobcard component pour afficher les détails d'une offre d'emploi

const JobCard = ({ job }) => {
    // j'ai passé l'objet job en props que j'ai défini dans JobListing.jsx
    // job c'est l'objet complet de l'offre d'emploi que j'ai dans jobsData par exemple :
    // { title: "Full Stack Developer", location: "California", level: "Mid Level", description: "We are looking for a skilled Full Stack Developer to join our dynamic team. The ideal candidate will have experience in both front-end and back-end development, with a strong understanding of modern web technologies. Responsibilities include designing, developing, and maintaining web applications, collaborating with cross-functional teams, and ensuring the performance and scalability of our systems. If you are passionate about coding and eager to work in a fast-paced environment, we would love to hear from you.", company: "Tech Solutions Inc.", postedDate: "2023-10-01" }
  return (
    <div className='border p-6 shadow rounded'>
      <div className='flex justify-between items-center'>
         <img className='h-8' src={company_icon} alt="" />
      </div>
      <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
      <div className='flex items-center gap-3 mt-2'>
        <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
        <span  className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{job.level}</span>

      </div>
      <p className='text-gray text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p> //
      <div className='mt-4 flex gap-4 text-sm'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>Apply Now</button>
        <button className='text-gray-500 border border-gray-500 rounded px-4 py-2'>Learn more</button>
      </div>
    </div>
  )
}

export default JobCard
