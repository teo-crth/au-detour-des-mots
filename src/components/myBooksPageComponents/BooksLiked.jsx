import React, { useContext } from 'react';
import './booksLiked.css';
import booksLikedArray from '../../utils/allBooksArray/booksLikedArray';
import BookCard from '../ui/bookCard/BookCard';
import { AppContext } from '../../context/context';


const BooksLiked = () => {

    const { isLiked } = useContext(AppContext);

    return (
        <div className='container-books-liked'>
            < BookCard array={isLiked} />
        </div>
    );
};

export default BooksLiked;