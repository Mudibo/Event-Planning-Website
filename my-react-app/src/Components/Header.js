//Header component
import React from 'react';
import Logo from '../Icons/Logo.png';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
    <div className="navbar">
        <img src={Logo} alt="Logo" className="Logo"/>
        <ul>
            <li>
                <Link to = "/home">HOME</Link>
            </li>
            <li>
                <Link to="/about">ABOUT US</Link>
            </li>
            <li>
                <Link to="/contacts">CONTACT US</Link>
            </li>
            <li>
                <Link to="/vendor">VENDORS</Link>
            </li>
            <li>
                <Link to="/events">EVENTS</Link>
            </li>
            <li>
                <Link to="/faq">FAQs</Link>
            </li>
            <li>
                <Link to="/reviews">REVIEWS</Link>
            </li>
        </ul>
        <Link to="/login"><button id="login">Login</button></Link>
  </div>
    )
}
export default Header;