import React from 'react';
import BooksLiked from './BooksLiked';
import './sectionBooksLiked.css';

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