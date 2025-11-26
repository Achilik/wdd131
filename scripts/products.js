// Product Array
const products = [
    { id: 1, name: "Solar Panel 360W" },
    { id: 2, name: "Deep-Cycle Battery 200Ah" },
    { id: 3, name: "Pure Sine Inverter 5kVA" },
    { id: 4, name: "LED Floodlight 150W" },
    { id: 5, name: "Smart Thermostat X1" }
];

// Insert products into select menu
const productSelect = document.getElementById("product");

products.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.name;
    opt.textContent = item.name;
    productSelect.appendChild(opt);
});

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