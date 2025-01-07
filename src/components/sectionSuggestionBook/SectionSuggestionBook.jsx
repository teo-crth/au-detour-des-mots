import React from 'react';
import allBooksArray from '../../utils/allBooksArray/allBooksArray'
import BookCard from '../ui/bookCard/BookCard'
import './sectionSuggestionBook.css'

const sectionSuggestionBook = ({ book }) => {
    const catBook = book.volumeInfo?.categories[0];
    const sameBook = allBooksArray.filter((books) => books.volumeInfo.categories == catBook).filter((books) => books.id != book.id);
    /*const sameBookLimited = sameBook.slice(0, 3);*/

    const randomIndex1 = Math.floor(Math.random() * sameBook.length) + 1;
    const randomIndex2 = Math.floor(Math.random() * sameBook.length) + 1;
    const randomIndex3 = Math.floor(Math.random() * sameBook.length) + 1;
    const sameBookLimited = [sameBook[randomIndex1], sameBook[randomIndex2], sameBook[randomIndex3]];
    console.log(sameBookLimited);

    return (
        <div>
            <h2 className='suggestBookTitle'>Livres suggérés</h2>
            <BookCard array={sameBookLimited} />

        </div>
    );
};

export default sectionSuggestionBook;