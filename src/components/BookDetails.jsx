import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div className="book-details">
      {/* Book details content using id */}
      <h2>Book Title: {id}</h2>
      <p>Book description goes here...</p>
      <button>Download</button>
    </div>
  );
};

export default BookDetails;
