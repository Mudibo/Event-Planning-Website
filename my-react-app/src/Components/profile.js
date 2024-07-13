import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import 'firebase/auth';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';

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
            console.log("User email found in local storage:", userEmail);
            const userRef = query(ref(database, 'EventManagement'), orderByChild('emailid'), equalTo(userEmail));
            get(userRef).then(snapshot => {
                if (snapshot.exists()) {
                    console.log("Snapshot exists:", snapshot.val());
                    snapshot.forEach(childSnapshot => {
                        const user = childSnapshot.val();
                        console.log("User data retrieved:", user);
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
            console.log("No user email found in local storage, redirecting to login.");
            window.location.href = 'login.html';
        }
    }, []);

    const displayError = (message) => {
        setError(message);
        console.error("Error:", message);
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
            <div className="leftbox1">
                <nav className="navbar2">
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
            <div className="rightbox1">
                {activeTab === 0 && (
                    <div className="profile tabShow">
                        <h1 className="head">Personal Info</h1>
                        <h2 className="inside">Name</h2>
                        <input className="write-input" type="text" id="profileName" value={userData.name} />
                        <h2 className="inside">Last Name</h2>
                        <input className="write-input" type="text" id="profileLname" value={userData.lname} />
                        <h2 className="inside">Birthday</h2>
                        <input className="write-input" type="text" value="April 26, 2004" />
                        <h2 className="inside">Gender</h2>
                        <input className="write-input" type="text" value="Female" />
                        <h2 className="inside">Email</h2>
                        <input className="write-input" type="text" id="profileEmail" value={userData.emailid} />
                        <h2 className="inside">Password</h2>
                        <input className="write-input" type="password" value={userData.password} />
                        <button className="btn1">Update</button>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="Event tabShow">
                        <h1 className="head">Events Info</h1>
                        <h2 className="inside">Event Preferences</h2>
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
                        <input className="write-input" type="text" />
                        <h2 className="inside">Feedbacks</h2>
                        <input className="write-input" type="text" />
                        <button className="btn1">Update</button>
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="payment tabShow">
                        <h1 className="head">Payment Info</h1>
                        <h2 className="inside">Payment Method</h2>
                        <input className="write-input" type="text" value="MasterCard - 0202 ****** 1234" />
                        <h2 className="inside">Billing Address</h2>
                        <input className="write-input" type="text" value="1234 street, Nairobi" />
                        <h2 className="inside">ZipCode</h2>
                        <input className="write-input" type="text" value="12345 00100" />
                        <h2 className="inside">Billing Date</h2>
                        <input className="write-input" type="text" value="Jan 20, 2012" />
                        <h2 className="inside">Redeem Card</h2>
                        <input className="write-input" type="password" id="profilePassword" value="km"  />
                        <button className="btn1">Update</button>
                    </div>
                )}
                {activeTab === 3 && (
                    <div className="privacy tabShow">
                        <h1 className="head">Privacy Settings</h1>
                        <h2 className="inside">Manage Email Notifications</h2>
                        <p></p>
                        <h2 className="inside">Manage Privacy Settings</h2>
                        <p></p>
                        <h2 className="inside">Personalized Ad Experience</h2>
                        <h2 className="inside">Protect Account</h2>
                        <button className="btn1">Update</button>
                    </div>
                )}
                {activeTab === 4 && (
                    <div className="settings tabShow">
                        <h1 className="head">Account Settings</h1>
                        <h2 className="inside">Hold Subscription</h2>
                        <p></p>
                        <h2 class="inside">Cancel Subscription</h2>
                        <p></p>
                        <button className="btn1">Update</button>
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
