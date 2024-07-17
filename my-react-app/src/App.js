import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import AboutPage from './Pages/about';
import Footer from './Components/Footer';
import HomePage from './Pages/home';
import ReviewPage from './Pages/reviews';
import Login from './Components/loginbody';
import SignUp from './Components/signupbody';
import FAQs from './Components/faqbody';
import Profile from './Components/profilebody';
import ContactsPage from './Pages/contacts';
import VendorPage from './Pages/vendor';
import EventPage from './Pages/events';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reviews" element={<ReviewPage/>} />
        <Route path="/faq" element={<FAQs/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/vendors" element={<VendorPage/>}/>
        <Route path="/events" element={<EventPage/>}/>
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
