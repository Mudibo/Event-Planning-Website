import React, { useState } from "react";
import { app, database } from "../firebase"; // Ensure your firebase configuration is correctly imported
import { ref, set, getDatabase } from "firebase/database";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    emailid: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.fname) newErrors.fname = 'Firstname is required';
    if (!formValues.lname) newErrors.lname = 'Lastname is required';
    if (!formValues.emailid) newErrors.emailid = 'Email is required';
    if (!formValues.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signup(formValues.fname, formValues.lname, formValues.emailid, formValues.password);
    }
  };

  const signup = (fname, lname, emailid, password) => {
    const db = getDatabase();
    const userRef = ref(db, 'EventManagement/' + emailid.replace('.', '_')); // Replacing '.' to avoid issues in Firebase keys
    set(userRef, {
      fname,
      lname,
      emailid,
      password
    })
      .then(() => {
        // Save email in localStorage
        localStorage.setItem('userEmail', emailid);
        // Redirect to profile page
        window.location.href = "/profile";
      })
      .catch((error) => {
        setError("Error signing up: " + error.message);
      });
  };

  return (
    <div className="container2">
      <span className="subheading"> Have an account? <a href="/login" onClick={() => { }}>Login</a></span>
      <h2 className="heading5">Sign Up</h2>
      <form onSubmit={handleSubmit} id="signupForm">
        <div className="inputBox">
          <input
            type="text"
            className="input-field"
            id="fname"
            placeholder="Firstname"
            value={formValues.fname}
            onChange={handleChange}
          />
          <i className="bx bx-user"></i>
          {errors.fname && <div className="error">{errors.fname}</div>}
        </div>

        <div className="inputBox">
          <input
            type="text"
            className="input-field"
            id="lname"
            placeholder="Lastname"
            value={formValues.lname}
            onChange={handleChange}
          />
          <i className="bx bx-user"></i>
          {errors.lname && <div className="error">{errors.lname}</div>}
        </div>

        <div className="inputBox">
          <input
            type="email"
            className="input-field"
            id="emailid"
            placeholder="Email"
            value={formValues.emailid}
            onChange={handleChange}
          />
          <i className="bx bx-envelope"></i>
          {errors.emailid && <div className="error">{errors.emailid}</div>}
        </div>

        <div className="inputBox">
          <input
            type="password"
            className="input-field"
            id="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <i className="bx bx-lock-alt"></i>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="inputBox">
          <button type="submit">Register</button>
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
