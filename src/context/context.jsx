import React, { createContext, useState, useEffect } from "react";

// Création du contexte
export const AppContext = createContext();

// Fournisseur du contexte
export const AppProvider = ({ children }) => {
  // Global state
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Charger isLiked depuis localStorage au démarrage
  const [isLiked, setIsLiked] = useState(() => {
    const savedArrayIsLiked = localStorage.getItem('isLiked');
    return savedArrayIsLiked ? JSON.parse(savedArrayIsLiked) : []; // Retourner un tableau vide si rien n'est trouvé
  });

  // Ajouter un livre à la liste des livres aimés et mettre à jour le localStorage
  const handleLike = (book) => {
    setIsLiked([...isLiked, book]);
  };

  // Utiliser useEffect pour mettre à jour le localStorage dès que isLiked change
  useEffect(() => {
    // Mettre à jour le localStorage chaque fois que isLiked est modifié
    localStorage.setItem('isLiked', JSON.stringify(isLiked));
  }, [isLiked]); // Le useEffect se déclenche lorsque isLiked change

  return (
    <AppContext.Provider value={{ isLiked, handleLike, setIsLiked, menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};
