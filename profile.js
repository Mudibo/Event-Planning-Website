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
                    document.getElementById("profileName").value = user.name;
                    document.getElementById("profileLname").value = user.lname;
                    document.getElementById("profileEmail").value = user.emailid;
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

// For the info
const tabBtn = document.querySelectorAll(".tab");
const tab = document.querySelectorAll(".tabShow");

function tabs(panelIndex) {
    tab.forEach(function(node) {
        node.style.display = "none";
    });
    tab[panelIndex].style.display = "block";
}
tabs(0);

$(".tab").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
})

//For the event option
    const input = document.querySelector("#search");
    const list = document.querySelectorAll("#link li");

    input.addEventListener('input', function() {
        const filter = input.value.toUpperCase();

    link.forEach((item) => {
        const text = el.textContent.toUpperCase();
        item.style.display = text.includes(filter) ? "block" : "none";
    });
});
