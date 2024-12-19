import React from 'react';
import Button from '../Button';
import './bookCard.css';

const BooksLiked = ({array}) => {

    const handleClick = () => {
        console.log('Ajouter aux livres aimés');
    }

    return (
        <div className='container-books-liked'>
            { array.map((book) => {
                console.log('book', book);
                return (
                <div className='book-card'>
                    <div className="container-img">
                        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={`Image du livre ${book?.volumeInfo?.title}`} />
                    </div>
                    <h3 className='book-title'>{book?.volumeInfo?.title}</h3>
                    <div className="container-book-info">
                    <p className='author-title'>Auteur(s)</p>
                    <p className='author-name'>{book?.volumeInfo?.authors}</p>
                    </div>
                    <Button text='Ajouter' onClick={handleClick} className="book-card-button"/>
                </div>
                )
                })
            }
        </div>
    );
};

export default BooksLiked;