//body of vendors page
import React, {useState} from 'react';

const VendorRegistration = () => {
    //State to hold form inputs
    const [name, setName] = useState('');
    const [eventType, setEventType] = useState('');
    const [services, setServices] = useState('');
    const [description, setDescription] = useState('');
    //Handling form submissions
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {name, eventType, services, description};
        console.log(formData);
        //clear input after submission
        setName('');
        setEventType('');
        setServices('');
        setDescription('');
    };
    return (
        <div className="container_body">
            <h1>Vendor Registration</h1>
            <form className="form_vendors"onSubmit={handleSubmit}>
                <label className="lbl_vendors" htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="vendorName"
                    name="vendorName"
                    value={name}   
                    onChange={(e) => setName(e.target.value)}
                    required             
                />

                <label  className="lbl_vendors" htmlFor="event_type">Type of Event</label>
                <select
                    id="event_type"
                    name="event_type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    required
                >
                    <option value="birthday">Birthday Party</option>
                    <option value="wedding">Wedding Ceremony</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="concert">Concert</option>
                    <option value="picnic">Picnic</option>
                    <option value="gathering">Social gATHERING</option>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="other">Other</option>
                </select>

                <label  className="lbl_vendors" htmlFor="services">Services/Products Provided:</label>
                <input
                    type="text"
                    id="services"
                    name="services"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    required
                />

                <label  className="lbl_vendors" htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                >
                </textarea>

                <input type="submit" value="Register"/>
            </form>
        </div>
    );
};
export default VendorRegistration;