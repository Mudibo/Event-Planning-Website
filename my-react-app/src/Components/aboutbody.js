import Janny from '../Images/Janny.jpg';
import Krishna from '../Images/Krishna.jpeg';
import Sean from '../Images/sean.jpg';
import Mathenge from '../Images/mathengeCropped.jpg'
import React, {useState} from 'react';

const AboutBody = () => {
    //state management for each section
    const [showMoreWhoWeAre, setShowMoreWhoWeAre] = useState(false);
    const [showMoreOurStory, setShowMoreOurStory] = useState(false);
    const [showMoreWhatWeDo, setShowMoreWhatWeDo] = useState(false);
    const [showMoreWhyChooseUs, setShowMoreWhyChooseUs] = useState(false);
    const [showMoreCreateSomething, setShowMoreCreateSomething] = useState(false);
    return (
        <div id = "about-summary" className="about-summary">
            <div id = "our-summary" className="our-summary">
                
                <div id="who-we-are" className="who-we-are">
                    <h3>Who we are</h3>
                    <p className="about_p">
                    Welcome to Plannit, your premier partner in seamless event planning and management. 
                    {showMoreWhoWeAre && (
                        <p className="about_p">Our mission is to create memorable experiences that leave a lasting impression, guided by our core values of creativity, reliability, and excellence. We are a team of dedicated professionals with a passion for making your events unforgettable. From intimate gatherings to large-scale celebrations, we handle every detail with care and precision.</p>
                    )}
                    </p>
                    <button className="btnmore"onClick={() => setShowMoreWhoWeAre(!showMoreWhoWeAre)}>
                        {showMoreWhoWeAre ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                
                <div id="Our Story" className="our-story">
                    <h3>Our Story</h3>
                    <p className="about_p">
                        Founded in 2024, Plannit began with a passion for facilitating unforgettable events. We have grown into a leading event planning firm.
                        {showMoreOurStory && (
                            <p className="about_p">Our journey started with a small team and a big dream. Over the years, we've expanded our services and our team, but our commitment to quality and client satisfaction remains unchanged.</p>
                        )}
                    </p>
                    <button className="btnmore" onClick={() => setShowMoreOurStory(!showMoreOurStory)}>
                        {showMoreOurStory ? 'Read Less' : 'Read More'}
                    </button>                    
                </div>

                <div id="what-we-do" className="what-we-do">
                    <h3>What We Do</h3>
                    <p className="about_p">
                    At Plannit, we specialize in planning a wide range of events, including weddings, birthdays, parties, among others.
                    {showMoreWhatWeDo && (
                        <p className="about_p">ur services include venue selection, catering, decoration, entertainment, and more. We work closely with our clients to ensure every event is personalized and perfect.</p>
                    )}
                    </p>
                    <button className="btnmore" onClick={() => setShowMoreWhatWeDo(!showMoreWhatWeDo)}>
                        {showMoreWhatWeDo ? 'Read Less' : 'Read More'}
                    </button>
                </div>

                <div id="why-choose-us" className="why-choose-us">
                    <h3>Why Choose Us</h3>
                    <p className="about_p">
                    Choosing Plannit means partnering with a team that is dedicated to turning your vision into reality. Our unique approach combines creativity, attention to detail, and a client-oriented mindset to deliver events that exceed expectations.
                    {showMoreWhyChooseUs && (
                        <p className="about_p">We pride ourselves on our exceptional service and our ability to handle any event, no matter the size or complexity. Let us help you create a memorable event that will be cherished for years to come.</p>
                    )}
                    </p>
                    <button className="btnmore" onClick={() => setShowMoreWhyChooseUs(!showMoreWhyChooseUs)}>
                        {showMoreWhyChooseUs ? 'Read Less' : 'Read More'}
                    </button>
                </div>

                <div id="create-something" className="create-something">
                    <h3>Create Something</h3>
                    <p className="about_p">
                        Ready to have a seamless event planning process? Get in touch with us today to start planning your dream event. 
                        {showMoreCreateSomething && (
                            <p className="about_p"> Reach out to us via our various social media platforms. With our expertise, attention to detail, and passion for creating memorable events, we ensure that every aspect of your event is meticulously planned and flawlessly executed, leaving you free to enjoy every moment. Start planning with us today! We are excited to work with you and make your vision a reality. Whether you have a clear idea or need some inspiration, our team is here to guide you every step of the way.</p>
                        )}
                    </p>
                    <button className="btnmore" onClick={() => setShowMoreCreateSomething(!showMoreCreateSomething)}>
                        {showMoreCreateSomething ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
            <div className="OurTeam">
                <h2>MEET OUR TEAM</h2>
            </div>

            <div id="profile-images" className="profile-images">
                <div className="contributors">
                    <p className="about_p">Janny Jonyo, Founder & CEO</p>
                    <img src={Janny} alt="Janny Jonyo" className="img" />
                    <p>"We streamline your vision, making event planning effortless and enjoyable"</p>
                </div>
    
                <div className="contributors">
                    <p className="about_p">Krishna Madhaparia, Co-Founder</p>
                    <img src={Krishna} alt="Krishna Madhaparia" className="img" />
                    <p className="about_p">"Our platform simplifies event coordination, empowering you to host remarkable experiences"</p>
                </div>
    
                <div className="contributors">
                    <p className="about_p">Sean Mudibo, Director</p>
                    <img src={Sean} alt="Sean Mudibo" className="img" />
                    <p className="about_p">"From concept to execution, we're your partners in seamless event planning"</p>
                </div>
    
                <div className="contributors">
                    <p className="about_p">Mathenge Gitahi, Director.</p>
                    <img src={Mathenge} alt="Mathenge Gitahi" className="img" />
                    <p className="about_p">"Let us handle the logistics so you can focus on having a memorable experience"</p>
                </div>
            </div>           
        </div>
    );
}
export default AboutBody;