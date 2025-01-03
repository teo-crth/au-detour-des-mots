import React, { useState, useContext, useEffect } from 'react';
import './searchPage.css';
import SearchBar from '../../components/searchBar/SearchBar';
import { AppContext } from '../../context/context';

const SearchPage = () => {
    const { ResultFetch = [] } = useContext(AppContext);
    const [categories, setCategories] = useState([]);
    const [stars, setStars] = useState([1, 2, 3, 4, 5]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStars, setSelectedStars] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        if (ResultFetch.length > 0) {
            const allCategories = ResultFetch.flatMap(
                (book) => book.volumeInfo.categories || []
            );
            const uniqueCategories = [...new Set(allCategories)];

            setCategories((prevCategories) =>
                JSON.stringify(prevCategories) !== JSON.stringify(uniqueCategories)
                    ? uniqueCategories
                    : prevCategories
            );

            setFilteredBooks((prevBooks) =>
                JSON.stringify(prevBooks) !== JSON.stringify(ResultFetch)
                    ? ResultFetch
                    : prevBooks
            );
        }
    }, [ResultFetch]);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const handleStarsChange = (star) => {
        setSelectedStars((prev) =>
            prev.includes(star)
                ? prev.filter((item) => item !== star)
                : [...prev, star]
        );
    };

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

        setFilteredBooks((prevBooks) =>
            JSON.stringify(prevBooks) !== JSON.stringify(books) ? books : prevBooks
        );
    }, [selectedCategories, selectedStars, ResultFetch]);

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
                                <label
                                    key={category}
                                    className={
                                        selectedCategories.includes(category) ? 'active' : ''
                                    }
                                >
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

                <main className="main-content">
                    <h3>Résultats :</h3>
                    {filteredBooks.length > 0 ? (
                        <ul>
                            {filteredBooks.map((book) => (
                                <li key={book.id}>
                                    <strong>{book.volumeInfo.title}</strong> —{' '}
                                    {book.volumeInfo.categories?.join(', ')}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucun livre trouvé pour les filtres sélectionnés.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default SearchPage;