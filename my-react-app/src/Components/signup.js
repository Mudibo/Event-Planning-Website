import React, { useState } from 'react';
import { ref, push, set } from './firebase/database';
import { database } from './firebaseConfig'; // Adjust the path as per your project structure

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    lname: '',
    emailid: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', formData);

    const EventManagementDB = ref(database, 'EventManagement');
    const newEventManagement = push(EventManagementDB);
    set(newEventManagement, formData, (error) => {
      if (error) {
        console.error('Error saving message:', error);
      } else {
        console.log('Message saved successfully!');
        // Redirect to profile page after signup
        window.location.href = 'profile.html';
      }
    });
  };

  return (
    <div className="container">
      <span>Have an account? <a href="login.html">Login</a></span>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="two-forms">
          <div className="inputBox">
            <input type="text" className="input-field" id="name" placeholder="Firstname" value={formData.name} onChange={handleChange} />
            <i className="bx bx-user"></i>
          </div>
          <div className="inputBox">
            <input type="text" className="input-field" id="lname" placeholder="Lastname" value={formData.lname} onChange={handleChange} />
            <i className="bx bx-user"></i>
          </div>
        </div>
        <div className="inputBox">
          <input type="email" className="input-field" id="emailid" placeholder="Email" value={formData.emailid} onChange={handleChange} />
          <i className="bx bx-envelope"></i>
        </div>
        <div className="inputBox">
          <input type="password" className="input-field" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="inputBox">
          <button type="submit">Submit</button>
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="register-check" />
            <label htmlFor="register-check"> Remember Me</label>
          </div>
          <div className="two">
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement" className="terms-label">I agree to these <a href="#">Terms & conditions</a></label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
