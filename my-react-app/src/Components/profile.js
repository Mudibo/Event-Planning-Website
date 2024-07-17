import React, { useEffect, useState } from 'react';
import { ref, query, orderByChild, equalTo, get, update } from 'firebase/database';
import { database } from '../firebase';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [userData, setUserData] = useState({});
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));

  useEffect(() => {
    if (userEmail) {
      const userRef = query(ref(database, "EventManagement"), orderByChild("emailid"), equalTo(userEmail));
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            setUserData(childSnapshot.val());
          });
        } else {
          console.error("User data not found.");
        }
      }).catch((error) => {
        console.error(error);
      });
    } else {
      window.location.href = "/login";
    }
  }, [userEmail]);

  const tabs = ["Personal Info", "Events Info", "Payment Info", "Privacy Settings", "Account Settings"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <PersonalInfo userData={userData} />;
      case 1:
        return <EventsInfo />;
      case 2:
        return <PaymentInfo />;
      case 3:
        return <PrivacySettings />;
      case 4:
        return <AccountSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="container10">
      <div className="leftbox1">
        <nav className="navbar2">
          {tabs.map((tab, index) => (
            <a key={index} onClick={() => setActiveTab(index)} className={`tab ${activeTab === index ? 'active' : ''}`}>
              <i className={`fa ${icons[index]}`}></i>
            </a>
          ))}
        </nav>
      </div>
      <div className="rightbox1">
        {renderTabContent()}
      </div>
    </div>
  );
};

const icons = ["fa-user", "fa-tv", "fa-credit-card", "fa-tasks", "fa-cog"];

const PersonalInfo = ({ userData, setUserData }) => {
  const [formData, setFormData] = useState({
    firstName: userData.fname || '',
    lastName: userData.lname || '',
    email: userData.emailid || '',
    password: '',
  });

  useEffect(() => {
    setFormData({
      firstName: userData.fname || '',
      lastName: userData.lname || '',
      email: userData.emailid || '',
      password: '',
    });
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    if (userData.key) {
      const userRef = ref(database, `EventManagement/${userData.key}`);
      update(userRef, {
        fname: formData.firstName,
        lname: formData.lastName,
        emailid: formData.email,
      }).then(() => {
        setUserData({
         ...userData,
          fname: formData.firstName,
          lname: formData.lastName,
          emailid: formData.email,
        });
        alert('Profile updated successfully.');
      }).catch((error) => {
        console.error("Error updating profile:", error);
        alert('Failed to update profile.');
      });
    }
  };
  
  return (
    <div className="profile tabShow">
      <h1 className="head">Personal Info</h1>
      <h2 className="inside">First Name</h2>
      <input
        type="text"
        name="firstName"
        className="input-write"
        value={formData.firstName}
        onChange={handleChange}
      />
      <h2 className="inside">Last Name</h2>
      <input
        type="text"
        name="lastName"
        className="input-write"
        value={formData.lastName}
        onChange={handleChange}
      />
      <h2 className="inside">Email</h2>
      <input
        type="text"
        name="email"
        className="input-write"
        value={formData.email}
        onChange={handleChange}
      />
      <h2 className="inside">Password</h2>
      <input
        type="password"
        name="password"
        id="part"
        className="input-write"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleUpdate}>Update</button>
    </div>
  );
};

const EventsInfo = () => {
  const [eventPreferences, setEventPreferences] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleEventPreferencesChange = (e) => {
    setEventPreferences(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleEventUpdate = () => {
    // Handle the event update logic here
    console.log('Updated event preferences:', eventPreferences);
    console.log('Updated feedback:', feedback);
  };

  return (
    <div className="Event tabShow">
      <h1 className="head">Events Info</h1>
      <h2 className="inside">Event Preferences</h2>
      <select
        className="events"
        id="event-type"
        value={eventPreferences}
        onChange={handleEventPreferencesChange}
      >
        <option value="">Select an event type</option>
        <option value="Wedding Ceremony">Wedding Ceremony</option>
        <option value="Birthday Party">Birthday Party</option>
        <option value="Corporate Event">Corporate Event</option>
        <option value="Concert">Concert</option>
        <option value="Paint and sip/Picnic">Paint and sip/Picnic</option>
        <option value="Social Gathering">Social Gathering</option>
        <option value="Fundraiser">Fundraiser</option>
        <option value="Others">Others</option>
      </select>
      <h2 className="inside">Feedback</h2>
      <input
        type="text"
        className="input-write"
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Your feedback"
      />
      <button className="btn" onClick={handleEventUpdate}>Update</button>
    </div>
  );
};

const PaymentInfo = () => {
  const [paymentData, setPaymentData] = useState({
    paymentMethod: 'MasterCard - 0202 ****** 1234',
    billingAddress: '1234 street, Nairobi',
    zipCode: '12345 00100',
    billingDate: 'Jan 20, 2012',
    redeemCard: 'km',
  });

  const handlePaymentChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePaymentUpdate = () => {
    // Handle the payment update logic here
    console.log('Updated payment data:', paymentData);
  };

  return (
    <div className="payment tabShow">
      <h1 className="head">Payment Info</h1>
      <h2 className="inside">Payment Method</h2>
      <input
        type="text"
        name="paymentMethod"
        className="input-write"
        value={paymentData.paymentMethod}
        onChange={handlePaymentChange}
      />
      <h2 className="inside">Billing Address</h2>
      <input
        type="text"
        name="billingAddress"
        className="input-write"
        value={paymentData.billingAddress}
        onChange={handlePaymentChange}
      />
      <h2 className="inside">ZipCode</h2>
      <input
        type="text"
        name="zipCode"
        className="input-write"
        value={paymentData.zipCode}
        onChange={handlePaymentChange}
      />
      <h2 className="inside">Billing Date</h2>
      <input
        type="text"
        name="billingDate"
        className="input-write"
        value={paymentData.billingDate}
        onChange={handlePaymentChange}
      />
      <h2 className="inside">Redeem Card</h2>
      <input
        type="password"
        name="redeemCard"
        id="part"
        className="input-write"
        value={paymentData.redeemCard}
        onChange={handlePaymentChange}
      />
      <button className="btn" onClick={handlePaymentUpdate}>Update</button>
    </div>
  );
};

const PrivacySettings = () => (
  <div className="privacy tabShow">
    <h1 className="head">Privacy Settings</h1>
    <h2 className="inside">Manage Email Notifications</h2>
    <p></p>
    <h2 className="inside">Manage Privacy Settings</h2>
    <p></p>
    <h2 className="inside">Personalized Ad Experience</h2>
    <p></p>
    <h2 className="inside">Protect Account</h2>
    <button className="btn">Update</button>
  </div>
);

const AccountSettings = () => (
  <div className="settings tabShow">
    <h1 className="head">Account Settings</h1>
    <h2 className="inside">Hold Subscription</h2>
    <p></p>
    <h2 className="inside">Cancel Subscription</h2>
    <p></p>
    <button className="btn">Update</button>
  </div>
);

export default Profile;
