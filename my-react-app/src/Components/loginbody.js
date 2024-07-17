import React, { useState } from 'react';
import { app, database } from '../firebase'; 

const Login = () => {
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the login function here
    login(emailid, password);
  };

  const login = (emailid, password) => {
    // Your login logic goes here
    // For now, just console.log the credentials

    if (emailid && password) {
      // Save email in localStorage
      localStorage.setItem('userEmail', emailid);
      // Redirect to profile page
      window.location.href = "/profile";
    } else {
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="container2">
      <span className="subheading">
        Don't have an account? <a href="/signup">Sign Up</a>
      </span>
      <h2 className="heading5">Login</h2>
      <form className="form_log"onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            type="email"
            className="input-field"
            id="login_emailid"
            placeholder="Email"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
          />
          <i className="bx bx-user"></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            className="input-field"
            id="login_password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="inputBox">
          <button type="submit">Login</button>
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="login" />
            <label htmlFor="login">Remember Me</label>
          </div>
          <div className="two">
            <label>
              <a href="#">Forgot Password</a>
            </label>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
