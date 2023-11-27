document.addEventListener('DOMContentLoaded', function() {
    // When the DOM is fully loaded
    const navbar = document.querySelector('.navbar'); // Get the navbar
    const stickyOffset = navbar.offsetTop; // Get the initial top offset of the navbar

    function makeSticky() {
        if (window.pageYOffset >= stickyOffset) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.addEventListener('scroll', makeSticky); // Add scroll event listener
});


