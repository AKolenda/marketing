document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form from submitting to a server

        // Clear the form fields
        form.reset();

        // Show thank you message
        thankYouMessage.style.display = 'block';

        // Optionally hide the message after some time
        setTimeout(function() {
            thankYouMessage.style.display = 'none';
        }, 3000); // Hide after 3 seconds
    });
});
