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



let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();