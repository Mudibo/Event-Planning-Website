import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
