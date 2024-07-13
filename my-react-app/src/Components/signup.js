import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push, set } from "firebase/database";

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        lname: '',
        emailid: '',
        password: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveMessages(formValues.lname, formValues.name, formValues.emailid, formValues.password);

        // Set email in localStorage and redirect to profile page
        localStorage.setItem('userEmail', formValues.emailid);
        window.location.href = "/profile";
    };

    const saveMessages = (lname, name, emailid, password) => {
        const newEventManagement = database.ref("EventManagement").push();
        newEventManagement.set({
            lname,
            name,
            emailid,
            password,
        });
    };


    return (
        <div class="container2">
        <span class="subheading" > Have an account? <a href="/login" onclick="login()">Login</a></span>
        <h2 class="heading5" >Sign Up</h2>
        <form action="" id="signupForm">

                
                <div className="fields_signup">
                    <div class="inputBox">
                        <input type="email" class="input-field" id="name2" placeholder="Firstname" />
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
 
    )
}
export default SignUp;
