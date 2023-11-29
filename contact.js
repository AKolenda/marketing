document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form from submitting to a server
        form.reset(); // Clear the form fields

        // Create and show toast notification
        var toast = document.createElement('div');
        toast.className = 'form-toast';
        toast.textContent = 'Thank You For Submitting Your Request!';
        document.body.appendChild(toast);

        // Animate toast notification
        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 500); // Wait for animation to finish before removing
            }, 3000); // Duration the toast notification stays on screen
        }, 100);
    });
});



