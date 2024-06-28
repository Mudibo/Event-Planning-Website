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

document.getElementById("loginForm").addEventListener("submit", login);

function login(e) {
    e.preventDefault();
    var emailid = getElementVal("login_emailid");
    var password = getElementVal("login_password");

    var user_ref = EventManagementDB.orderByChild("emailid").equalTo(emailid);
    user_ref.once("value", function(snapshot) {
        if (snapshot.exists()) {
            let loggedIn = false;
            snapshot.forEach(function(childSnapshot) {
                var user = childSnapshot.val();
                if (user.password === password) {
                    loggedIn = true;
                    // Store the email in local storage
                    localStorage.setItem("userEmail", emailid);
                }
            });
            if (loggedIn) {
                // Redirect to FAQ.html after successful login
                window.location.href = "profile.html";
            } else {
                displayError("Login failed. Please check your credentials.");
            }
        } else {
            displayError("Login failed. User not found.");
        }
    });
}

function displayError(message) {
    var errorBox = document.getElementById("loginError");
    errorBox.innerText = message;
    errorBox.style.display = "block";
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
