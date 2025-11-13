// Static weather data for calculation (from HTML)
const TEMP_C = parseFloat(document.getElementById('temperature').textContent);
const WIND_KMH = parseFloat(document.getElementById('wind-speed').textContent);

/**
 * Calculates the wind chill factor in Celsius.
 * Formula: T_wc = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
 * Where T is air temperature in °C and V is wind speed in km/h.
 * @param {number} temp - Air temperature in Celsius (°C).
 * @param {number} windSpeed - Wind speed in kilometers per hour (km/h).
 * @returns {number} The calculated wind chill factor in Celsius.
 */
function calculateWindChill(temp, windSpeed) {
    // One line of code for the calculation as required
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
}

// Function to calculate and display the wind chill value
function displayWindChill() {
    const windChillElement = document.getElementById('wind-chill-value');

    // Conditions for Viable Wind Chill Calculation (Metric)
    const isTempViable = TEMP_C <= 10; // Temperature is less than or equal to 10 °C
    const isWindViable = WIND_KMH > 4.8; // Wind speed is greater than 4.8 km/h

    if (isTempViable && isWindViable) {
        // Calculate and round the result
        const windChill = calculateWindChill(TEMP_C, WIND_KMH);
        windChillElement.textContent = windChill.toFixed(1); // Display with one decimal place
    } else {
        // Display "N/A" if conditions are not met
        windChillElement.textContent = "N/A";
    }
}

// Function to set the footer dates
function setFooterDates() {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set the last modified date
    document.getElementById('lastmodified').textContent = document.lastModified;
}


// Event listeners to run functions when the page loads
window.addEventListener('load', () => {
    setFooterDates();
    displayWindChill(); // Calculate and display wind chill on page load
});