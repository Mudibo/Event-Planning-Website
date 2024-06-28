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

document.addEventListener("DOMContentLoaded", function() {
    var userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
        var user_ref = firebase.database().ref("EventManagement").orderByChild("emailid").equalTo(userEmail);
        user_ref.once("value", function(snapshot) {
            if (snapshot.exists()) {
                snapshot.forEach(function(childSnapshot) {
                    var user = childSnapshot.val();
                    document.getElementById("profileName").innerText = user.name;
                    document.getElementById("profileLname").innerText = user.lname;
                    document.getElementById("profileEmail").innerText = user.emailid;
                });
            } else {
                displayError("User data not found.");
            }
        });
    } else {
        window.location.href = "login.html";
    }
});

function displayError(message) {
    var errorBox = document.getElementById("profileError");
    errorBox.innerText = message;
    errorBox.style.display = "block";
}
