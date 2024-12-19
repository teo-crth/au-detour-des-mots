import React, {useContext} from 'react';
import Button from '../Button';
import './bookCard.css';
import { AppContext } from '../../../context/context';

const BooksLiked = ({array}) => {
    
    const { handleLike, isLiked } = useContext(AppContext);

    return (
        <div className='container-books-liked'>
            { array.map((book) => {
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
                    <Button text='Ajouter' onClick={() => handleLike(book)} className="book-card-button"/>
                </div>
                )
                })
            }
        </div>
    );
};

export default BooksLiked;