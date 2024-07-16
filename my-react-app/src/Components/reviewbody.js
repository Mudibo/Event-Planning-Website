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
    <div className="container_1">
      <form className="form" onSubmit={handleSubmit}>
      <h1 clasName="addareview">ADD A REVIEW</h1>
        <label className="label" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="label" htmlFor="rating">Rating:</label>
        <select
          id="rating"
          className="Rating"
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

        <label className="label" htmlFor="review">Review:</label>
        <textarea
          id="review"
          className="Review"
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
