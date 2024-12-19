import React, { useContext } from 'react';
import SectionBooksLiked from '../../components/myBooksPageComponents/SectionBooksLiked';
import {AppContext, AppProvider} from '../../context/context';
import './MyBooksPage.css';

const MyBooksPage = () => {

    const { isLiked } = useContext(AppContext);

    return (
    <>
        <h1 className='mybooks-title'>Mes livres</h1>
        {isLiked.length - 1 === 0 ? (
            <p className='mybooks-empty'>Vous n'avez pas encore de livres aimés</p>
        ) : (
            <SectionBooksLiked />
        )}
    </>
    );
};

export default MyBooksPage;