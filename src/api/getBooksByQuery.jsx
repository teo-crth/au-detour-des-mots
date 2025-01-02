import axios from 'axios';

// Base URL de l'API Google Books
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// Fonction pour rechercher des livres
export const fetchBooks = async (query) => {
  try {
    // Requête avec axios
    const response = await axios.get(BASE_URL, {
      params: {
        q: query, // Terme de recherche
        maxResults: 40,
        startIndex: 0,
        printType: 'books',
        langRestrict: 'fr' // Type de résultat à afficher
      },
    });

    // Filtrer les résultats pour exclure les ebooks
    const physicalBooks = (response.data.items || []).filter(
        (book) => book.saleInfo.isEbook === false // Vérifie si le livre n'est pas un ebook
    );
  
    return physicalBooks;
  } catch (error) {
    console.error('Erreur lors de la récupération des livres:', error);
    throw error; // Rejetez l'erreur pour la gestion
  }
};
