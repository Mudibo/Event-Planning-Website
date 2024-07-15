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
                    document.querySelector("input[type='password']").value = user.password;
                    
                    // Assuming user.events is an array of booked events
                    if (user.events) {
                        var eventsContainer = document.getElementById("userEvents");
                        user.events.forEach(function(event) {
                            var eventDiv = document.createElement("div");
                            eventDiv.classList.add("event");
                            eventDiv.innerHTML = `
                                <h2>${event.name}</h2>
                                <p>Date: ${event.date}</p>
                                <p>Type: ${event.type}</p>
                                <p>Location: ${event.location}</p>
                            `;
                            eventsContainer.appendChild(eventDiv);
                        });
                    } else {
                        var eventsContainer = document.getElementById("userEvents");
                        var noEventsDiv = document.createElement("div");
                        noEventsDiv.classList.add("no-events");
                        noEventsDiv.innerHTML = `<p>No booked events.</p>`;
                        eventsContainer.appendChild(noEventsDiv);
                    }
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

// For the event option
const list = document.querySelectorAll(".link li");
const select = document.createElement("select");
select.id = "event-type";

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.text = "Select an event type";
select.appendChild(defaultOption);

list.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.textContent;
  option.text = item.textContent;
  select.appendChild(option);
});

// Replace the original ul element with the select element
document.querySelector(".link").replaceWith(select);
