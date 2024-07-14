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
        <div class="container2">
        <span class="subheading" > Have an account? <a href="/login" onclick="login()">Login</a></span>
        <h2 class="heading5" >Sign Up</h2>
        <form action="" id="signupForm">

                
                <div className="fields_signup">
                    <div class="inputBox">
                        <input type="email" class="input-field_1" id="name" placeholder="Firstname" />
                    </div>
                    <div class="inputBox">
                        <input type="password" class="input-field" id="lname" placeholder="Last name" />
                    </div>
                    <div class="inputBox">
                        <input type="email" class="input-field" id="emailid" placeholder="Email" />
                    </div>
                    <div class="inputBox">
                        <input type="password" class="input-field" id="password" placeholder="Password" />
                    </div>
                    <div class="inputBox">
                        <button type="submit">Submit</button>
                    </div>
                </div>

                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="register-check" />
                        <label for="register-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <input type="checkbox" id="agreement"  />
                        <label for="agreement" class="terms-label">I agree to these <a href="#">Terms & conditions</a></label>
                    </div>
                </div>
        </form>
      </div>
  );
};

export default SignUp;
