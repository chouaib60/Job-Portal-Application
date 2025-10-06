import search_icon from '../assets/search_icon.svg';
import location_icon from '../assets/location_icon.svg';
import microsoft_logo from '../assets/microsoft_logo.svg';
import walmart_logo from '../assets/walmart_logo.svg';
import accenture_logo from '../assets/accenture_logo.png';
import samsung_logo from '../assets/samsung_logo.png';
import amazon_logo from '../assets/amazon_logo.png';
import adobe_logo from '../assets/adobe_logo.png';
import { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';

const Hero = () => {
  const {setSearchFilter, setIsSearched} = useContext(AppContext); //on importe le contexte Appcontext pour pouvoir utiliser les fonctions setSearchFilter et setIsSearched dans le composant Hero
  // on utilise useContext pour pouvoir accéder aux données et fonctions définies dans le contexte "Appcontext", ce qui nous permet de modifier les informations de recherche et de savoir si une recherche a été effectuée
  const titleRef = useRef(null); // on utilise useRef pour créer une réference mutable qui nous permettra de récuperer la valeur de l'input de recherche titre , on l'initialise à null parceque l'input n'existe pas encore dans le Dom
  const locationRef = useRef(null); // on utilise useRef pour créer une réference mutable qui nous permettra de récuperer la valeur de l'input de recherche localisation , on l'initialise à null parceque l'input n'existe pas encore dans le Dom

  const onSearch = () => {

    // cette fonction est appelée lorsque l'utilisateur clique sur le bouton de recherche

    // logique :
      //quand l'utilisateur clique sur search on met à jour l'état searchFilter avec les valeurs des inputs 
     // et  on met à jour l'état issearched à true pour indiquer qu'une recherche a été effectuée
    setSearchFilter({
      title:titleRef.current.value, // on récupère la valeur de l'input de recherche titre
      location:locationRef.current.value, // on récupère la valeur de l'input de recherche localisation

    })
    setIsSearched(true); // on met à jour l'état issearched à true pour indiquer qu'une recherche a été effectuée
    console.log({//
      title: titleRef.current.value, 
      location: locationRef.current.value
    });

  }
  return (
    <div className='container xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>
          Over 10,000+ jobs to apply
        </h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>
          Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!
        </p>
        
        {/* Formulaire de recherche amélioré */}
        <div className='flex flex-col sm:flex-row items-center justify-between bg-white rounded text-gray-600 max-w-xl mx-4 sm:mx-auto overflow-hidden'>
          <div className='flex items-center flex-1 min-w-0'>
            <img src={search_icon} alt="Search" className='ml-4 w-4 h-4 flex-shrink-0' />
            <input 
              type="text"
              placeholder='Search for jobs'
              className='w-full max-sm:text-xs p-2 outline-none border-none bg-transparent' 
              ref={titleRef} // on associe la référence titleRef à l'input de recherche titre
            />
          </div>
          
          <div className='hidden sm:block w-px h-8 bg-gray-300'></div>
          
          <div className='flex items-center flex-1 min-w-0'>
            <img src={location_icon} alt="Location" className='ml-4 w-4 h-4 flex-shrink-0' />
            <input 
              type="text"
              placeholder='Location'
              className='w-full max-sm:text-xs p-2 outline-none border-none bg-transparent' 
              ref={locationRef} // on associe la référence locationRef à l'input de recherche localisation
            />
          </div>
          
          <button onClick={onSearch} className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white m-1 transition-colors flex-shrink-0'>
            Search
          </button>
        </div>
      </div>

      {/* Section logos */}
      <div className='text-center mt-8'>
        <p className='text-gray-600 mb-4'>Trusted by</p>
        <div className='flex justify-center items-center gap-4 flex-wrap'>
          <img src={microsoft_logo} alt="Microsoft" className='h-8 object-contain' />
          <img src={walmart_logo} alt="Walmart" className='h-8 object-contain' />
          <img src={accenture_logo} alt="Accenture" className='h-8 object-contain' />
          <img src={samsung_logo} alt="Samsung" className='h-8 object-contain' />
          <img src={amazon_logo} alt="Amazon" className='h-8 object-contain' />
          <img src={adobe_logo} alt="Adobe" className='h-8 object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Hero;