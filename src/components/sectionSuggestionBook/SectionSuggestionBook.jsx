import React from 'react';
import allBooksArray from '../../utils/allBooksArray/allBooksArray'
import BookCard from '../ui/bookCard/BookCard'
import './sectionSuggestionBook.css'

const sectionSuggestionBook = ({ book }) => {

    allBooksArray.filter((books) => books.id != book.id);
    // filtrer allbooksarray pour ne pas avoir deux livres identique dans le tableau
    const allBooksArrayUnique = allBooksArray.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.id === value.id
        ))
    );

    if (book.volumeInfo?.categories) {
        const catBook = book.volumeInfo?.categories[0];
        const sameBook = allBooksArrayUnique.filter((books) => books?.volumeInfo?.categories == catBook).filter((books) => books.id != book.id);
        console.log("Livres avec la meme categ", sameBook);
        if (sameBook.length < 1 || !catBook) {
            return (<h2 className='suggestBookTitle'>Aucune catégorie n'a été trouvée</h2>);
        }

        for (let i = 0; i < 3; i++) {
            if (sameBook[i].id === book.id) {
                sameBook.splice(i, 1);
            }
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