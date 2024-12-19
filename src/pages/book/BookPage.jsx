import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allBooks } from '../../utils/allBooksArray/allBooksArray';
import './BookPage.css';
import NoFoundPage from '../404/NoFoundPage';

const BookPage = () => {
    const { id } = useParams();
    const book = allBooks.find((b) => b.id == id);
    const [likes, setLikes] = useState(0);

    const placeholderImage = '../../public/images/placeholder.jpg';

    if (!book) {
        return <NoFoundPage />;
    }

    return (
        <div className="book-page">
            <h1>{book.title}</h1>
            <img src={book.image || placeholderImage} alt={book.title} />
            <p>
                <strong>Author:</strong> {book.author}
            </p>
            <p>
                <strong>Pages:</strong> {book.pages}
            </p>
            <p>
                <strong>Description:</strong> {book.description}
            </p>
            <p>
                <strong>Date de publication:</strong> {book.publishedDate}
            </p>
            <div>
                <button className="like-button" onClick={() => setLikes(likes + 1)}>
                    👍 Like {likes}
                </button>
            </div>
        </div>
    );
};

export default BookPage;