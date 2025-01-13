import React from 'react';
import allBooksArray from '../../utils/allBooksArray/allBooksArray'
import BookCard from '../ui/bookCard/BookCard'
import './sectionSuggestionBook.css'

const sectionSuggestionBook = ({ book }) => {
    // Filtrer les livres pour ne pas inclure le livre actuel et obtenir des livres uniques
    const allBooksArrayUnique = allBooksArray.filter((value, index, self) =>
        index === self.findIndex((t) => t.id === value.id)
    ).filter((bookItem) => bookItem.id !== book.id); // Exclure le livre actuel

    if (book.volumeInfo?.categories) {
        const catBook = book.volumeInfo?.categories;  // Toutes les catégories du livre
        let sameCategoryBooks = [];

        // Comparer les livres en fonction du nombre de catégories communes
        const compareCategories = (bookCategories) => {
            return bookCategories.filter(category => catBook.includes(category)).length;
        };

        // Trouver tous les livres ayant 3 catégories communes, 2 catégories communes, etc.
        for (let i = 3; i >= 1; i--) {
            // Filtrer les livres ayant exactement `i` catégories en commun
            const filteredBooks = allBooksArrayUnique.filter((bookItem) => {
                const commonCategoriesCount = compareCategories(bookItem?.volumeInfo?.categories || []);
                return commonCategoriesCount === i;
            });

            // Ajouter les livres filtrés à `sameCategoryBooks`
            sameCategoryBooks = sameCategoryBooks.concat(filteredBooks);

            // Si nous avons trouvé 3 livres ou plus, on arrête
            if (sameCategoryBooks.length >= 3) {
                break;
            }
        }

        console.log("Livres avec les mêmes catégories (ou similaires)", sameCategoryBooks);

        // Si moins de 3 livres sont trouvés
        if (sameCategoryBooks.length < 1 || !catBook) {
            return <h2 className='suggestBookTitle'>Aucune catégorie n'a été trouvée</h2>;
        }

        // Limiter à 3 livres au hasard (en prenant au plus 3 livres)
        const sameBookLimited = [];
        const maxBooksToShow = Math.min(3, sameCategoryBooks.length); // S'assurer qu'on ne dépasse pas le nombre de livres disponibles

        while (sameBookLimited.length < maxBooksToShow) {
            const randomIndex = Math.floor(Math.random() * sameCategoryBooks.length);
            const randomBook = sameCategoryBooks[randomIndex];

            // Si ce livre n'est pas déjà dans la liste des livres suggérés, on l'ajoute
            if (!sameBookLimited.includes(randomBook)) {
                sameBookLimited.push(randomBook);
            }
        }

        return (
            <div>
                <h2 className='suggestBookTitle'>Livres suggérés</h2>
                <BookCard array={sameBookLimited} />
            </div>
        );
    } else {
        return (<h2 className='suggestBookTitle'>Aucune catégorie n'a été trouvée</h2>);
    }

};

export default sectionSuggestionBook;