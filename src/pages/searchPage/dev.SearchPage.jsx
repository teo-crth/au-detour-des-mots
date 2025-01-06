import React, { useState, useContext, useEffect } from 'react';
import './searchPage.css';
import SearchBar from '../../components/searchBar/SearchBar';
import { AppContext } from '../../context/context';

const SearchPage = () => {
    const { ResultFetch = [] } = useContext(AppContext);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStars, setSelectedStars] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const stars = [1, 2, 3, 4, 5];

    // Извлечение уникальных категорий
    useEffect(() => {
        if (ResultFetch.length > 0) {
            const allCategories = ResultFetch.flatMap(
                (book) => book.volumeInfo.categories || []
            );
            const uniqueCategories = [...new Set(allCategories)];

            // Проверяем, изменились ли категории
            if (JSON.stringify(categories) !== JSON.stringify(uniqueCategories)) {
                setCategories(uniqueCategories);
            }

            // Проверяем, изменились ли книги
            if (JSON.stringify(filteredBooks) !== JSON.stringify(ResultFetch)) {
                setFilteredBooks(ResultFetch);
            }
        }
    }, [ResultFetch]);

    // Фильтрация книг
    useEffect(() => {
        let books = ResultFetch;

        if (selectedCategories.length > 0) {
            books = books.filter((book) =>
                (book.volumeInfo.categories || []).some((cat) =>
                    selectedCategories.includes(cat)
                )
            );
        }

        if (selectedStars.length > 0) {
            books = books.filter((book) => {
                const rating = Math.round(book.volumeInfo.averageRating || 0);
                return selectedStars.includes(rating);
            });
        }

        // Проверяем, изменились ли отфильтрованные книги
        if (JSON.stringify(filteredBooks) !== JSON.stringify(books)) {
            setFilteredBooks(books);
        }
    }, [selectedCategories, selectedStars, ResultFetch]);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const handleStarChange = (star) => {
        setSelectedStars((prev) =>
            prev.includes(star)
                ? prev.filter((item) => item !== star)
                : [...prev, star]
        );
    };

    return (
        <div className="search-page">
            <h1 className="title">Rechercher et filtrer les livres</h1>
            <div className="top-bar">
                <SearchBar />
            </div>
            <div className="content">
                <aside className="sidebar">
                    <div className="filter-item">
                        <h3>Catégories :</h3>
                        <div className="checkbox-group">
                            {categories.map((category) => (
                                <label key={category}>
                                    <input
                                        type="checkbox"
                                        value={category}
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="filter-item">
                        <h3>Étoiles :</h3>
                        <div className="checkbox-group">
                            {stars.map((star) => (
                                <label key={star}>
                                    <input
                                        type="checkbox"
                                        value={star}
                                        checked={selectedStars.includes(star)}
                                        onChange={() => handleStarChange(star)}
                                    />
                                    {star} étoile{star > 1 ? 's' : ''}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="selected-filters">
                        <h3>Filtres sélectionnés :</h3>
                        <p><strong>Catégories :</strong> {selectedCategories.join(', ') || 'Aucune'}</p>
                        <p><strong>Étoiles :</strong> {selectedStars.join(', ') || 'Aucune'}</p>
                    </div>
                </aside>

                <main className="main-content">
                    <h3>Résultats :</h3>
                    {filteredBooks.length > 0 ? (
                        <div className="book-list">
                            <BookCard array={filteredBooks} />
                        </div>
                    ) : (
                        <p>Aucun livre trouvé pour les filtres sélectionnés.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default SearchPage;