import React, { useState, useEffect, useContext } from 'react';
import './searchPage.css';
import SearchBar from '../../components/searchBar/SearchBar';
import { AppContext } from '../../context/context';

const SearchPage = () => {
    const [selectedCategories, setSelectedCategories] = useState([]); // Catégories sélectionnées
    const [selectedStars, setSelectedStars] = useState([]); // Étoiles sélectionnées
    const [books, setBooks] = useState([]); // Résultats des livres
    const [loading, setLoading] = useState(false); // État de chargement
    const [error, setError] = useState(null); // État des erreurs
    const {resultFetch, setResultFetch } = useContext(AppContext);

    // Fonction pour gérer les catégories sélectionnées
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    // Fonction pour gérer les étoiles sélectionnées
    const handleStarsChange = (star) => {
        setSelectedStars((prev) =>
            prev.includes(star)
                ? prev.filter((item) => item !== star)
                : [...prev, star]
        );
    };

    // Fonction pour récupérer les livres depuis l'API
    const fetchBooks = async () => {
        setLoading(true);
        setError(null);
        try {
            const params = {
                categories: selectedCategories.join(','), // Convertir en chaîne pour l'API
                stars: selectedStars.join(','), // Convertir en chaîne pour l'API
            };
            const response = await axios.get(API_URL, { params }); // Запрос к API с параметрами
            setBooks(response.data); // Предполагается, что API возвращает массив книг
        } catch (err) {
            setError('Erreur lors du chargement des livres. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    // Mettre à jour les résultats lorsque les filtres changent
    useEffect(() => {
        fetchBooks();
    }, [selectedCategories, selectedStars]); // Запрос отправляется при изменении категорий или звёзд

    return (
        <div className="search-page">
            <h1 className="title">Filtrer les livres</h1>
            <div className="top-bar">
            </div>
            <div className="content">
                {/* Section gauche : Filtres */}
                <aside className="sidebar">
                    <div className="filter-item">
                        <h3>Catégories :</h3>
                        <div className="checkbox-group">
                            {['Fiction', 'Science', 'Histoire', 'Fantastique'].map((category) => (
                                <label
                                    key={category}
                                    className={selectedCategories.includes(category.toLowerCase()) ? 'active' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        value={category.toLowerCase()}
                                        checked={selectedCategories.includes(category.toLowerCase())}
                                        onChange={() => handleCategoryChange(category.toLowerCase())}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-item">
                        <h3>Étoiles :</h3>
                        <div className="checkbox-group">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <label
                                    key={star}
                                    className={selectedStars.includes(star) ? 'active' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        value={star}
                                        checked={selectedStars.includes(star)}
                                        onChange={() => handleStarsChange(star)}
                                    />
                                    {star} étoile{star > 1 ? 's' : ''}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Section droite : Résultats */}
                <main className="main-content">
                    <h3>Résultats :</h3>
                    {loading ? (
                        <p>Chargement...</p>
                    ) : error ? (
                        <p className="error">{error}</p>
                    ) : books.length > 0 ? (
                        <ul>
                            {books.map((book) => (
                                <li key={book.id}>{book.title}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucun livre trouvé pour les filtres sélectionnés.</p>
                    )}
                    <SearchBar />
                </main>
            </div>
        </div>
    );
};

export default SearchPage;