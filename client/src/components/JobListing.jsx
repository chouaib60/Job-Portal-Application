// JobListing.jsx est un composant qui sert à afficher les informations de recherche actuelles (current search)
// il récupère les données de recherche (title et location) à partir du contexte global AppContext
import AppContext from '../context/AppContext'
import { useContext, useState } from 'react'
import cross_icon from '../assets/cross_icon.svg'
import left_arrow_icon from '../assets/left_arrow_icon.svg'
import right_arrow_icon from '../assets/right_arrow_icon.svg'
import { JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'
const JobListing = () => {
  // j'extrais isSearched, searchFilter, setSearchFilter du contexte global AppContext
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext)

  const [showFilter, setShowFilter] = useState(true);
  // état pour gérer l'affichage du filtre sur les petits écrans (mobile) 
  // le filtre c'est la sidebar à gauche ( de location et categorie)

  //on cree une state variable pour gérer la pagination
  const [currentPage, setCurrentPage] = useState(1); // oninitilise la page courante à 1

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

                    {/* je mets à un croi à coté de chaque information quand je le clique l'info et suppiméé
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
        {/* bouton pour afficher ou cacher le filtre sur les petits écrans (mobile) */}
        <button onClick={e => setShowFilter(prev => !prev)} className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'>
          {/* onClick est une propriété en JavaScript qui s’exécute lorsque je clique sur le bouton.
 - e => est une fonction fléchée qui reçoit l’événement du clic. 
 - Quand je clique, la fonction fléchée appelle setShowFilter qui modifie l’état showFilter.
 - tq prev represente l'ancienne état de showfilter et elle se tranformer en sa négation lorsque je clique sur le bouton
 - quand je fais (prev) => !prev , react execute cette fonction en lui donnant comme
  argument à prev la valeur actuelle de showfilter puis on la met à jour (sa négation !prev) ,
  donc si showfilter était true elle devient false et vice versa
  - donc prev automatiquement devient l'ancienne valeur de showfilter .
 */}


          {/* si showfilter est true j'affiche "close" sinon j'affiche "filters" */}
          {/* // showfilter est true ca veut dire que l'utilisateur a cliqué sur le bouton "filters" pour afficher le filtre */}
          {showFilter ? "Close" : "Filters"}
        </button>


        {/* categorie filter des jobs */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          {/* // si showfilter est true j'affiche les filtres ( de location et de catégorie ) sinon je le cache sur les petits écrans
          // showfilter est true ca veut dire que l'utilisateur a cliqué sur le bouton "filters" pour afficher le filtre */}
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

        <div className={showFilter ? "" : "max-lg:hidden"}>
          {/* // si showfilter est true j'affiche les filtres ( de location et de catégorie ) sinon je le cache sur les petits écrans
          // showfilter est true ca veut dire que l'utilisateur a cliqué sur le bouton "filters" pour afficher le filtre */}
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
        <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
        <p className='mb-8'>Get your desired job from top companies</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {/* ici j'afficherai la liste des jobs */}

          {/* j'ai importé d'abord le tableau Jobsdata depuis assets.js , puis j'utilise map pour parcourir chaque élément du tableau et rendre un composant JobCard pour chaque job
JobCard reçoit un job et affiche ses détails */}
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
            //  ici jobs c'est le tableau d'offres d'emploi que j'ai dans mon état jobs
            //  job c'est l'objet courant dans mon tableau jobsData par exemple :
            //  { title: "Full Stack Developer", location: "California", ... }

            //  index c'est la position de l'élément dans le tableau (0,1,2,...) , ça sert comme un identifiant unique 
            // JobCard c'est mon composant enfant je vais lui appeler et je vais lui passer l'objet complet 'l'offre d'emploi en props job dans job={job}
          ))}


        </div>

        {/* pagination */}
        {/* la pagination c'est pour naviguer entre les pages de résultats d'offres d'emploi */}
        {jobs.length > 0 && ( // ce code ne s'éxecute que si mon tableau jobs contient au moins un job , sinon pas de pagination à afficher
          <div className='flex items-center justify-center space-x-2 mt-10'>
            <a href="#job-list"> {/*ça sert à remonter automatiquement l'éran vers la section en haut qui contient les offres d'emploi (celle avec l'id job-list , j'ai défini cette id dans le h3 "latest jobs" pour l'affichage des offres d'emploi) */}
              <img src={left_arrow_icon} alt="" />
            </a>
            {Array.from({ length: Math.ceil(jobs.length / 6) }).map((_, index) => (
              <a href="#job-list">
                <button className={`w-10 h-10 flex items-center justify-center border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}>{index + 1} </button>
              </a>
            ))}
            <a href="#job-list">
              <img src={right_arrow_icon} alt="" />
            </a>
          </div>
        )}

      </section>

    </div>




  )
}


export default JobListing
