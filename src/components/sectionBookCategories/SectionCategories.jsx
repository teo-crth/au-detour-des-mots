import React from 'react';
import allBooks from '../../utils/allBooksArray/allBooksArray'; // Ton tableau de livres
import './sectionCategories.css';

const SectionCategories = () => {
    console.log('allBooks', allBooks);

    // Filtrer les livres qui ont une catégorie valide
    const filteredBooks = allBooks.filter((book) => {
        console.log("book", book); // Affiche chaque livre pour vérifier sa structure
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

    return (
        <section>
            <h2>Top 10 des genres Littéraires</h2>
            <div className='container-book-categories'>
                {topCategories.map((category) => (
                    <div key={category} className='book-category'>
                        <h3>{category}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionCategories;
