import React, { useContext } from 'react';
import SectionBooksLiked from '../../components/myBooksPageComponents/SectionBooksLiked';
import {AppContext, AppProvider} from '../../context/context';
import './MyBooksPage.css';

const MyBooksPage = () => {

    const { isLiked } = useContext(AppContext);
    console.log('isLiked longueur', isLiked.length);
    

    return (
    <>
        <h1 className='mybooks-title'>Mes livres favoris</h1>
        {isLiked.length === 0 ? (
            <p className='mybooks-empty'>Vous n'avez pas encore de livres aimés</p>
        ) : (
            <SectionBooksLiked />
        )}
    </>
    );
};

export default MyBooksPage;