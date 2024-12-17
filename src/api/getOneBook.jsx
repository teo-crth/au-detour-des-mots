import axios from 'axios';

// Base URL de l'API Google Books
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// Fonction pour rechercher des livres
export const fetchOneBook = async (bookId) => {
  try {
    // Requête avec axios
    const response = await axios.get(BASE_URL/{bookId});

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du livre:', error);
    throw error; // Rejetez l'erreur pour la gestion
  }
};
