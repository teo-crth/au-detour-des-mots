import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './NoFoundPage.css';

const NoFoundPage = () => {
    return (
        <>
            < Header/>
            <div className='container'>
                <h1>Page introuvable</h1>
            </div>
            < Footer />
        </>
    );
};

export default NoFoundPage;