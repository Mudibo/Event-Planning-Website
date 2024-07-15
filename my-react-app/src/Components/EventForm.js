import React, { useEffect, useState } from 'react';

const EventForm = () => {
    const [eventType, setEventType] = useState('wedding'); // Default event type
    const [formContent, setFormContent] = useState(null);
    const [showPaymentForm, setShowPaymentForm] = useState(false); // State for payment form visibility

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const event = urlParams.get('event') || 'wedding'; // Default to 'wedding'
        setEventType(event);
    }, []);

    useEffect(() => {
        const forms = {
            wedding: (
                <div className="form-content" id="weddingPoster">
                    <form id="weddingForm" onSubmit={handleSubmit}>
                        <div>
                            <label>Bride's Name:</label>
                            <input type="text" name="brideName" required />
                        </div>
                        <div>
                            <label>Groom's Name:</label>
                            <input type="text" name="groomName" required />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input type="date" name="date" required />
                        </div>
                        <div>
                            <label>Venue:</label>
                            <input type="text" name="venue" required />
                        </div>
                        <div>
                            <label>Number of Guests:</label>
                            <input type="number" name="guests" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ),
            birthday: (
                <div className="form-content" id="birthdayPoster">
                    <form id="birthdayForm" onSubmit={handleSubmit}>
                        <div>
                            <label>Birthday Person's Name:</label>
                            <input type="text" name="name" required />
                        </div>
                        <div>
                            <label>Age:</label>
                            <input type="number" name="age" required />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input type="date" name="date" required />
                        </div>
                        <div>
                            <label>Venue:</label>
                            <input type="text" name="venue" required />
                        </div>
                        <div>
                            <label>Number of Guests:</label>
                            <input type="number" name="guests" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ),
            corporate: (
                <div className="form-content" id="corporatePoster">
                    <form id="corporateForm" onSubmit={handleSubmit}>
                        <div>
                            <label>Company Name:</label>
                            <input type="text" name="companyName" required />
                        </div>
                        <div>
                            <label>Event Title:</label>
                            <input type="text" name="eventTitle" required />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input type="date" name="date" required />
                        </div>
                        <div>
                            <label>Venue:</label>
                            <input type="text" name="venue" required />
                        </div>
                        <div>
                            <label>Number of Attendees:</label>
                            <input type="number" name="attendees" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ),
            concert: (
                <div className="form-content" id="concertPoster">
                    <form id="concertForm" onSubmit={handleSubmit}>
                        <div>
                            <label>Artist/Band Name:</label>
                            <input type="text" name="artistName" required />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input type="date" name="date" required />
                        </div>
                        <div>
                            <label>Venue:</label>
                            <input type="text" name="venue" required />
                        </div>
                        <div>
                            <label>Number of Attendees:</label>
                            <input type="number" name="attendees" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        };

        setFormContent(forms[eventType]);
    }, [eventType]);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        setShowPaymentForm(true); // Show the payment form after submitting
    };

    return (
        <div id="event-form">
            <h1 id="event-title">{eventType.toUpperCase()}</h1>
            {formContent}
            {showPaymentForm && (
                <div id="payment-form">
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
            )}
            <div>
                <label>Select Event Type:</label>
                <select onChange={(e) => setEventType(e.target.value)} value={eventType}>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate</option>
                    <option value="concert">Concert</option>
                </select>
            </div>
        </div>
    );
};

export default EventForm;
