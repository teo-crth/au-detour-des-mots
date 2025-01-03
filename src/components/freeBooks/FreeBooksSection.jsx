import React from 'react';
import BookCard from '../ui/bookCard/BookCard';
import allBooksArray from '../../utils/allBooksArray/allBooksArray';
import './freeBooksSection.css';

const FreeBooksSection = () => {
    const freeBooksArray = allBooksArray.filter(book => book.saleInfo?.listPrice?.amount === 0);


    return (
        <div>
            <h2 className="freeBooks-title">Livres Gratuits</h2>
            < BookCard array={freeBooksArray} free={true}/>
        </div>
    );
};

export default FreeBooksSection;