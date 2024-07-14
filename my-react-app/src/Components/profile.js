import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';


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
          setError('User data not found.');
        }
      }).catch(error => {
        setError(error.message);
      });
    } else {
      // Handle no user email found scenario
      setError('No user email found in local storage, redirecting to login.');
      window.location.href = '/login';
    }
  }, []);


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
            <input
              className="write-input"
              type="text"
              id="profileName"
              value={userData.name}
              readOnly
            />
            <h2 className="inside">Last Name</h2>
            <input
              className="write-input"
              type="text"
              id="profileLname"
              value={userData.lname}
              readOnly
            />
            <h2 className="inside">Birthday</h2>
            <input className="write-input" type="text" value="April 26, 2004" readOnly />
            <h2 className="inside">Gender</h2>
            <input className="write-input" type="text" value="Female" readOnly />
            <h2 className="inside">Email</h2>
            <input
              className="write-input"
              type="text"
              id="profileEmail"
              value={userData.emailid}
              readOnly
            />
            <h2 className="inside">Password</h2>
            <input
              className="write-input"
              type="password"
              value={userData.password}
              readOnly
            />
            <button className="btn1">Update</button>
          </div>
        )}
        {/* Include other tab contents as per your design */}
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
