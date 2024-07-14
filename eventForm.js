document.addEventListener("DOMContentLoaded", function() {
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const queryString = window.location.search;
    console.log(`Query string: ${queryString}`);

    const eventType = getQueryParameter('event');
    console.log(`Event type from query parameter: ${eventType}`);

    const eventTitle = document.getElementById('event-title');
    const formContainer = document.getElementById('event-form');
    
    const paymentForm = document.getElementById('payment-form');
    const successMessage = document.getElementById('success-message');

    const forms = {
        wedding: `
            <div class="form-content" id="weddingPoster">
                <form id="weddingForm">
                    <label for="numberOfGuests">Number of Guests:</label>
                    <input type="number" id="numberOfGuests" min="0" max="5000" placeholder=50><br><br>
                    <label for="venue">Venue:</label>
                    <select id="venue" name="venue">
                        <option value="" disabled selected>Select a venue</option>
                        <option value="venue1">Diani Reef Beach Resort & Spa</option>
                        <option value="venue2">All Saints' Cathedral</option>
                        <option value="venue3">Safari Park Hotel</option>
                        <option value="venue4">Windsor Golf Hotel and County</option>
                        <option value="venue5">Zen Garden</option>
                    </select><br><br>
                    <label for="florist">Florist:</label>
                    <select id="florist" name="florist">
                        <option value="" disabled selected>Select a florist</option>
                        <option value="florist1">Top Florist Kenya</option>
                        <option value="florist2">Nairobi Florist Fresh Flowers</option>
                        <option value="florist3">Pablo Gift Shop & Florist Nairobi</option>
                        <option value="florist4">Fresh Flowers Delivery Nairobi</option>
                        <option value="florist5">Jospah Florist Nairobi</option>
                    </select><br><br>
                    <label for="decorations">Decorator:</label>
                    <select id="decorations" name="decorations">
                        <option value="" disabled selected>Select your preferred decor</option>
                        <option value="decorations1">Elated Events & Decor Services</option>
                        <option value="decorations2">Cheri Cheri Events</option>
                        <option value="decorations3">Aura By Fatema Bhaiji</option>
                        <option value="decorations4">Lush Occasions - Kenya</option>
                    </select><br><br>
                    <label for="catering">Caterers:</label>
                    <select id="catering" name="catering">
                        <option value="" disabled selected>Select the caterers</option>
                        <option value="catering1">Ole Sereni, Nairobi</option>
                        <option value="catering2">Catering Services Company</option>
                        <option value="catering3">Lime Catering | Outside Catering</option>
                        <option value="catering4">Ritchwood Kitchen and Caterers</option>
                    </select><br><br>
                    <label for="bakery">Bakery:</label>
                    <select id="bakery" name="bakery">
                        <option value="" disabled selected>Select the bakery</option>
                        <option value="bakery1">Wedding Cakes Kenya</option>
                        <option value="bakery2">Patisserie Eli - Nairobi Wedding Cakes</option>
                        <option value="bakery3">Sweet Inspirations Cakes/option>
                        <option value="bakery4">Pinkribbon cakedelight</option>
                    </select><br><br>
                    <label for="photgraphy">Photographer:</label>
                    <select id="photography" name="photography">
                        <option value="" disabled selected>Select the photographer</option>
                        <option value="photography1">Kiss the bride Photographers</option>
                        <option value="photography2">Antony Trivet Photography</option>
                        <option value="photography3">Versatile Photographers</option>
                        <option value="photography4">Kelvin Maina | Professional Photgrapher</option>
                    </select><br><br>
                    <label for="entertainment">Entertainment:</label>
                    <select id="entertainment" name="entertainment">
                        <option value="" disabled selected>Select your preferred entertainment</option>
                        <option value="entartainment1">The Booth Live Bands, MCs & DJs</option>
                        <option value="entertainment2">Jameson Events</option>
                        <option value="entertainment3">Henrique The Dj</option>
                        <option value="entertainment4">Elite Focus Entertainment</option>
                    </select><br><br>
                    <label for="reception">Reception Venue:</label>
                    <select id="reception" name="reception">
                        <option value="" disabled selected>Select the reception venue</option>
                        <option value="reception1">Westlands Banquet Centre</option>
                        <option value="reception2">Marula Manor</option>
                        <option value="reception3">SAME AS WEDDING VENUE</option>
                    </select><br><br>
                    <label for="honeymoon">Honeymoon Suite:</label>
                    <select id="honeymoon" name="honeymoon">
                        <option value="" disabled selected>Select the honeymoon suite</option>
                        <option value="honeymoon1">Villa Rosa Kempinski</option>
                        <option value="honeymoon2">Maasai Mara National Reserve</option>
                        <option value="honeymoon3">Lamu Island</option>
                    </select><br><br>
                    <label for="transport">Limousine Transport to and from the venue?</label>
                    <input type="checkbox" id="transport"><br><br>
                    <label for ="date">Date: </label>
                    <input type="date" id="date" required><br><br>

                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,
        birthday: `
            <div class="form-content" id="birthdayPoster">
                <form id="birthdayForm">
                    <label for="numberOfGuests">Number of Guests:</label>
                    <input type="number" id="numberOfGuests" min="0" max="5000" placeholder=50><br><br>
                    <label for="venue">Venue:</label>
                    <select id="venue" name="venue">
                        <option value="" disabled selected>Select a venue</option>
                        <option value="venue1">Lang'ata Road Go Karting</option>
                        <option value="venue2">Diamond Plaza's Rock Climbing</option>
                        <option value="venue3">Paintball Fury Limited (Between Langata and Karen)</option>
                        <option value="venue4">Pablo's Mexobar</option>
                        <option value="venue5">Carnivore</option>
                    </select><br><br>
                    <label for="date">Date:</label>
                    <input type="date" id="date" required><br><br>
                    <label for="theme">Any preferred theme?</label>
                    <input type="text" id="theme" placeholder="Zilizopendwa Art, Music and Fashion"><br><br>
                    <label for="catering">Caterers:</label>
                    <select id="catering" name="catering">
                        <option value="" disabled selected>Select the caterers</option>
                        <option value="catering1">Samira's Kitchen</option>
                        <option value="catering2">Personal Chef Services and Catering by Chef Jonathan</option>
                        <option value="catering3">Divine Caterers</option>
                        <option value="catering4">Chef Link Catering Limited</option>
                    </select><br><br>
                    <label for="bakery">Bakery:</label>
                    <select id="bakery" name="bakery">
                        <option value="" disabled selected>Select the bakery</option>
                        <option value="bakery1">Posh Bakery</option>
                        <option value="bakery2">Super Fresh Cakes Bakers</option>
                        <option value="bakery3">Black Forest Cake House</option>
                        <option value="bakery4">Cake City KE</option>
                    </select><br><br>
                    <label for="photgraphy">Photographer:</label>
                    <select id="photography" name="photography">
                        <option value="" disabled selected>Select the photographer</option>
                        <option value="photography1">Dakks Photography</option>
                        <option value="photography2">Perfect Click Studio</option>
                        <option value="photography3">Star101 Photography</option>
                        <option value="photography4">Kelvin Maina | Professional Photgrapher</option>
                    </select><br><br>
                    <label for="entertainment">Entertainment:</label>
                    <select id="entertainment" name="entertainment">
                        <option value="" disabled selected>Select your preferred entertainment</option>
                        <option value="entartainment1">Kiddie Entertainment Services</option>
                        <option value="entertainment2">Puff the Entertainer</option>
                        <option value="entertainment3">Mc James Passi Nairobi</option>
                        <option value="entertainment4">Live Band Services</option>
                    </select><br><br>
                    <label for="decorations">Decorations:</label>
                    <select id="decorations" name="decorations">
                        <option value="" disabled selected>Select the decor</option>
                        <option value="decorations1">House of Party Supplies Kenya - Waterfront</option>
                        <option value="decorations2">The party decor Kenya</option>
                        <option value="decorations3">Party Themes Ke.</option>
                    </select><br><br>
                    <label for="beverages">Prefered type of beverages:</label>
                    <label for="alcoholic">Alcoholic</label>
                    <input type="radio" id="alcoholic" value="alcoholic" name="beverages">
                    <label for="non-alcoholic">Non-Alcoholic</label>
                    <input type="radio" id="non-alcoholic" value="non-alcoholic" name="beverages"><br><br>

                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,
        corporate: `
            <div class="form-content" id="corporatePoster">
                <form id="corporateForm">
                    <label for="numberOfDelegates">Number of Delegates:</label>
                    <input type="number" id="numberOfDelegates" min="0" max="5000" placeholder=50><br><br>
                    <label for="venue">Venue:</label>
                    <select id="venue" name="venue">
                        <option value="" disabled selected>Select a venue</option>
                        <option value="venue1">KICC</option>
                        <option value="venue2">Villa Rosa Kempinski</option>
                        <option value="venue3">Hotel Intercontinental</option>
                        <option value="venue4">University of Nairobi</option>
                        <option value="venue5">Radisson Blu Hotel</option>
                    </select><br><br>
                    <label for="catering">Catering:</label>
                    <select id="catering" name="catering">
                        <option value="" disabled selected>Select a caterer</option>
                        <option value="catering1">Rozabell Catering Company</option>
                        <option value="catering2">Cheflink Catering</option>
                        <option value="catering3">Spez Limited</option>
                        <option value="catering4">Professional Caterers | Nairobi Kenya</option>
                        <option value="catering5">VENUE CATERERS</option>
                    </select><br><br>
                    <label for="date">Date:</label>
                    <input type="date" id="date" required><br><br>
                    <label for="objective">Objective:</label>
                    <input type="text" id="objective" placeholder="Sustainable Development Goals"><br><br>
                    <label for="description">Description:</label>
                    <textarea id="descrption" rows="3" cols="25" placeholder="We shall be discussing the measures that ought to be taken to achieve our Sustainable Development Goals (SDGs)"></textarea><br><br>
                    <label for="">Conduct post event follow-up:</label><br><br> 
                    <label for="surveys"> Conduct Surveys?</label>
                    <input type="checkbox" id="surveys"><br><br>
                    <label for="thank-you-emails"> Send Thank You Emails?</label>
                    <input type="checkbox" id="thank-you-emails"><br><br>
                    <label for="feedback"> Send Feedback Forms?</label>
                    <input type="checkbox" id="feedback"><br><br>

                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,
        concert: `
            <div class="form-content" id="concertPoster">
                <form id="concertForm">
                    <label for="numberOfPeople">Expected number of fans:</label>
                    <input type="number" id="numberOfPeople" min="0" max="5000" placeholder=50><br><br>
                    <label for="venue">Venue:</label>
                    <select id="venue" name="venue">
                        <option value="" disabled selected>Select a venue</option>
                        <option value="venue1">Carnivore</option>
                        <option value="venue2">Brew Bistro and Lounge</option>
                        <option value="venue3">K1 Klub House</option>
                        <option value="venue4">Sarabi Rooftop Restaurant</option>
                        <option value="venue5">All Saints Cathedral Trinity Center Auditorium</option>
                    </select><br><br>
                    <label for="performer">Performer:</label>
                    <select id="performer" name="performer">
                        <option value="" disabled selected>Select a performer</option>
                        <option value="performer1">MYSELF</option>
                        <option value="performer2">Sauti Sol</option>
                        <option value="performer3">Kinoti</option>
                        <option value="performer4">Nikita Kering'</option>
                        <option value="performer5">Korbs ft. Kahush</option>
                    </select><br><br>
                    <label for="soundAndLighting">Sound And Lighting:</label>
                    <select id="soundAndLighting" name="soundAndLighting">
                        <option value="" disabled selected>Select a sound/lighting team</option>
                        <option value="soundAndLighting1">Sound and Lighting Kenya</option>
                        <option value="soundAndLighting2">Sound Fusion Limited</option>
                        <option value="soundAndLighting3">Three jr Audio Visual Ltd</option>
                        <option value="soundAndLighting4">LED Power Technologies EA K Ltd</option>
                        <option value="soundAndLighting5">StagePass Audio Visual Limited</option>
                    </select><br><br>
                    <label for="photography">Photographer:</label>
                    <select id="photography" name="photography">
                        <option value="" disabled selected>Select a photography team</option>
                        <option value="photography1">Lee Pitts Photography</option>
                        <option value="photography2">Photmagic Studio Limited</option>
                        <option value="photography3">Urban Photography Studio</option>
                        <option value="photography4">Spartan Photography</option>
                        <option value="photography5">Kelvin Maina | Professional Photographer</option>
                    </select><br><br>
                    <label for="security">Security:</label>
                    <select id="security" name="security">
                        <option value="" disabled selected>Select a securtiy team</option>
                        <option value="security1">Brinks Security Services Limited</option>
                        <option value="security2">Senaca East Africa</option>
                        <option value="security3">Magen Security Services</option>
                        <option value="security4">KK Security - A GardaWorld Company</option>
                    </select><br><br>
                    <label for="date">Date:</label>
                    <input type="date" id="date" required><br><br>
                    <label for="tickets">Sell tickets at the entrance?</label>
                    <input type="checkbox" id="tickets"><br><br>
                    <label for="backstage">Provide backstage refreshments?</label>
                    <input type="checkbox" id="backstage"><br><br>
                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,  
        picnic: `
            <div class="form-content" id="picnicPoster">
                <form id="picnicForm">
                    <label for="numberOfFriends">Number of friends:</label>
                    <input type="number" id="numberOfFriends" min="0" max="500" placeholder=15><br><br>
                    <label for="venue">Venue:</label>
                    <select id="venue" name="venue">
                        <option value="" disabled selected>Select a venue</option>
                        <option value="venue1">Amani Garden - Karura Forest</option>
                        <option value="venue2">Kingfisher Picnic Site</option>
                        <option value="venue3">The Oloolua Nature Trail</option>
                        <option value="venue4">Mokoyeti Picnic Spot</option>
                        <option value="venue5">Cental Park Nairobi</option>
                    </select><br><br>
                    <label for="food">Food Provider:</label>
                    <select id="food" name="food">
                        <option value="" disabled selected>Select a food provider</option>
                        <option value="food1">We will bring our own food</option>
                        <option value="food2">Picnics by Njoki</option>
                        <option value="food3">Lucho</option>
                        <option value="food4">Pizza Inn</option>
                        <option value="food5">KFC</option>
                    </select><br><br>
                    <label for="beverages">Beverage Provider:</label>
                    <select id="beverages" name="beverages">
                        <option value="" disabled selected>Select a beverage provider</option>
                        <option value="beverages1">Mixology Events Kenya</option>
                        <option value="beverages2">Barttituede Mixologist and Events</option>
                        <option value="beverages3">Highlands Drinks Limited</option>
                        <option value="beverages4">Aquamist Limited</option>
                        <option value="beverages5">CocaCola Limited</option>
                    </select><br><br>
                    <label for="paintingSupplies">Painting Supplies:</label>
                    <select id="paintingSupplies" name="paintingSupplies">
                        <option value="" disabled selected>Select a painting supplier</option>
                        <option value="paintingSupplies1">Eva's Nairobi Art Supplies</option>
                        <option value="paintingSupplies2">Novel Paints Ltd</option>
                        <option value="paintingSupplies3">Bristles Arts and Crafts Supplies</option>
                        <option value="paintingSupplies4">Sip and Paint Kenya</option>
                        <option value="paintingSupplies5">Paint and Brush Events</option>
                    </select><br><br>
                    <label for="date">Date:</label>
                    <input type="date" id="date" required><br><br>
                    <h3>* Bring your own blankets and music *</h3>
                    
                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,
        social: `
            <div class="form-content" id="socialPoster">
                <form id="socialForm">
                    <label for="numberOfPeople">Number of People:</label>
                    <input type="number" id="numberOfPeople" min="0" max="500" placeholder=15><br><br>
                    <label for="venue">Venue:</label>
                    <select id="venue" name="venue">
                        <option value="" disabled selected>Select a venue</option>
                        <option value="venue1">HOME</option>
                        <option value="venue2">Cafe Kaya</option>
                        <option value="venue3">Java House</option>
                        <option value="venue4">CJ's</option>
                        <option value="venue5">Fogo Gaucho</option>
                        <option value="venue6">The Sarit Centre</option>
                    </select><br><br>
                    <label for="food">Caterer:</label>
                    <select id="food" name="food">
                        <option value="" disabled selected>Select a food provider</option>
                        <option value="food1">We will cook our own food</option>
                        <option value="food2">The Perfect Plate</option>
                        <option value="food3">LSG Sky Chefs</option>
                        <option value="food4">Cess Caterers Nairobi</option>
                        <option value="food5">Kijiji Cuisine</option>
                    </select><br><br>
                    <label for="beverages">Beverage Provider:</label>
                    <select id="beverages" name="beverages">
                        <option value="" disabled selected>Select a beverage provider</option>
                        <option value="beverages1">Nairobi Drinks</option>
                        <option value="beverages2">Oaks & Corks</option>
                        <option value="beverages3">Drinks Zone</option>
                        <option value="beverages4">Dasani Limited</option>
                        <option value="beverages5">CocaCola Limited</option>
                    </select><br><br>
                    <label for="date">Date:</label>
                    <input type="date" id="date" required><br><br>
                    <label for="theme">Theme:</label>
                    <input type="text" id="theme" placeholder="Any theme?"><br><br>
                    
                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,
        fundraiser: `
            <div class="form-content" id="fundraiserPoster">
                <form id="fundraiserForm">
                    <label for="title">Title:</label>
                    <input type="text" id="title" placeholder="Elimisha Fund"><br><br>
                    <label for="goal">Goal (Kshs):</label>
                    <input type="number" id="goal" placeholder=50000><br><br>
                    <label for="type">Type:</label>
                    <label for="type">Physical</label>
                    <input type="radio" id="type" name="type">
                    <label for="type">Online</label>
                    <input type="radio" id="type" name="type"><br><br>   
                    <label for="location">Location (if physical):</label>
                    <select id="location" name="location">
                        <option value="" disabled selected>Select a location</option>
                        <option value="location1>HOME</option>
                        <option value="location2">Kenya Association of Fundraising Professionals</option>
                        <option value="location3">Multi-Purpose Hall</option>
                        <option value="location4">Shree Cutchi Leva Samaj Hall</option>
                        <option value="location5">Oak Place Conference & Training Centre</option>
                    </select><br><br>   
                    <label for="online">Donation Link (if online)</label>
                    <input type="text" id="online" placeholder="Enter the donation link"><br><br>
                    <label for="date">Date (if applicable):</label>
                    <input type="date" id="date"><br><br>
                    <label for="payment">Payment methods acceptied:</label><br><br>
                    <label for="mpesa">MPESA</label>
                    <input type="checkbox" id="mpesa"><br><br>
                    <label for="airtel">Airtel Money</label>
                    <input type="checkbox" id="airtel"><br><br> 
                    <label for="cash">Cash</label>
                    <input type="checkbox" id="cash"><br><br>           
                    
                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,
        other: `
            <div class="form-content" id="otherPoster">
                <form id="otherForm">
                    <label for="type">Type:</label>
                    <input type="text" id="type" placeholder="eg Graduation Party"><br><br>
                    <label for="mode">Mode of event:</label>
                    <label for="mode">Physical</label>
                    <input type="radio" id="mode" name="mode">
                    <label for="mode">Online</label>
                    <input type="radio" id="mode" name="mode"><br><br>   
                    <label for="location">Location (if physical):</label>
                    <input type="text" id="location" placeholder="Enter preferred location"><br><br>  
                    <label for="link">Link (if online):</label>
                    <input type="text" id="link" placeholder="Enter relevant link"><br><br> 
                    <label for="date">Date (if applicable):</label>
                    <input type="date" id="date"><br><br>
                    <label for="description">Additional Information:</label>
                    <textarea id="description" rows="3" cols="25" placeholder="Please describe the type of event you wish to plan, including requirements in terms of vendors and a venue"></textarea><br><br>
                    <label for="file">Upload any relevant files (invitation, design etc):</label>
                    <input type="file" id="file"><br><br>
                    
                    <input type="submit" value="Submit">
                    <input type="reset">

                </form>
            </div>`,
    };

    function loadEventForm(eventType) {
        eventTitle.textContent = `Event: ${eventType}`;
        formContainer.innerHTML = forms[eventType] || forms['other'];

        const eventForm = document.querySelector(`#${eventType}Form`);
        if (!eventForm) {
            console.error("Event form not found!");
            return;
        }

        eventForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Event form submitted");

            const formData = new FormData(eventForm);
            const formEntries = Object.fromEntries(formData.entries());

            updatePaymentForm(formEntries);

            paymentForm.style.display = 'block';
            successMessage.style.display = 'none';
        });
    }

    function updatePaymentForm(formEntries) {
        const paymentDetailsContainer = document.getElementById('payment-details');
        if (!paymentDetailsContainer) {
            console.error("Payment details container not found!");
            return;
        }

        paymentDetailsContainer.innerHTML = '';

        for (const [key, value] of Object.entries(formEntries)) {
            const detailElement = document.createElement('p');
            detailElement.textContent = `${key}: ${value}`;
            paymentDetailsContainer.appendChild(detailElement);
        }
    }

    if (eventType) {
        loadEventForm(eventType);
    } else {
        console.error("Event type not specified in the query parameters.");
    }

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle payment form submission
        successMessage.style.display = 'block';
        paymentForm.style.display = 'none';
    });
});
