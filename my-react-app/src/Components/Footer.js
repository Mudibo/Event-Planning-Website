//creation of the footer component;
import facebook from '../Icons/facebook.png';
import instagram from '../Icons/instagram.png';
import linkedin from '../Icons/linkedin.png';
import whatsapp from '../Icons/whatsapp.png';
import twitter from '../Icons/twitter.png';

const Footer = () => {
    return (
    <div>
        <div className="footer2">
            <div>
                <h3>Plannit</h3>
                <h4>Reach out to us through our socials!</h4>
                <ul>
                    <li>
                        <a href="https://www/instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" style={{color:'#ffffff', fontSize:'50px'}}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/757700440" target="_blank">
                            <img src={whatsapp} alt="Whatsapp"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/janny-jonyo-0b0604173/" target="_blank">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www/facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div><h4 id="H4">Copyright &copy; 2024 Plannit. All rights reserved</h4></div>
        </div>
  </div>
    )
}
export default Footer;