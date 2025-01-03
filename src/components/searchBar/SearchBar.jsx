import React, { useState, useEffect, useContext } from 'react';
import './SearchBar.css';
import Button from '../ui/Button';
import { fetchBooks } from '../../api/getBooksByQuery';
import QueryResultSection from './QueryResultSection';
import {addBooksToArray} from '../../utils/allBooksArray/addBooksToArray';
import { AppContext } from '../../context/context';

const SearchBar = () => {
    const [userText, setUserText] = useState('');
    const {resultFetch, setResultFetch } = useContext(AppContext);


    const textTaping = (e) => {
        setUserText(e.target.value);
    }

    useEffect(() => {
        console.log('userText:', userText);
    }, [userText]);

    const handleSubmitSearch = async (e) => {
        e.preventDefault();
        try {
            setUserText("");
            const result = await fetchBooks(userText);
            console.log('Recherche soumise');
            console.log('Résultat:', result);
            setResultFetch(result);
            addBooksToArray(result);

        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmitSearch(e);
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
