import React, { useState } from 'react';

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
    console.log(`Email: ${emailid}, Password: ${password}`);
  };

  return (
    <div className="container">
      <span>Don't have an account? <a href="SignUp.html">Sign Up</a></span>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
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
            <label for="login">Remember Me</label>
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
