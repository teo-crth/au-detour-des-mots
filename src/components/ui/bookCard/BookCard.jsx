import React, { useContext } from 'react';
import Button from '../Button';
import './bookCard.css';
import { AppContext } from '../../../context/context';


const BooksLiked = ({ array }) => {

    const { handleLike, isLiked, setIsLiked } = useContext(AppContext);

    const isInArray = (book) => {
        return isLiked.some((item) => item.id === book.id);
    }

    const handleHeartClick = (book) => {
        console.log('heart clicked');
        // Retirer le livre du tableau
        setIsLiked(isLiked.filter((item) => item.id !== book.id)); // Créer un nouveau tableau sans le livre cliqué
    }

    return (
        <div className='container-books-liked'>
            {array.map((book) => {
                return (
                    <div className='book-card'>
                        {isInArray(book) ? 
                        <span className='book-card__heart' onClick={() => handleHeartClick(book)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </span>
                        : null}
                        <div className="container-img">
                            <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={`Image du livre ${book?.volumeInfo?.title}`} />
                        </div>
                        <h3 className='book-title'>{book?.volumeInfo?.title}</h3>
                        <div className="container-book-info">
                            <p className='author-title'>Auteur(s)</p>
                            <p className='author-name'>{book?.volumeInfo?.authors}</p>
                        </div>
                        <Button text={isInArray(book) ? 'Ajouté !' : 'Ajouter'} onClick={isInArray(book) ? null : () => handleLike(book) } className={isInArray(book) ? "book-card-button-already-liked" : "book-card-button"} />
                    </div>
                )
            })
            }
        </div>
    );
};

export default BooksLiked;