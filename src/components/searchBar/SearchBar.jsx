import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import Button from '../ui/Button';
import { fetchBooks } from '../../api/getBooksByQuery';
import QueryResultSection from './QueryResultSection';

const SearchBar = () => {
    const [userText, setUserText] = useState('');
    const [resultFetch, setResultFetch] = useState(null);

    const textTaping = (e) => {
        setUserText(e.target.value);
    }

    useEffect(() => {
        console.log('userText:', userText);
    }, [userText]);

    const handleSubmitSearch = async (e) => {
        e.preventDefault();
        try {
            const result = await fetchBooks(userText);
            console.log('Recherche soumise');
            console.log('Résultat:', result);
            setResultFetch(result); 
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    return (
        <>
            <div className="container-search-bar">
                <form action="submit" className='form-search-bar'>
                    <input 
                        type="text" 
                        placeholder="Rechercher un livre" 
                        className='input-search-bar' 
                        onChange={textTaping} 
                        value={userText}
                    />
                    <Button 
                        type="submit" 
                        className='button-search-bar' 
                        text="Rechercher" 
                        onClick={handleSubmitSearch} 
                    />
                </form>
            </div>
            {resultFetch ? <QueryResultSection books={resultFetch} /> : null}
        </>
    );
};

export default SearchBar;
