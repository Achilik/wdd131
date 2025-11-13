// Global Constants for Wind Chill Calculation
const TEMP_CELSIUS = 28; // Static temperature from HTML content
const WIND_SPEED_KMH = 12; // Static wind speed from HTML content

// 1. Footer Year and Last Modified Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;


// 2. Wind Chill Calculation Function (Metric Formula for °C and km/h)
// Formula: T_wc = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
// T = Air Temperature (°C), V = Wind Speed (km/h)
// Function returns the calculated wind chill factor or a string.
const calculateWindChill = (tempC, windKmh) => {
    // Check required conditions for Wind Chill calculation (Metric system)
    // Temperature <= 10 °C AND Wind speed > 4.8 km/h
    if (tempC <= 10 && windKmh > 4.8) {
        // Return calculation on a single line (required)
        return (13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windKmh, 0.16)) + (0.3965 * tempC * Math.pow(windKmh, 0.16))).toFixed(1) + " °C";
    } else {
        // Display "N/A" if conditions are not met (required)
        return "N/A";
    }
}

// 3. Display Wind Chill on Page Load
const windChillElement = document.getElementById('windchill');
const windChillResult = calculateWindChill(TEMP_CELSIUS, WIND_SPEED_KMH);

// Since TEMP_CELSIUS (28) > 10, the result will be "N/A", fulfilling the required provision.
windChillElement.textContent = windChillResult;