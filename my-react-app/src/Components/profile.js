import React, { useEffect, useState } from 'react';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';
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
      window.location.href = "login.html";
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
    <div className="container">
      <div className="leftbox">
        <nav>
          {tabs.map((tab, index) => (
            <a key={index} onClick={() => setActiveTab(index)} className={`tab ${activeTab === index ? 'active' : ''}`}>
              <i className={`fa ${icons[index]}`}></i>
            </a>
          ))}
        </nav>
      </div>
      <div className="rightbox">
        {renderTabContent()}
      </div>
    </div>
  );
};

const icons = ["fa-user", "fa-tv", "fa-credit-card", "fa-tasks", "fa-cog"];

const PersonalInfo = ({ userData }) => (
  <div className="profile tabShow">
    <h1>Personal Info</h1>
    <h2>First Name</h2>
    <input type="text" id="profileName" className="input" value={userData.name || ''} readOnly />
    <h2>Last Name</h2>
    <input type="text" id="profileLname" className="input" value={userData.lname || ''} readOnly />
    <h2>Birthday</h2>
    <input type="text" className="input" value="April 26, 2004" readOnly />
    <h2>Gender</h2>
    <input type="text" className="input" value="Female" readOnly />
    <h2>Email</h2>
    <input type="text" id="profileEmail" className="input" value={userData.emailid || ''} readOnly />
    <h2>Password</h2>
    <input type="password" className="input" value={userData.password || ''} readOnly />
    <button className="btn">Update</button>
  </div>
);

const EventsInfo = () => (
  <div className="Event tabShow">
    <h1>Events Info</h1>
    <h2>Event Preferences</h2>
    <select className="events" id="event-type">
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
    <input type="text" className="input" />
    <h2>Feedbacks</h2>
    <input type="text" className="input" />
    <button className="btn">Update</button>
  </div>
);

const PaymentInfo = () => (
  <div className="payment tabShow">
    <h1>Payment Info</h1>
    <h2>Payment Method</h2>
    <input type="text" className="input" value="MasterCard - 0202 ****** 1234" readOnly />
    <h2>Billing Address</h2>
    <input type="text" className="input" value="1234 street, Nairobi" readOnly />
    <h2>ZipCode</h2>
    <input type="text" className="input" value="12345 00100" readOnly />
    <h2>Billing Date</h2>
    <input type="text" className="input" value="Jan 20, 2012" readOnly />
    <h2>Redeem Card</h2>
    <input type="password" id="profilePassword" className="input" value="km" />
    <button className="btn">Update</button>
  </div>
);

const PrivacySettings = () => (
  <div className="privacy tabShow">
    <h1>Privacy Settings</h1>
    <h2>Manage Email Notifications</h2>
    <p></p>
    <h2>Manage Privacy Settings</h2>
    <p></p>
    <h2>Personalized Ad Experience</h2>
    <h2>Protect Account</h2>
    <button className="btn">Update</button>
  </div>
);

const AccountSettings = () => (
  <div className="settings tabShow">
    <h1>Account Settings</h1>
    <h2>Hold Subscription</h2>
    <p></p>
    <h2>Cancel Subscription</h2>
    <p></p>
    <button className="btn">Update</button>
  </div>
);

export default Profile;