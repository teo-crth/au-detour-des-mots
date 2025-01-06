import React, { useContext, useEffect } from 'react';
import './QueryResultSection.css';
import BookCard from '../ui/bookCard/BookCard';
import { AppContext } from '../../context/context';

const QueryResultSection = ({ books }) => {

    const {
        categories,
        setCategories,
        selectedCategories,
        setSelectedCategories,
        selectedStars,
        setSelectedStars,
        filteredBooks,
        setFilteredBooks
    } = useContext(AppContext);

    const findUniqueCategories = (books) => {
        const allCategories = books.map(
            (book) => book.volumeInfo.categories || []
        );

        const uniqueCategories = [...new Set(allCategories.flat())];
        console.log('uniqueCategories:', uniqueCategories);
        
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        findUniqueCategories(books);
    }, [books]); // Quand 'books' change, réexécute la fonction

    console.log('categories:', categories);
    return (
        <div className='container-query-result'>
            <BookCard array={books} />
        </div>
    );
};

export default QueryResultSection;
