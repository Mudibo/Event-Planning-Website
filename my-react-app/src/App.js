import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import AboutPage from './Pages/about';
import Footer from './Components/Footer';
import homePage from './Pages/home';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/home" element={<homePage />}/>
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
