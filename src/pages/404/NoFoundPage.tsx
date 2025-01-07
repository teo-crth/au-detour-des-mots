import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './NoFoundPage.css';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router';

const NoFoundPage = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/au-detour-des-mots");
    }
    return (
        <>
            <div className='container'>
                <h1>Page introuvable</h1>
                <iframe src="https://giphy.com/embed/jU9OCvBiO1besabUKU" width="480" height="269" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                <h2>Vous êtes perdu ? Félicitation vous êtes un aventurier !</h2>
                < Button onClick={() => handleBackToHome()} text="Retour à l'accueil" type="button" className="book-card-button" />
            </div>
        </>
    );
};

export default NoFoundPage;