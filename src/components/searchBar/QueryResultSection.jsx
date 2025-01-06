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
    const allCategories = books.flatMap(
      (book) => book.volumeInfo.categories || []
    );
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories); // Store unique categories in the state
  };

  useEffect(() => {
    if (books.length > 0) {
      findUniqueCategories(books);
    }
  }, [books]);

  // FIND RATE OF THE BOOKS (do not reset selectedStars)
  const findUniqueStars = (books) => {
    const allStars = books
      .map((book) => Math.round(book.volumeInfo.averageRating || 0))
      .filter((star) => star > 0); // Filter out 0 star ratings
    const uniqueStars = [...new Set(allStars)];
    uniqueStars.sort((a, b) => a - b);
    setSelectedStars([]); // Reset the selected stars at each new search
  };

  useEffect(() => {
    if (books.length > 0) {
      // Reset the selected categories and stars each time a new search is performed
      setSelectedCategories([]); // Reset categories
      setSelectedStars([]); // Reset stars
      findUniqueStars(books); // Find unique stars for the new set of books
      findUniqueCategories(books); // Find unique categories for the new set of books
    }
  }, [books]); // This useEffect will run every time the books change

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
