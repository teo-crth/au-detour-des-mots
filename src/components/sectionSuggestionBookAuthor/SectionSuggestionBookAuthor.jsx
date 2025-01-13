import React from 'react';
import allBooksArray from '../../utils/allBooksArray/allBooksArray'
import BookCard from '../ui/bookCard/BookCard'
import './sectionSuggestionBookAuthor.css'

const sectionSuggestionBookAuthor = ({ book }) => {


    // Filtrer allBooksArray pour ne pas avoir de doublons et exclure le livre actuel
    const allBooksArrayUnique = allBooksArray.filter((value, index, self) =>
        index === self.findIndex((t) => t.id === value.id)
    ).filter((bookItem) => bookItem.id !== book.id); // Exclure le livre actuel

    const authorsOfBook = book.volumeInfo?.authors || [];

    // Comparer les auteurs entre deux livres
    const compareAuthors = (bookAuthors) => {
        return bookAuthors.filter(author => authorsOfBook.includes(author)).length;
    };

    let sameAuthorBooks = [];

    // Trouver tous les livres ayant le même nombre d'auteurs communs
    for (let i = authorsOfBook.length; i >= 1; i--) {
        const filteredBooks = allBooksArrayUnique.filter((bookItem) => {
            const commonAuthorsCount = compareAuthors(bookItem?.volumeInfo?.authors || []);
            return commonAuthorsCount === i;
        });

        sameAuthorBooks = sameAuthorBooks.concat(filteredBooks);

        // Si nous avons trouvé des livres, on peut arrêter ici
        if (sameAuthorBooks.length > 0) {
            break;
        }
    }

    return (
        <div>
            {sameAuthorBooks.length > 0 ? (
                <>
                    <h2 className='suggestBookTitle'>Livres du même auteur</h2>
                    <BookCard array={sameAuthorBooks} />
                </>
            ) : (
                <h2 className='suggestBookTitle'>Aucun autre livre de cet auteur n'est disponible.</h2>
            )}

        </div>
    );
};

export default sectionSuggestionBookAuthor;