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
var EventManagementDB = firebase.database().ref("EventManagement");
document.getElementById("signupForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log("Form submitted!");

    var name = getElementVal("name");
    var lname = getElementVal("lname");
    var emailid = getElementVal("emailid");
    var password = getElementVal("password");

    console.log("Collected values - ", name, lname, emailid, password);

    saveMessages(lname, name, emailid, password);

    // Redirect to profile page after signup
    window.location.href = "profile.html";
}

const saveMessages = (lname, name, emailid, password) => {
    var newEventManagement = EventManagementDB.push();
    newEventManagement.set({
        lname: lname,
        name: name,
        emailid: emailid,
        password: password
    }, function(error) {
        if (error) {
            console.error("Error saving message:", error);
        } else {
            console.log("Message saved successfully!");
        }
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
