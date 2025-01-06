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
    setFilteredBooks,
  } = useContext(AppContext);

  // FIND CATEGORIES OF THE BOOKS AND SAVE IT IN STATE
  const findUniqueCategories = (books) => {
    const allCategories = books.map(
      (book) => book.volumeInfo.categories || []
    );
    const uniqueCategories = [...new Set(allCategories.flat())];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    findUniqueCategories(books);
  }, [books]);

  // FIND RATE OF THE BOOKS (don't reset selectedStars here)
  const findUniqueStars = (books) => {
    const allStars = books.map((book) =>
      Math.round(book.volumeInfo.averageRating || 0)
    );
    const uniqueStars = [...new Set(allStars)];
    uniqueStars.sort((a, b) => a - b);
    setSelectedStars(uniqueStars);  // Update available stars to select
  };

  useEffect(() => {
    findUniqueStars(books);
  }, [books]);

  useEffect(() => {
    filterBooks(books);
  }, [selectedCategories, selectedStars, books]); // Ensure this runs when these dependencies change

  // Filtering books based on selected categories and star ratings
  const filterBooks = (books) => {
    let filteredBooks = books;

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        (book.volumeInfo.categories || []).some((cat) =>
          selectedCategories.includes(cat)
        )
      );
    }

    // Filter by selected star ratings
    if (selectedStars.length > 0) {
      filteredBooks = filteredBooks.filter((book) => {
        const rating = Math.round(book.volumeInfo.averageRating || 0);
        return selectedStars.includes(rating);
      });
    }

    // Set the filtered books in state
    setFilteredBooks(filteredBooks);
  };

  console.log('Filtres appliqués :', selectedCategories, selectedStars);
  console.log('Livres filtrés :', filteredBooks);

  return (
    <div className='container-query-result'>
      {/* Display filtered books */}
      <BookCard array={filteredBooks} />
    </div>
  );
};

export default QueryResultSection;
