import React from 'react';
import allBooksArray from '../../utils/allBooksArray/allBooksArray'
import BookCard from '../ui/bookCard/BookCard'
import './sectionSuggestionBook.css'

const sectionSuggestionBook = ({ book }) => {

    if (book.volumeInfo?.categories) {
        console.log(book)
        const catBook = book.volumeInfo?.categories[0];
        console.log('zdhdziuhdziuhzkdizo', catBook);
        const sameBook = allBooksArray.filter((books) => books?.volumeInfo?.categories == catBook).filter((books) => books.id != book.id);
        console.log(sameBook);
        if (sameBook.length < 1 || !catBook) {
            return (<h2 className='suggestBookTitle'>Aucune catégorie n'a été trouvée</h2>);
        }

        const randomIndex1 = Math.floor(Math.random() * sameBook.length) + 1;
        const randomIndex2 = Math.floor(Math.random() * sameBook.length) + 1;
        const randomIndex3 = Math.floor(Math.random() * sameBook.length) + 1;
        const sameBookLimited = [sameBook[randomIndex1], sameBook[randomIndex2], sameBook[randomIndex3]];

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