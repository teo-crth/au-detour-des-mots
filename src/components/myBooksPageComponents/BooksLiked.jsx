import React from 'react';
import './booksLiked.css';
import booksLikedArray from '../../utils/allBooksArray/booksLikedArray';

const BooksLiked = () => {

    const handleClick = () => {
        console.log('Ajouter aux livres aimés');
    }

    return (
        <div className='container-books-liked'>
            < BookCard array={booksLikedArray} />
        </div>
    );
};

export default BooksLiked;