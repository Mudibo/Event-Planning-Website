//Header component
import Logo from '../Icons/Logo.png';
const Header = () => {
    return (
    <div class="navbar">
        <img src={Logo} alt="Logo" class="Logo"/>
        <ul>
            <li><a href="about.html">ABOUT US</a></li>
            <li><a href="contacts.html">CONTACT US</a></li>
            <li><a href="vendor.html">VENDORS</a></li>
            <li><a href="events.html">EVENTS</a></li>
            <li><a href="FAQ.html">FAQs</a></li>
            <li><a href="reviews.html">REVIEWS</a></li>
        </ul>
        <a href="SignIn.html"><button id="login">Login</button></a>
  </div>
    )
}
export default Header;