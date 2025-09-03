// JobListing.jsx est un composant qui sert à afficher les informations de recherche actuelles (current search)
// il récupère les données de recherche (title et location) à partir du contexte global AppContext
import AppContext from '../context/AppContext'
import { useContext } from 'react'
import cross_icon from '../assets/cross_icon.svg'
import { JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'
const JobListing = () => {
  // j'extrais isSearched, searchFilter, setS du contexte global AppContext
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext)

  return (
    <div className='container 2xl:px-20 mx-auto flex flex_col lg:flex-row max-lg:space-y-8 py-8'>


      {/*sidebar*/}
      <div className='w-full lg:w-1/4  bg-white px-4'>

        {/*searchFilter from hero component*/}

        {
          // si une recherche a été effectuée (issearched  est true && and .... )
          // et que le titre ou la localisation n'est pas vide
          isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              {/* //  ci les deux conditions ci dessus sont vrais j'affiche les informations de recherche actuelles */}
              <h3 className='font-medium text-lg mb-4'>Current Search</h3>
              <div className='mb-4 text-gray-600'>
                {searchFilter.title && (
                  // si search filter .title n'est pas vide alors affiche ce qu'il ya entre (....)
                  <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200  px-4 py-1.5 rounded'>
                    {searchFilter.title}

                    {/* je mets à un croi ç coté de chaque information quand je le clique l'info et suppiméé
                    setsearchfilter va mettre à jour les valeur de searchFilter en une valeur vide lorsque je clique sur le croix */}
                    <img onClick={e => setSearchFilter(prev => ({ ...prev, title: "" }))} className='cursor-pointer' src={cross_icon} alt="" />
                  </span>
                )}
                {searchFilter.location && (
                  <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200  px-4 py-1.5 rounded'>
                    {searchFilter.location}
                    <img onClick={e => setSearchFilter(prev => ({ ...prev, location: "" }))} className='cursor-pointer' src={cross_icon} alt="" />
                  </span>
                )}
              </div>

            </>
          )

        }
        {/* categorie filter des jobs */}
        <div className='max-lg:mt-8'>
          <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
          <ul className='space-y-4 text-gray-600'>
            {/* // <ul> est une liste non ordonnéd */}
            {
              JobCategories.map((category, index) => (
                <li className='flex gap-3 items-center' key={index}>
                  <input className='scale-125' type="checkbox" name="" id="" />
                  {category}

                </li>
              ))}
          </ul>
        </div>
        {/* Location filter des jobs */}
        <div className='max-lg:mt-8'>
          <h4 className='font-medium text-lg py-4 pt-14'>Search by Locations</h4>
          <ul className='space-y-4 text-gray-600'>
            {/* // <ul> est une liste non ordonnéd */}
            {
              JobLocations.map((location, index) => (
                <li className='flex gap-3 items-center' key={index}>
                  <input className='scale-125' type="checkbox" name="" id="" />
                  {location}

                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* job listing */}
      <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'> 
         <h3 className='font-medium text-3xl py-2'>Latest Jobs</h3>
         <p className='mb-8'>Get your desired job from top companies</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {/* ici j'afficherai la liste des jobs */}

{/* j'ai importé d'abord le tableau Jobsdata depuis assets.js , puis j'utilise map pour parcourir chaque élément du tableau et rendre un composant JobCard pour chaque job
JobCard reçoit un job et affiche ses détails */}
               {jobs.map((job,index) => (
                   <JobCard key={index} job={job} />
//  job c'est l'objet courant dans mon tableau jobsData par exemple :
//  { title: "Full Stack Developer", location: "California", ... }

//  index c'est la position de l'élément dans le tableau (0,1,2,...) , ça sert comme un identifiant unique 
// JobCard c'est mon composant enfant je vais lui appeler et je vais lui passer l'objet complet 'l'offre d'emploi en props job dans job={job}
               ))}
                

         </div>
         
      </section>

    </div>

    


  )
}


export default JobListing
