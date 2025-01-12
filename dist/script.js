// Get the current hour (0-23)
const currentHour = new Date().getHours();

// Determine the greeting based on the hour
let greetingMessage;
if (currentHour < 12) {
  greetingMessage = "Good Morning";
} else if (currentHour < 16) {
  greetingMessage = "Good Afternoon";
} else {
  greetingMessage = "Good Evening";
}

// Find the element with the class 'greetings' and update its text content
const greetingElement = document.querySelector('.greetings');
if (greetingElement) {
  greetingElement.textContent = greetingMessage;
}
