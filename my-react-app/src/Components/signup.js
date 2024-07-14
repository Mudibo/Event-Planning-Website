import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database'; 
import { database } from '../firebase';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    lname: '',
    emailid: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Firstname is required';
    if (!formValues.lname) newErrors.lname = 'Lastname is required';
    if (!formValues.emailid) newErrors.emailid = 'Email is required';
    if (!formValues.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      saveMessages(formValues.lname, formValues.name, formValues.emailid, formValues.password);
    }
  };

  const saveMessages = async (lname, name, emailid, password) => {
    const db = getDatabase(database); // Access the database instance
    const newEventManagementRef = ref(db, 'EventManagement'); // Reference to 'EventManagement' node
    try {
      await push(newEventManagementRef, {
        lname,
        name,
        emailid,
        password,
      });
      // Set email in localStorage and redirect to profile page
      if (lname && name && emailid && password) {
        // Save email in localStorage
        localStorage.setItem('userEmail', emailid);
        // Redirect to profile page
        window.location.href = "/profile";
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: "Invalid signup details",
        }));
      }
    } catch (error) {
      console.error("Error saving message:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: "An error occurred while signing up",
      }));
    }
  };


  return (
      <div className="container2">
        <span className="subheading">
          Have an account? <a href="/login">Login</a>
        </span>
        <h2 className="heading5">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="fields_signup">
            <div className="inputBox">
              <input
                type="text"
                className="input-field"
                id="name"
                placeholder="Firstname"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
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
              {errors.lname && <span className="error">{errors.lname}</span>}
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
              {errors.emailid && <span className="error">{errors.emailid}</span>}
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
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="inputBox">
              <button type="submit">Submit</button>
            </div>
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
            <div className="two">
              <input type="checkbox" id="agreement" />
              <label htmlFor="agreement" className="terms-label">
                I agree to these <a href="#">Terms & conditions</a>
              </label>
            </div>
          </div>
        </form>
      </div>
  );
};

export default SignUp;
