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

import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // on crée un état avec usestate pour stocker les informations de recherche de l'utilisateur

    const [searchFilter, setSearchFilter] = useState({
        title: '', //initialisation des champs de recherche afin que l'utilisateur puisse saisir des informations
        location: '' // initialisation des champs de recherche afin que l'utilisateur puisse saisir des informations
    }); 
    const [isSearched, setIsSearched] = useState(false); // état pour savoir si une recherche a été effectuée , son fonctionnement c'est de savoir si l'utilisateur a cliqué sur le bouton de recherche, on a initialisé avec false pour dire qu'aucune recherche n'a été effectuée au départ. et si on avait fait une recherche, on mettra isSearched à true.
    const value = {
        // vos données partagées
        setSearchFilter,searchFilter, // on exporte la fonction setsearchfilteret l'état searchFilter pour pouvoir les utiliser dans les composants enfanats afin que l'utilisateur puisse saisir des informations de recherche
        isSearched, // on exporte l'état isSearched pour savoir si une recherche a été effectuée
        setIsSearched // on exporte la fonction setIsSearched pour pouvoir modifier l'état isSearched
    };
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;