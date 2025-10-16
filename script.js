// --- 1. MANUALLY SET YOUR DESIRED DATE AND TIME HERE ---
// Format: "Month Day, Year Hour:Minute:Second"
// Example: "May 25, 2026 09:00:00"
const targetDateString = "May 25, 2026 09:00:00"; 
// ----------------------------------------------------

const targetDate = new Date(targetDateString).getTime();

// Display the target date on the page
document.getElementById('target-date').textContent = new Date(targetDate).toLocaleDateString();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Check if the countdown has finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").textContent = "J-E-E";
        document.getElementById("hours").textContent = "O-N";
        document.getElementById("minutes").textContent = "T-O-P";
        document.getElementById("seconds").textContent = "L-I-N-E";
        return;
    }

    // Calculations for time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Function to ensure numbers have leading zeros (e.g., 5 -> 05)
    const pad = (num) => String(num).padStart(2, '0');

    // Update the HTML elements (the boxes)
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = pad(hours);
    document.getElementById("minutes").textContent = pad(minutes);
    document.getElementById("seconds").textContent = pad(seconds);
}

// Update the countdown immediately and then every 1 second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);