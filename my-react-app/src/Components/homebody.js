//Body content of home page
import peopleSmilingSafariRally from '../Images/peopleSmilingSafariRally.png';
import quote from '../Icons/quote.png';
import ElonMusk from '../Images/ElonMusk.jpg';
import customerService from '../Icons/customerService.png';
import store from '../Icons/store.png';
import event from '../Icons/event.png';
import Graduation from '../Images/Graduation.jpg';
import Wedding from '../Images/Wedding.jpg';
import Summertides from '../Images/Summertides.png';
import Rally from '../Images/Rally.png';


const HomeBody = () => {
    return (
    <>
    <div className="homebody">
        <div className="main-content">
            <div className="content">
                <div className="text">
                    <h2>Planning professional events has never been easier!</h2>
                    <p>Our easy-to-use website can help you plan successful events in a matter of minutes!</p>
                    <a href="events.html"><button id="getStarted">GET STARTED</button></a>
                </div>
                    <img src={peopleSmilingSafariRally} alt = "people Smiling" className="peopleSmilingSafariRally"/>
            </div>
        </div>

        <div className="main-content2">
            <div className="content2">
                <img src={quote} alt = "quote" className="elon"/>
                <p className="testimonial">"I used Plannit for Tesla's annual gala, and it was fantastic! The platform was easy to navigate, and incredibly comprehensive. The customizable event page and seamless payment system made planning stress-free, and our attendees loved the event. Thanks to Plannit, our event was a huge success. We'll definitely use this platform again!"</p>
                <img src={ElonMusk} alt="Elon Musk" className="elon"/>
                <h4 id="name">Elon Musk</h4>
                <h4 id="position">CEO</h4>
                <h4 id="company">Tesla</h4>
            </div>
        </div>

        <div className="main-content3">
            <h2>You've tried the rest, now go with the best!</h2>
            <div className="content3">
                <div className="factor">
                    <img src={customerService} alt="Customer Service"/>
                    <div className="description">Get the best event based on your resources</div>
                    <div className="deeperdescription">Our intuitive platform allows you to filter the exhaustive array of events based on your budget, preffered location, type of event, preferred vendors among others</div>
                </div>
                <div className="factor">
                    <img src={store} alt="Store"/>
                    <div className="description">Connect to our extensive list of credible vendors</div>
                    <div className="deeperdescription">Plannit collaborates with a wide range of vendors from florists to bakeries to restaurants, the list is endless. We easily connect you to the relevant vendors and streamline the communication process in an effective manner</div>
                </div>
                <div className="factor">
                    <img src={event} alt="Event"/>
                    <div className="description">Book your venue, confirm the event and enjoy!</div>
                    <div className="deeperdescription">Finally, once you have confirmed all your details and booked the venue, the vendors will be notified and will prepare accordingly. You can now enjoy a successful event!</div>
                </div>
            </div>
        </div>
        
        <div className="transition-container"></div>

        <div className="main-content4">
            <h2>Gallery</h2>
            <div className="content4">
                <img src={Graduation} alt="Graduation Party" className="gallery-item active"/>
                <img src={Wedding} alt="Wedding" className="gallery-item"/>
                <img src={Summertides} alt="Summertides" className="gallery-item"/>
                <img src={Rally} alt="Event" className="gallery-item"/>
            </div>
        </div>

    </div>
    </>
    )
}
export default HomeBody;