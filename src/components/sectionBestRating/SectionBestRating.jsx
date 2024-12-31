import React, { useState } from 'react';
import allBooks from '../../utils/allBooksArray/allBooksArray';
import './sectionBestRating.css';
import BookCard from '../ui/bookCard/BookCard';

const sectionBestRating = () => {
    console.log('allBooks', allBooks);

    // Filtrer les livres qui ont une date de publication
    const filteredBooks = allBooks.filter((book) => {
        return book.volumeInfo.averageRating; // On s'assure que la note existe et n'est pas vide
    });

    // Trier les livres par note (rating) (les plus élevés en premier)
    const sortedBooks = filteredBooks.sort((a, b) => {
        const dateA = new Date(a.volumeInfo.averageRating);
        const dateB = new Date(b.volumeInfo.averageRating);
        return dateB - dateA; // Descendant
    });


    // Conserver les 10 premières entrées
    const bestRating = sortedBooks.slice(0, 10);

    return (
        <section>
            <h2>Les mieux notés</h2>
            <BookCard array={bestRating} />

        </section>
    )


}


export default sectionBestRating;