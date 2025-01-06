import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import allBooks from '../../utils/allBooksArray/allBooksArray';
import './BookPage.css';
import NoFoundPage from '../404/NoFoundPage';
import Button from '../../components/ui/Button';
import { AppContext } from '../../context/context';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/fr';

dayjs.extend(localeData);
dayjs.locale('fr');

const BookPage = () => {
    const { id } = useParams();
    const book = allBooks.find((b) => b.id == id);
    const { handleLike, isLiked, setIsLiked } = useContext(AppContext);

    const isInArray = (book) => {
        return isLiked.some((item) => item.id === book.id);
    }
    const placeholderImage = '../../public/images/placeholder.jpg';

    const handleHeartClick = (book) => {
        console.log('heart clicked');
        // Retirer le livre du tableau
        setIsLiked(isLiked.filter((item) => item.id !== book.id)); // Créer un nouveau tableau sans le livre cliqué
    }

    if (!book) {
        return <NoFoundPage />;
    }

    let isFree = false;

    if (book.saleInfo.listPrice?.amount === 0) {
        return  isFree = true;
    }

    const formatPublishedDate = (date) => {
        return dayjs(date).format('dddd D MMMM YYYY'); // Format: Jour Mois Année
    };

    const handleBuyLink = () => {
        window.open(book.saleInfo.buyLink, '_blank');
    }

    return (
        <div className="book-page">
            <div className="container-the-book">
                <div className="container-img-bookPage">
                    <img className='book-img' src={book?.volumeInfo?.imageLinks?.thumbnail || placeholderImage} alt={`Image du livre ${book?.volumeInfo?.title}`} />
                    <div className="container-buttons">
                        <Button text={isInArray(book) ? 'Ajouté !' : "Ajouter à ma liste"} onClick={isInArray(book) ? null : () => handleLike(book)} className={isInArray(book) ? "book-card-button-already-liked" : "book-card-button"} />
                        {book.saleInfo.buyLink ?
                        <Button text={isFree ? "Lire" : "Acheter"} className="book-card-button" onClick={handleBuyLink}/>
                        : null}
                    </div>
                    {isInArray(book) ?
                        <span className='book-card__heart_icon' onClick={() => handleHeartClick(book)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </span>
                        : null}
                </div>
                <div className="container-book-info">
                    <h1>{book?.volumeInfo?.title}</h1>
                    <div className="authors-elements">
                        {book?.volumeInfo?.authors.map((author) => {
                            return (
                                <p className='paragraph-info-book'><strong>{author}</strong></p>
                            );
                        })}
                    </div>
                    <p className='paragraph-info-book'>{book?.volumeInfo?.pageCount} pages</p>
                    <p className='paragraph-info-book'>{formatPublishedDate(book?.volumeInfo?.publishedDate)}</p> {/* Date formatée */}
                    {book.saleInfo.listPrice?.amount ? 
                    <p className='paragraph-info-book'>{book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode}</p> : <p className='paragraph-info-book'>Prix non disponible</p>}
                </div>
                <div className="container-resume">
                    <h2>Résumé :</h2>
                    <p className='resume'>{book?.volumeInfo?.description || "Aucun résumé pour ce livre."}</p>
                </div>
            </div>
        </div>
    );
};

export default BookPage;
