import React, { useState } from 'react';
import './searchPage.css';
import SearchBar from '../../components/searchBar/SearchBar';

const SearchPage = () => {
    const [selectedCategories, setSelectedCategories] = useState([]); // Catégories sélectionnées
    const [selectedStars, setSelectedStars] = useState([]); // Étoiles sélectionnées

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

    return (
        <div className="search-page">
            <h1 className="title">Filtrer les livres</h1>
            <div className="top-bar">
                <SearchBar />
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
                    <div className="selected-filters">
                        <h3>Filtres sélectionnés :</h3>
                        <p>Catégories : {selectedCategories.join(', ') || 'Aucune'}</p>
                        <p>Étoiles : {selectedStars.join(', ') || 'Aucune'}</p>
                    </div>
                </aside>

                {/* Section droite : Contenu */}
                <main className="main-content">
                    {/* Ici les livres seront affichés */}
                </main>
            </div>
        </div>
    );
};

export default SearchPage;