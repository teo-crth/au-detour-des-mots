import React, { useState } from 'react';
import allBooks from '../../utils/allBooksArray/allBooksArray';
import BookCard from '../../components/ui/bookCard/BookCard';
import './searchPage.css';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault(); // Previent the default recharging la page
        setLoading(true);
        setError(null);
        try {
            const results = await fetchBooks(query);
            setBooks(results);
        } catch (err) {
            setError('Error chargement, essayer plus tard');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-page">
            <h1>Recherche la votre livre</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Tapez le nom du livre"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Recherche</button>
            </form>
            {loading && <p>Chargement...</p>}
            {error && <p className="error">{error}</p>}
            <div className="books-container">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;