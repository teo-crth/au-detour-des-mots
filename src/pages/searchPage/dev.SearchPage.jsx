import React, { useState } from 'react'; 
import allBooks from '../../utils/allBooksArray/allBooksArray'; 
import BookCard from '../../components/ui/bookCard/BookCard'; 
import './searchPage.css'; 

const SearchPage = () => {
    // Définition des états avec useState
    const [query, setQuery] = useState(''); // État pour stocker la requête de recherche saisie par l'utilisateur
    const [books, setBooks] = useState([]); // État pour stocker les résultats filtrés
    const [loading, setLoading] = useState(false); // État pour indiquer si une recherche est en cours
    const [error, setError] = useState(null); // État pour stocker un message d'erreur si nécessaire

    // Fonction pour gérer la recherche lorsqu'on soumet le formulaire
    const handleSearch = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page par défaut lors de la soumission du formulaire
        setLoading(true); // Indique que la recherche commence
        setError(null); // Réinitialise les erreurs éventuelles
        try {
            // Filtre les livres dans allBooks en fonction de la requête saisie
            const results = allBooks.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase()) // Vérifie si le titre contient le texte recherché
            );
            setBooks(results); // Met à jour l'état avec les résultats filtrés
        } catch (err) {
            // En cas d'erreur, met à jour l'état avec un message d'erreur
            setError('Erreur lors du chargement, veuillez réessayer plus tard.');
        } finally {
            setLoading(false); // Arrête l'indicateur de chargement
        }
    };

    return (
        <div className="search-page"> {/* Conteneur principal de la page */}
            <h1>Recherche la votre livre</h1> {/* Titre de la page */}
            <form onSubmit={handleSearch}> {/* Formulaire pour la recherche */}
                <input
                    type="text" // Champ texte pour saisir la requête
                    placeholder="Tapez le nom du livre" // Texte indicatif dans le champ
                    value={query} // Lier la valeur de l'état query au champ texte
                    onChange={(e) => setQuery(e.target.value)} // Met à jour l'état query à chaque modification
                />
                <button type="submit">Recherche</button> {/* Bouton pour soumettre le formulaire */}
            </form>
            {loading && <p>Chargement...</p>} {/* Affiche "Chargement..." si l'état loading est true */}
            {error && <p className="error">{error}</p>} {/* Affiche un message d'erreur si l'état error n'est pas nul */}
            <div className="books-container"> {/* Conteneur pour afficher les résultats */}
                {books.length > 0 ? ( // Vérifie si des livres ont été trouvés
                    books.map((book) => (
                        <BookCard key={book.id} book={book} /> // Rend une carte pour chaque livre trouvé
                    ))
                ) : (
                    !loading && <p>Pas de résultats pour votre recherche.</p> // Si aucun livre trouvé et pas de chargement en cours, affiche ce message
                )}
            </div>
        </div>
    );
};

export default SearchPage; 