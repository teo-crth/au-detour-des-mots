import React, { useState } from 'react';
import allBooks from '../../utils/allBooksArray/allBooksArray';
import './sectionCategories.css';
import BookCard from '../ui/bookCard/BookCard';

const SectionCategories = () => {
    // Filtrer les livres qui ont une catégorie valide
    const filteredBooks = allBooks.filter((book) => {
        return book.volumeInfo.categories && book.volumeInfo.categories[0]; // On s'assure que categories existe et n'est pas vide
    });

    // Compter le nombre de livres pour chaque catégorie
    const categoryCount = filteredBooks.reduce((acc, book) => {
        const category = book.volumeInfo.categories[0]; // Prendre la première catégorie
        acc[category] = acc[category] ? acc[category] + 1 : 1; // Incrémenter le nombre de livres pour cette catégorie
        return acc;
    }, {});

    // Trier les catégories par le nombre de livres, et prendre les 10 premières
    const topCategories = Object.entries(categoryCount) // Transformer en tableau de [clé, valeur]
        .sort((a, b) => b[1] - a[1]) // Trier par nombre de livres (décroissant)
        .slice(0, 10) // Prendre les 10 premières
        .map((entry) => entry[0]); // Extraire uniquement les catégories (les clés)

    // Gérer l'état de la catégorie sélectionnée
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Ajouter un état pour les livres de la catégorie sélectionnée
    const [filteredBooksForCategory, setFilteredBooksForCategory] = useState([]);

    // Fonction pour gérer le clic sur une catégorie
    const handleClick = (category) => {
        // Si la catégorie est déjà sélectionnée, la désélectionner (sinon, sélectionner cette catégorie)
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setFilteredBooksForCategory([]); // Réinitialiser les livres affichés
        } else {
            setSelectedCategory(category);
            // Mettre à jour les livres affichés pour cette catégorie
            setFilteredBooksForCategory(filteredBooks.filter((book) => book.volumeInfo.categories[0] === category));
        }
    };

    return (
        <section>
            <h2>Top 10 des genres Littéraires</h2>
            <div className='container-book-categories'>
                {topCategories.map((category) => (
                    <div key={category}>
                        <div className='book-category' onClick={() => handleClick(category)}>
                            <h3>{category}</h3>
                        </div>
                    </div>
                ))}

                {/* Afficher les livres de la catégorie sélectionnée en dessous de toutes les catégories */}
                {selectedCategory && (
                    <div className="book-list">
                        <BookCard array={filteredBooksForCategory} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default SectionCategories;
