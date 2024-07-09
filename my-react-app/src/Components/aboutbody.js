import Janny from '../Images/Janny.jpg';
import Krishna from '../Images/Krishna.jpeg';
import Sean from '../Images/sean.jpg';
import Mathenge from '../Images/mathengeCropped.jpg'

const AboutBody = () => {
    return (
        <div id="about-summary" className="about-summary">
            
            <div id="our-summary" className="our-summary">
                <div id="who-we-are" className="who-we-are">
                    <h3>Who we are</h3>
                    <p>
                    Welcome to Plannit, your premier partner in seamless event planning and management. Our mission is to create memorable experiences that leave a lasting impression, guided by our core values of creativity, reliablility and excellence.
                    </p>
                </div>
                
                <div id="our-story" className="our-story">
                    <h3>Our Story</h3>
                    <p>Founded in 2024, Plannit began with a passion for facilitating unforgettable events. We have grown into a leading event planning firm</p>
                </div>
                
                <div id="what-we-do" className="what-we-do">
                    <h3>What We Do</h3>
                    <p>At Plannit, we specialize in planning a wide range of events, including weddings, birthdays, parties among others.</p>
                </div>

                <div id="why-choose-us"className="why-choose-us">
                    <h3>Why Choose Us </h3>
                    <p>Choosing Plannit means partnering with a team that is dedicated to turning your vision into reality. Our unique approach combines creativity, attention to detail and a client-oriented mindset to deliver events that exceed expectations.</p>
                </div>

                <div id="create-something"className="create-something">
                    <h3>Let's Create Something Amazing</h3>
                    <p>Ready to have a seamless event planning process? Get in touch with us today to start planning your dream event. Reach out to us via our various social media platforms. With our expertise, attention to detail and passion for creating memorable events, we ensure that every aspect of your event is meticulously planned and flawlessly exectued, leaving you free to enjoy every moment. Start planning with us today!</p>
                </div>
            </div>
            
            <div id="profile-images"className="profile-images">
                <div id="contributors" className="contributors">
                    <p>Janny Jonyo, Founder & CEO</p>
                    <img src={Janny} alt="Janny Jonyo" className="img"/>
                    <p>"We streamline your vision, making event planning effortless and enjoyable"</p>
                </div>
    
                <div id="contributors" className="contributors">
                    <p>Krishna Madhaparia, Co-Founder</p>
                    <img src={Krishna} alt="Krishna Madhaparia" className="img"/>
                    <p>"Our platform simplifies event coordination, empowering you to host remarkable experiences"</p>
                </div>
    
                <div id="contributors" className="contributors">
                    <p>Sean Mudibo, Director</p>
                    <img src={Sean} alt="Sean Mudibo" className="img"/>
                    <p>"From concept to execution, we're your partners in seamless event planning"</p>
                </div>
    
                <div id="contributors" className="contributors">
                    <p>Mathenge Gitahi, Director.</p>
                    <img src={Mathenge} alt="Mathenge Gitahi" className="img"/>
                    <p>"Let us handle the logistics so you can focus on having a memorable experience"</p>
                </div>  
            </div>

        </div>
    )
}
export default AboutBody;