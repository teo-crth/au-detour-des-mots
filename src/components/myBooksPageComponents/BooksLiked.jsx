import React from 'react';
import Button from '../Button';
import './booksLiked.css';

const BooksLiked = () => {

    const handleClick = () => {
        console.log('Ajouter aux livres aimés');
    }

    return (
        <div className='container-books-liked'>
            <div className='book-card'>
                <div className="container-img">
                    <img src='http://books.google.com/books/content?id=dd7wEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' alt='book cover' />
                </div>
                <h3>Le jardin de l'oubli</h3>
                <div className="container-book-info">
                <p className='author-tilte'>Auteur</p>
                <p className='author-name'>Auteur name</p>
                <Button text='Ajouter' onClick={handleClick} className="book-card-button"/>

                </div>
            </div>
        </div>
    );
};

export default BooksLiked;