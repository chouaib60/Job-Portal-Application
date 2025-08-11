import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
//userButton est un composant pret à l'emploi qui affiche la photo et les options de compte de l'utilisateur connecté
// useUser est un hook qui permet de récupérer les informations de l'utilisateur connecté
const Navbar = () => {

  const { openSignIn } = useClerk() // useClerk est un hook qui permet d'accéder aux fonctions globales de Clerk (comme fonction qui permet d'ouvrir la fenetre de connexion"opensignin , déconexion etc)
  const { user } = useUser() // useUser est un hook qui permet de récupérer les informations de l'utilisateur connecté 
  return (
    <div className='shadow py-4 px-6 flex justify-between items-center'> {/*classname permet d'appliquer des classes CSS à un élément JSX  */}
      <div className='container px-4 mx-auto flex justify-between items-center'>
        <img src={assets.logo} alt="" />
        {
          user
            ? <div></div>
            : <div className='flex gap-4 max-sm:text-xs'>
                <button className='text-gray-600'>Recruiter Login</button>
                <button onClick={e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button> {/*opensignin est une fonction de clerk qui permet d'ouvrir la fenetre de connecion */}
              </div>
        }
      </div>
    </div>
  )
}

export default Navbar
