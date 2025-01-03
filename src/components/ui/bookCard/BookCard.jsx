import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './bookCard.css';
import { AppContext } from '../../../context/context';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const BookCard = ({ array }) => {

    const { handleLike, isLiked, setIsLiked } = useContext(AppContext);
    const placeholderImage = '../../../../public/assets/images/placeholder.jpg';
    const isInArray = (book) => {
        return isLiked.some((item) => item.id === book.id);
    }

    const handleHeartClick = (book) => {
        console.log('heart clicked');
        // Retirer le livre du tableau
        setIsLiked(isLiked.filter((item) => item.id !== book.id)); // Créer un nouveau tableau sans le livre cliqué

        // Mettre à jour le local storage
        localStorage.setItem('isLiked', JSON.stringify(isLiked.filter((item) => item.id !== book.id)));
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="star-icon" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} className="star-icon" />);
            } else {
                stars.push(<FaRegStar key={i} className="star-icon" />);
            }
        }
        return stars;
    };


    return (
        <>
        
            <div className='container-books-liked'>
                {array.map((book) => {
                    const averageRating = book?.volumeInfo?.averageRating || 0;  // Default to 0 if no rating
                    return (
                        <div className='book-card' key={book.id}>
                            {isInArray(book) ?
                                <span className='book-card__heart' onClick={() => handleHeartClick(book)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </span>
                                : null}
                            <Link to={`/book/${book.id}`} className="book-link">
                                <div className="container-img">
                                    <img src={book?.volumeInfo?.imageLinks?.thumbnail || placeholderImage} alt={`Image du livre ${book?.volumeInfo?.title}`} />
                                </div>
                                <h3 className='book-title'>{book?.volumeInfo?.title}</h3>
                                <div className="container-book-info">
                                    <p className='author-title'>Auteur(s) :</p>
                                    <div className="container-author-name">
                                        {book?.volumeInfo?.authors?.map((author) => {
                                            return (
                                                <p className='author-name'><strong>{author}</strong></p>
                                            );
                                        })}
                                    </div>
                                    <p className='rating-title'>Note :</p>
                                    <div className='rating'>{renderStars(averageRating)}</div>
                                </div>
                            </Link>
                            <Button text={isInArray(book) ? 'Ajouté !' : 'Ajouter'} onClick={isInArray(book) ? null : () => handleLike(book)} className={isInArray(book) ? "book-card-button-already-liked" : "book-card-button"} />
                        </div >
                    )
                })}
            </div >
        </>
    );
};

export default BookCard;
