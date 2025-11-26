// Get current count
let count = Number(localStorage.getItem("reviewCount")) || 0;

// Increase count
count++;

// Save back to storage
localStorage.setItem("reviewCount", count);

// Display in the confirmation page
document.getElementById("reviewCount").textContent = count;
