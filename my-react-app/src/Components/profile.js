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
        <nav class="navbar2">
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

const PersonalInfo = ({ userData }) => (
  <div className="profile tabShow">
    <h1 class="head" >Personal Info</h1>
    <h2 class="inside" >First Name</h2>
    <input type="text" id="profileName" className="input-write" value={userData.name || ''} readOnly />
    <h2 class="inside" >Last Name</h2>
    <input type="text" id="profileLname" className="input-write" value={userData.lname || ''} readOnly />
    <h2 class="inside" >Birthday</h2>
    <input type="text" className="input-write" value="April 26, 2004" readOnly />
    <h2 class="inside" >Gender</h2>
    <input type="text" className="input-write" value="Female" readOnly />
    <h2 class="inside" >Email</h2>
    <input type="text" id="profileEmail" className="input-write" value={userData.emailid || ''} readOnly />
    <h2 class="inside" >Password</h2>
    <input type="password" className="input-write" value={userData.password || ''} readOnly />
    <button className="btn">Update</button>
  </div>
);

const EventsInfo = () => (
  <div className="Event tabShow">
    <h1 class="head" >Events Info</h1>
    <h2 class="inside" >Event Preferences</h2>
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
    <input type="text" className="input-write" />
    <h2 class="inside" >Feedbacks</h2>
    <input type="text" className="input-write" />
    <button className="btn">Update</button>
  </div>
);

const PaymentInfo = () => (
  <div className="payment tabShow">
    <h1 class="head" >Payment Info</h1>
    <h2 class="inside" >Payment Method</h2>
    <input type="text" className="input-write" value="MasterCard - 0202 ****** 1234" readOnly />
    <h2 class="inside" >Billing Address</h2>
    <input type="text" className="input-write" value="1234 street, Nairobi" readOnly />
    <h2 class="inside" >ZipCode</h2>
    <input type="text" className="input-write" value="12345 00100" readOnly />
    <h2 class="inside" >Billing Date</h2>
    <input type="text" className="input-write" value="Jan 20, 2012" readOnly />
    <h2 class="inside" >Redeem Card</h2>
    <input type="password" id="profilePassword" className="input-write" value="km" />
    <button className="btn">Update</button>
  </div>
);

const PrivacySettings = () => (
  <div className="privacy tabShow">
    <h1 class="head" >Privacy Settings</h1>
    <h2 class="inside" >Manage Email Notifications</h2>
    <p></p>
    <h2 class="inside" >Manage Privacy Settings</h2>
    <p></p>
    <h2 class="inside" >Personalized Ad Experience</h2>
    <h2 class="inside" >Protect Account</h2>
    <button className="btn">Update</button>
  </div>
);

const AccountSettings = () => (
  <div className="settings tabShow">
    <h1 class="head" >Account Settings</h1>
    <h2 class="inside" >Hold Subscription</h2>
    <p></p>
    <h2 class="inside" >Cancel Subscription</h2>
    <p></p>
    <button className="btn">Update</button>
  </div>
);

export default Profile;