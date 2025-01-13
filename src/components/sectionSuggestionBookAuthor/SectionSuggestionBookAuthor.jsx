import React from 'react';
import allBooksArray from '../../utils/allBooksArray/allBooksArray'
import BookCard from '../ui/bookCard/BookCard'
import './sectionSuggestionBookAuthor.css'

const sectionSuggestionBookAuthor = ({ book }) => {

    // filtrer allbooksarray pour ne pas avoir deux livres identique dans le tableau
    const allBooksArrayUnique = allBooksArray.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.id === value.id
        ))
    );    

    const catBook = book.volumeInfo?.authors[0];

    const sameBook = allBooksArrayUnique.filter((books) =>
        books.volumeInfo.authors == catBook).filter((books) =>
            books.id != book.id);

    const sameBookLimited = sameBook.slice(0, 3);

    return (
        <div>
            {sameBookLimited.length > 0 ? (
                <>
                    <h2 className='suggestBookTitle'>Livres du même auteur</h2>
                    <BookCard array={sameBookLimited} />
                </>
            ) : (
                <h2 className='suggestBookTitle'>Aucun autre livre de cet auteur n'est disponible.</h2>
            )}

        </div>
    );
};

export default sectionSuggestionBookAuthor;