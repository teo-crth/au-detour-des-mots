import React, { createContext, useState } from "react";
import booksLikedArray from "../utils/allBooksArray/booksLikedArray";

// Création du contexte
export const AppContext = createContext();

// Fournisseur du contexte
export const AppProvider = ({ children }) => {
  // Global state
  const [isLiked, setIsLiked] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resultFetch, setResultFetch] = useState(null);

  // if we like a book, we add it to the booksLikedArray
    const handleLike = (book) => {
      setIsLiked([...isLiked, book]);
    };

  return (
    <AppContext.Provider value={{ isLiked, handleLike, setIsLiked, menuOpen, setMenuOpen, resultFetch, setResultFetch }}>
      {children}
    </AppContext.Provider>
  );
};