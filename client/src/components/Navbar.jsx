// import { assets } from '../assets/assets'
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

// // userButton est un composant prêt à l'emploi qui affiche la photo et les options de compte de l'utilisateur connecté
// // useUser est un hook qui permet de récupérer les informations de l'utilisateur connecté
// const Navbar = () => {

//   const { openSignIn } = useClerk() 
//   // useClerk est un hook qui permet d'accéder aux fonctions globales de Clerk (comme ouvrir la fenêtre de connexion "openSignIn", se déconnecter, etc.)

//   const { isLoaded, user } = useUser() 
//   // useUser est un hook qui permet de récupérer les informations de l'utilisateur connecté 
//   // isLoaded = true → Clerk a fini de charger l'état de l'utilisateur
//   // user = objet contenant les infos de l'utilisateur (null si non connecté)

//   return (
//     <div className='shadow py-4 px-6 flex justify-between items-center'>
//       {/* className permet d'appliquer des classes CSS à un élément JSX */}
      
//       <div className='container px-4 mx-auto flex justify-between items-center'>
        
//         {/* Logo de l'application */}
//         <img src={assets.logo} alt="Logo" />

//         {/* Cas où Clerk n'a pas encore fini de charger → on peut afficher un texte ou un spinner */}
//         {!isLoaded && (
//           <p>Loading...</p>
//         )}

//         {/* Cas où Clerk est chargé */}
//         {isLoaded && (
//           user
//             ? (
//               // Si l'utilisateur est connecté
//               <div className='flex items-center gap-3'>
//                 {/* Lien vers les jobs appliqués */}
//                 <a href="/Applications">Applied Job</a> {/* Utilisation de <a> au lieu de <link> pour que ça fonctionne en HTML natif */}
                
//                 <p>|</p>

//                 {/* Affiche le prénom et nom de l'utilisateur */}
//                 <p className='max-sm:hidden'>Hi, {user.firstName + " " + (user.lastName || "")}</p>

//                 {/* Bouton Clerk pour accéder au compte */}
//                 <UserButton />
//               </div>
//             )
//             : (
//               // Si l'utilisateur n'est pas connecté
//               <div className='flex gap-4 max-sm:text-xs'>
//                 {/* Bouton "Recruiter Login" (pas encore relié à Clerk) */}
//                 <button className='text-gray-600'>Recruiter Login</button>

//                 {/* Bouton "Login" qui ouvre la fenêtre Clerk */}
//                 <button 
//                   onClick={() => openSignIn()} 
//                   className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>
//                   Login
//                 </button> {/* openSignIn est une fonction de Clerk qui permet d'ouvrir la fenêtre de connexion */}
//               </div>
//             )
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar

import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom' // ⬅️ Importez Link

// userButton est un composant prêt à l'emploi qui affiche la photo et les options de compte de l'utilisateur connecté
// useUser est un hook qui permet de récupérer les informations de l'utilisateur connecté
const Navbar = () => {

  const { openSignIn } = useClerk() 
  // useClerk est un hook qui permet d'accéder aux fonctions globales de Clerk (comme ouvrir la fenêtre de connexion "openSignIn", se déconnecter, etc.)

  const { isLoaded, user } = useUser() 
  // useUser est un hook qui permet de récupérer les informations de l'utilisateur connecté 
  // isLoaded = true → Clerk a fini de charger l'état de l'utilisateur
  // user = objet contenant les infos de l'utilisateur (null si non connecté)

  return (
    <div className='shadow py-4 px-6 flex justify-between items-center'>
      {/* className permet d'appliquer des classes CSS à un élément JSX */}
      
      <div className='container px-4 mx-auto flex justify-between items-center'>
        
        {/* Logo de l'application avec lien vers l'accueil */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-8" />
        </Link>

        {/* Cas où Clerk n'a pas encore fini de charger → on peut afficher un texte ou un spinner */}
        {!isLoaded && (
          <p>Loading...</p>
        )}

        {/* Cas où Clerk est chargé */}
        {isLoaded && (
          user
            ? (
              // Si l'utilisateur est connecté
              <div className='flex items-center gap-4'>
                {/* Lien vers les jobs appliqués (pour candidats) */}
                <Link 
                  to="/Applications" 
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Mes Candidatures
                </Link>
                
                {/* Lien vers le tableau de bord recruteur */}
                <Link 
                  to="/recruiter/dashboard" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium"
                >
                  📊 Espace Recruteur
                </Link>

                {/* Séparateur */}
                <span className="text-gray-300">|</span>

                {/* Lien pour publier une nouvelle annonce */}
                <Link 
                  to="/recruiter/create-job" 
                  className="text-blue-600 hover:text-blue-800 transition font-medium"
                >
                  ➕ Publier une annonce
                </Link>

                {/* Séparateur */}
                <span className="text-gray-300">|</span>

                {/* Affiche le prénom et nom de l'utilisateur */}
                <p className='max-sm:hidden text-gray-700 font-medium'>
                  Bonjour, {user.firstName + " " + (user.lastName || "")}
                </p>

                {/* Bouton Clerk pour accéder au compte */}
                <UserButton />
              </div>
            )
            : (
              // Si l'utilisateur n'est pas connecté
              <div className='flex gap-4 max-sm:text-xs'>
                {/* Bouton "Espace Recruteur" qui ouvre la fenêtre Clerk */}
                <button 
                  onClick={() => openSignIn()} 
                  className='text-gray-700 hover:text-green-600 font-medium transition'
                >
                  Espace Recruteur
                </button>

                {/* Séparateur */}
                <span className="text-gray-300">|</span>

                {/* Bouton "Se connecter" qui ouvre la fenêtre Clerk */}
                <button 
                  onClick={() => openSignIn()} 
                  className='bg-blue-600 text-white px-6 sm:px-8 py-2 rounded-lg hover:bg-blue-700 transition font-medium'
                >
                  Se connecter
                </button>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Navbar