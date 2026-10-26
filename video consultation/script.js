/* script.js */

/*
   This script handles the interactivity.
   For now, it just adds a simple alert to the
   "Subscribe" form in the footer.
*/

// Example: Adding a simple alert to the subscribe form
const subscribeForm = document.getElementById('subscribe-form');

// It's good practice to check if the element exists
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the page from reloading
        alert('Thank you for subscribing!');
        // In a real site, this would send the email to a server.
    });
}
