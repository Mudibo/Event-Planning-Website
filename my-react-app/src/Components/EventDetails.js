import React from 'react';
import EventForm from './EventForm';

const EventDetails = () => {
  return (
    <div className="event_body_content">
      <main>
        <h2 id="event-title">Event Details</h2>
        
        <div id="form-container">
          <div id="event-form">
            <EventForm />
          </div>
          <div id="payment-form" style={{ display: 'none' }}>
            <h2>Payment Details</h2>
            <form id="payment-details-form">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" required /><br /><br />
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" id="expiryDate" name="expiryDate" required /><br /><br />
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" required /><br /><br />
              <button type="submit">Submit Payment</button>
            </form>
          </div>
          <div id="success-message" style={{ display: 'none' }}>
            <h2>Event Planned Successfully!</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;

