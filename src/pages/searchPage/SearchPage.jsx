import React, { useState } from 'react';
import './searchPage.css';

const SearchPage = () => {
    // États pour stocker les valeurs des filtres
    const [category, setCategory] = useState(''); // Catégorie sélectionnée
    const [stars, setStars] = useState(''); // Nombre d'étoiles sélectionnées

    return (
        <div className="search-page">
            <h1>Filtrer les livres</h1> {/* Titre principal */}
            <div className="filter-container">
                {/* Champ de sélection pour filtrer par catégorie */}
                <div className="filter-item">
                    <label htmlFor="category">Recherche par catégorie :</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Toutes les catégories</option>
                        <option value="fiction">Fiction</option>
                        <option value="science">Science</option>
                        <option value="history">Histoire</option>
                        <option value="fantasy">Fantastique</option>
                    </select>
                </div>

                {/* Champ de sélection pour filtrer par nombre d'étoiles */}
                <div className="filter-item">
                    <label htmlFor="stars">Filtrer par étoiles :</label>
                    <select
                        id="stars"
                        value={stars}
                        onChange={(e) => setStars(e.target.value)}
                    >
                        <option value="">Toutes les évaluations</option>
                        <option value="1">1 étoile</option>
                        <option value="2">2 étoiles</option>
                        <option value="3">3 étoiles</option>
                        <option value="4">4 étoiles</option>
                        <option value="5">5 étoiles</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;