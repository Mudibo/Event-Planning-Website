import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import AboutPage from './Pages/about';
import Footer from './Components/Footer';
import HomePage from './Pages/home';
import ReviewPage from './Pages/reviews';
import Login from './Components/login';
import SignUp from './Components/signup';
import FAQs from './Components/faq';
import Profile from './Components/profile';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/reviews" element={<ReviewPage/>} />
        <Route path="/faq" element={<FAQs/>} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
