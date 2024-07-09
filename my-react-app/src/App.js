import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import AboutPage from './Pages/about';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
     
    </Router>
   
  );
}

export default App;
