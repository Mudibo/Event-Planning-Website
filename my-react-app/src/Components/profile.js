import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYN8IWC2NaSN5nJfCxKEwXN79OWZDKqpw",
    authDomain: "webapp-b4d18.firebaseapp.com",
    databaseURL: "https://webapp-b4d18-default-rtdb.firebaseio.com",
    projectId: "webapp-b4d18",
    storageBucket: "webapp-b4d18.appspot.com",
    messagingSenderId: "540649378754",
    appId: "1:540649378754:web:417750dd3fa64d07473c5b",
    measurementId: "G-3QZ85W69MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Profile = () => {
    const [userData, setUserData] = useState({
        name: '',
        lname: '',
        emailid: '',
        password: ''
    });
    const [activeTab, setActiveTab] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');

        if (userEmail) {
            const userRef = query(ref(database, 'EventManagement'), orderByChild('emailid'), equalTo(userEmail));
            get(userRef).then(snapshot => {
                if (snapshot.exists()) {
                    snapshot.forEach(childSnapshot => {
                        const user = childSnapshot.val();
                        setUserData({
                            name: user.name,
                            lname: user.lname,
                            emailid: user.emailid,
                            password: user.password
                        });
                    });
                } else {
                    displayError('User data not found.');
                }
            }).catch(error => {
                displayError(error.message);
            });
        } else {
            window.location.href = 'login.html';
        }
    }, []);

    const displayError = (message) => {
        setError(message);
    };

    const tabs = [
        { icon: 'fa-user', label: 'Personal Info' },
        { icon: 'fa-tv', label: 'Events Info' },
        { icon: 'fa-credit-card', label: 'Payment Info' },
        { icon: 'fa-tasks', label: 'Privacy Settings' },
        { icon: 'fa-cog', label: 'Account Settings' },
    ];

    return (
        <div className="container10">
            <div className="leftbox">
                <nav>
                    {tabs.map((tab, index) => (
                        <a
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`tab ${activeTab === index ? 'active' : ''}`}
                        >
                            <i className={`fa ${tab.icon}`}></i>
                        </a>
                    ))}
                </nav>
            </div>
            <div className="rightbox">
                {activeTab === 0 && (
                    <div className="profile tabShow">
                        <h1>Personal Info</h1>
                        <h2>Name</h2>
                        <input type="text" id="profileName" className="input" value={userData.name} readOnly />
                        <h2>Last Name</h2>
                        <input type="text" id="profileLname" className="input" value={userData.lname} readOnly />
                        <h2>Birthday</h2>
                        <input type="text" className="input" value="April 26, 2004" readOnly />
                        <h2>Gender</h2>
                        <input type="text" className="input" value="Female" readOnly />
                        <h2>Email</h2>
                        <input type="text" id="profileEmail" className="input" value={userData.emailid} readOnly />
                        <h2>Password</h2>
                        <input type="password" className="input" value={userData.password} readOnly />
                        <button className="btn">Update</button>
                    </div>
                )}
                {activeTab === 1 && (
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
                )}
                {activeTab === 2 && (
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
                        <input type="password" id="profilePassword" className="input" value="km" readOnly />
                        <button className="btn">Update</button>
                    </div>
                )}
                {activeTab === 3 && (
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
                )}
                {activeTab === 4 && (
                    <div className="settings tabShow">
                        <h1>Account Settings</h1>
                        <h2>Hold Subscription</h2>
                        <p></p>
                        <h2>Cancel Subscription</h2>
                        <p></p>
                        <button className="btn">Update</button>
                    </div>
                )}
            </div>
            {error && (
                <div id="profileError" style={{ display: 'block' }}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default Profile;
