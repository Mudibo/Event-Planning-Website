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
firebase.initializeApp(firebaseConfig);

// Reference your database
var EventManagementDB = firebase.database().ref("EventManagement");

document.getElementById("signupForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var lname = getElementVal("lname");
    var emailid = getElementVal("emailid");
    var password = getElementVal("password");

    saveMessages(lname, name, emailid, password);

    // Redirect to FAQ.html after signup
    window.location.href = "FAQ.html";
}

const saveMessages = (lname, name, emailid, password) => {
    var newEventManagement = EventManagementDB.push();

    newEventManagement.set({
        lname: lname,
        name: name,
        emailid: emailid,
        password: password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
