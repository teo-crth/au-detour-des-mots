import React, { useContext, useEffect } from 'react';
import './searchPage.css';
import SearchBar from '../../components/searchBar/SearchBar';
import { AppContext } from '../../context/context';

const SearchPage = () => {
    const {
        categories,
        setCategories,
        resultFetch,
        selectedCategories,
        setSelectedCategories,
        selectedStars,
        setSelectedStars,
        filteredBooks,
        setFilteredBooks
    } = useContext(AppContext);

    // Handle star rating selection
    const handleStarChange = (star) => {
        setSelectedStars((prev) =>
            prev.includes(star)
                ? prev.filter((item) => item !== star)  // Remove star
                : [...prev, star]  // Add star
        );
    };

    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)  // Remove category
                : [...prev, category]  // Add category
        );
    };

    // Calculate number of books in each category
    const getCategoryCount = (category) => {
        if (resultFetch && Array.isArray(resultFetch)) {
            return resultFetch.filter((book) =>
                (book.volumeInfo.categories || []).includes(category)
            ).length;
        }
        return 0;  // Return 0 if resultFetch is null or not an array
    };

    // Calculate number of books in each star rating
    const getStarCount = (star) => {
        if (resultFetch && Array.isArray(resultFetch)) {
            return resultFetch.filter((book) => {
                const rating = Math.round(book.volumeInfo.averageRating || 0);
                return rating === star;
            }).length;
        }
        return 0;  // Return 0 if resultFetch is null or not an array
    };

    return (
        <div className="search-page">
            <h1 className="title">Rechercher et filtrer les livres</h1>
            <div className="content">
                <aside className="sidebar">
                    <div className="filter-item">
                        <h3>Catégories :</h3>
                        <div className="checkbox-group">
                            {categories.map((category) => (
                                <div className="containerInput" key={category}>
                                    <input
                                        type="checkbox"
                                        value={category}
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    <label className='label-categoriesFilter'>{category} <span className='numberOfBooks'>({getCategoryCount(category)})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="filter-item">
                        <h3>Notes :</h3>
                        <div className="checkbox-group">
                            {/* Display all available star ratings */}
                            {[0, 1, 2, 3, 4, 5].map((star) => (
                                <label key={star}>
                                    <input
                                        type="checkbox"
                                        value={star}
                                        checked={selectedStars.includes(star)}
                                        onChange={() => handleStarChange(star)}
                                    />
                                    {star} étoile{star > 1 ? 's' : ''} <span className='numberOfBooks'>({getStarCount(star)})</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="main-content">
                    <SearchBar />
                </main>
            </div>
        </div>
    );
};

export default SearchPage;
