import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allBooks } from '../../utils/allBooksArray/allBooksArray';
import './BookPage.css';
import NoFoundPage from '../404/NoFoundPage';
import Button from '../../components/ui/Button';

const BookPage = () => {
    const { id } = useParams();
    const book = allBooks.find((b) => b.id == id);
    const [likes, setLikes] = useState(0);

    const placeholderImage = '../../public/images/placeholder.jpg';

    if (!book) {
        return <NoFoundPage />;
    }
    console.log('book', book.volumeInfo);
    return (
        <div className="book-page">
            <h1>{book?.volumeInfo?.title}</h1>
            <img src={book?.volumeInfo?.imageLinks?.thumbnail || placeholderImage} alt={`Image du livre ${book?.volumeInfo?.title}`} />
            <p>
                <strong>Author:</strong> {book?.volumeInfo?.authors}
            </p>
            <p>
                <strong>Pages:</strong> {book?.volumeInfo?.pageCount}
            </p>
            <p>
                <strong>Description:</strong> {book?.volumeInfo?.description}
            </p>
            <p>
                <strong>Date de publication:</strong> {book?.volumeInfo?.publishedDate}
            </p>
            <div>
                <Button text="Ajouter" className="like-button"/> 
            </div>
        </div>
    );
};

export default BookPage;