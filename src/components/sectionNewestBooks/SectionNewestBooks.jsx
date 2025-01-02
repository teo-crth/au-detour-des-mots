import React, { useState } from 'react';
import allBooks from '../../utils/allBooksArray/allBooksArray';
import './sectionNewestBooks.css';
import BookCard from '../ui/bookCard/BookCard';

const sectionNewestBooks = () => {
    // Filtrer les livres qui ont une date de publication
    const filteredBooks = allBooks.filter((book) => {
        return book.volumeInfo.publishedDate && book.volumeInfo.publishedDate[0]; // On s'assure que la date de publication existe et n'est pas vide
    });

    // Trier les livres par date de publication (les plus récentes en premier)
    const sortedBooks = filteredBooks.sort((a, b) => {
        const dateA = new Date(a.volumeInfo.publishedDate);
        const dateB = new Date(b.volumeInfo.publishedDate);
        return dateB - dateA; // Descendant
    });


    // Conserver les 10 premières entrées
    const newestBooks = sortedBooks.slice(0, 5);

    return (
        <section>
            <h2 className='section-title'>Les 5 dernières publications</h2>
            <BookCard array={newestBooks} />
        </section>
    )


}


export default sectionNewestBooks;