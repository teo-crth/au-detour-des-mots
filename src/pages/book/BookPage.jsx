import React from 'react';
import { useParams } from 'react-router-dom';

const BookPage = () => {
  const { id } = useParams(); // id URL

  return (
    <div>
      <h1>Page detaille du livre</h1>
      <p>Livre ID: {id}</p>
      {/* Les donnes de la book */}
    </div>
  );
};

export default BookPage;