import React, { useState } from 'react';

const ReviewBody = () => {
  // State to hold form inputs
  const [name, setName] = useState('');
  const [rating, setRating] = useState('⭐⭐⭐⭐⭐');
  const [review, setReview] = useState('');
  // State to hold all reviews
  const [reviews, setReviews] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { name, rating, review };
    setReviews([...reviews, newReview]);
    // Clear form inputs
    setName('');
    setRating('⭐⭐⭐⭐⭐');
    setReview('');
  };

  return (
    <div className="container">
      <h1>ADD A REVIEW</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐ - Excellent</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐ - Very Good</option>
          <option value="⭐⭐⭐">⭐⭐⭐ - Good</option>
          <option value="⭐⭐">⭐⭐ - Fair</option>
          <option value="⭐">⭐ - Poor</option>
        </select>

        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          rows="5"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <input type="submit" value="Submit Review" />
      </form>

      <div className="reviews">
        <h2>Submitted Reviews</h2>
        <ul>
          {reviews.map((r, index) => (
            <li key={index} className="review">
              <h3>{r.name}</h3>
              <p>{r.rating}</p>
              <p>{r.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewBody;
