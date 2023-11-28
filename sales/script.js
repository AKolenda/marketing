document.addEventListener('DOMContentLoaded', function() {
    // When the DOM is fully loaded
    const navbar = document.querySelector('.navbar'); // Get the navbar
    const stickyOffset = navbar.offsetTop; // Get the initial top offset of the navbar

    function makeSticky() {
        if (window.scrollY >= stickyOffset) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.addEventListener('scroll', makeSticky); // Add scroll event listener
});


document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }        
        });
    }
});

