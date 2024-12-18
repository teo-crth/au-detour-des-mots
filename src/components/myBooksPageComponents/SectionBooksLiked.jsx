import React from 'react';
import BooksLiked from './BooksLiked';

const SectionBooksLiked = () => {
    return (
        <section className='section-books-liked'>
            <h2 className='section-books-liked__title'>Livres aimés</h2>
            <div className='section-books-liked__books'>
                < BooksLiked />
            </div>
        </section>
    );
};

export default SectionBooksLiked;