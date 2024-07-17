//body of the contact us page
import React, { useState } from 'react';
const ContactUs = () => {
    // State to hold form inputs
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  // State to hold all reviews
  const [reviews, setReviews] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { name, review };
    setReviews([...reviews, newReview]);
    // Clear form inputs
    setName('');
    setReview('');
  };
  return (
    <div className="contacts_entire_body">
      <div className="container_1">
      <form className="form" onSubmit={handleSubmit}>
      <h1 clasName="addareview">ADD A QUERY</h1>
        <label className="label" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="label" htmlFor="review">Query:</label>
        <textarea
          id="review"
          className="Review"
          rows="5"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <input type="submit" value="Submit Query" />
      </form>

      <div className="reviews">
        <h2>Submitted Queries</h2>
        <ul>
          {reviews.map((r, index) => (
            <li key={index} className="review">
              <h3>{r.name}</h3>
              <p>{r.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};
export default ContactUs;
