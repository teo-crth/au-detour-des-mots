import React from 'react';
import './QueryResultSection.css';
import BookCard from '../ui/bookCard/BookCard';

const QueryResultSection = ({books}) => {
    return (
        <div className='container-query-result'>
            < BookCard array={books} />
        </div>
    );
};

export default QueryResultSection;