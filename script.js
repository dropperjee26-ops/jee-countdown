// --- 1. MANUALLY SET YOUR DESIRED DATE AND TIME HERE ---
// Format: "Month Day, Year Hour:Minute:Second"
// Tentative JEE Advanced 2026 Date
const TARGET_DATE = new Date("January 20, 2026 09:00:00").getTime();
// ----------------------------------------------------

const container = document.getElementById('blocks-container');
const dayCountDisplay = document.getElementById('day-count');
const MS_PER_DAY = 1000 * 60 * 60 * 24;

function calculateDaysRemaining() {
    const now = new Date().getTime();
    
    // Time remaining in milliseconds
    let distance = TARGET_DATE - now;

    // The key calculation: The number of full days left, rounded UP.
    // If we have 2.5 days left, we need 3 blocks.
    const totalDaysRemaining = Math.ceil(distance / MS_PER_DAY);
    
    // The total number of days from today until the target date
    const totalDurationDays = Math.ceil((TARGET_DATE - new Date().setHours(0, 0, 0, 0)) / MS_PER_DAY) + 1;
    
    // If countdown is over
    if (distance <= 0) {
        dayCountDisplay.textContent = "0";
        container.innerHTML = '<h2>Time to Shine! ✨</h2>';
        return 0;
    }

    // Update the simple numerical display
    dayCountDisplay.textContent = totalDaysRemaining;
    return totalDaysRemaining;
}

function generateDayBlocks() {
    // Clear any existing blocks
    container.innerHTML = '';
    
    const totalDays = calculateDaysRemaining();
    
    // Determine the total number of blocks we should show (remaining days + passed days)
    // We use a fixed start date (e.g., today) to figure out how many blocks *should* be there.
    // For simplicity and alignment with your request, we only create blocks for remaining days.
    
    for (let i = 0; i < totalDays; i++) {
        const block = document.createElement('div');
        block.classList.add('day-block');
        // Optional: you could add a tooltip to the block to show the day number
        // block.title = `Day ${i + 1} remaining`; 
        container.appendChild(block);
    }
}

// Run this immediately and then only once a day (since the display is only based on days)
// However, we run it every 60 seconds to ensure the display is fairly up-to-date even if the user leaves the page open.
generateDayBlocks();
setInterval(generateDayBlocks, 60000); // Check and re-render blocks every minute
