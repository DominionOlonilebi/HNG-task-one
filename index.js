// Slack Display Name
const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]');
slackDisplayName.textContent = "Dmd103";

// Slack Day
const currentDay = document.querySelector('[data-testid="currentDay"]');
const options = { weekday: 'long' };
currentDay.textContent = new Date().toLocaleDateString('en-US', options);

// Slack Time
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');

// Function to update time every second
setInterval(() => {
    const now = new Date();
    const hoursUTC = now.getUTCHours(); // UTC hours
    const minutesUTC = now.getUTCMinutes();
    const secondsUTC = now.getUTCSeconds();

    // Adjust for UTC-1 (Eastern Time Zone for example)
    const hours = (hoursUTC + 1) % 24; // Adding 1 hour to UTC to get EST/EDT
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // Convert to 12-hour format

    const timePart = `${hours12.toString().padStart(2, '0')}:${minutesUTC.toString().padStart(2, '0')}:${secondsUTC.toString().padStart(2, '0')} ${ampm}`;
    currentTimeUTC.textContent = timePart;
}, 1000);

// Slack Email
const slackEmail = document.querySelector('[data-testid="slackEmail"]');
slackEmail.textContent = "olonilebidominion@gmail.com";
