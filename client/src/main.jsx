import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Récupération de la clé publique depuis .env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider // clerk provider c'est contexte qui va rendre disponibles les infos et fonctions clerk dans tout ton projet
      // PUBLISHABLE_KEY est la clé public de mon projet pour identifier mon application chez clerk
        publishableKey={PUBLISHABLE_KEY}
        navigate={(to) => window.history.pushState(null, '', to)}
        // navigate c'est une fonction clerk qui permet de gérer la navigation dans l'application , c'est pour rediriger l'utilisateur (par exemple : quand il clique sur login ou logout il est redirigé vers une autre page)
        // on utilise window.history.pushState pour mettre à jour l'URL sans recharger la page
      > 
        <AppProvider>
          <App />
        </AppProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
)
