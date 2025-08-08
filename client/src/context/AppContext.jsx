// import { createContext } from 'react';

// // on crée le contexte qui va contenir le données qu'on veut partager dans l'application , c'est comme une sorte de canal de communication entre les composants
// // on peut y mettre des données, des fonctions, etc. Les composants qui consomment ce contexte peuvent  accéder à ces données et fonctions etl'utiliser comme s'ils étaient dans le même composant parent.
// export const AppContext = createContext() // export permet à ce composant d'etre utilisé et importé dans d'autres fichiers

// // on crée le provider qui va permettre de partager les données du contexte avec les composants enfants
// export const AppProvider = () => {
//     const value = {
//         // ici on met les données et fonctions que l'on veut partager
//     }
//     return (
//         <AppContext.Provider value={value}>
//             {/* children components will go here */}
//         </AppContext.Provider>
//     );

// };

// export default AppContext;

import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const value = {
        // vos données partagées
    };
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;