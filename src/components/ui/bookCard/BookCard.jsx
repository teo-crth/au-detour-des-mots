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
                        <img src={book?.items[0].volumeInfo?.imageLinks?.thumbnail} alt={`Image du livre ${book?.items[0]?.volumeInfo?.title}`} />
                    </div>
                    <h3 className='book-title'>{book?.items[0]?.volumeInfo?.title}</h3>
                    <div className="container-book-info">
                    <p className='author-title'>Autheur(s)</p>
                    <p className='author-name'>{book?.items[0]?.volumeInfo?.authors}</p>
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