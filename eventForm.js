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
    const formContainer = document.getElementById('form-container');

    const forms = {
        wedding: `
            <div class="form-content">
                <form>
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
                    <label for="transport">Limousine Transport to and from the venue</label>
                    <input type="checkbox" id="transport"><br><br>
                    <label for ="date">Date: </label>
                    <input type="date" id="date"><br><br>

                    <button type="submit">Next</button>
                    <input type="reset">

                </form>
            </div>`,
        birthday: `
            <div class="form-content">
                <h3>Birthday Party Details</h3>
                <form>
                    <label for="venue">Select Venue:</label>
                    <select id="venue" name="venue">
                        <option value="venue1">Birthday Venue 1</option>
                        <option value="venue2">Birthday Venue 2</option>
                    </select>
                    <label for="vendor">Select Vendor:</label>
                    <select id="vendor" name="vendor">
                        <option value="vendor1">Birthday Vendor 1</option>
                        <option value="vendor2">Birthday Vendor 2</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>`,
    };

    if (eventType) {
        eventTitle.textContent = `${eventType.charAt(0).toUpperCase() + eventType.slice(1)} Event Details`;
        formContainer.innerHTML = forms[eventType] || '<p>No form available for this event type.</p>';
        console.log(`Form content loaded for event type: ${eventType}`);
    } else {
        formContainer.innerHTML = '<p>No event type specified.</p>';
        console.error('No event type specified in query parameter.');
    }
});
