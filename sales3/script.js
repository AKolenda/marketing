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


document.addEventListener('DOMContentLoaded', function() {
    var addToCartButton = document.querySelector('.add-to-cart-btn');
    addToCartButton.addEventListener('click', function() {
      // Change button text and style
      this.textContent = 'Added!';
      this.classList.add('added');
  
      // Show a toast notification
      var toast = document.createElement('div');
      toast.className = 'cart-toast';
      toast.textContent = 'Item added to cart!';
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
  
      // Revert button text after some time
      setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.classList.remove('added');
      }, 2000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var images = ["../pictures/SP5.png", "../pictures/SP4.png", "../pictures/Bag55.png"];
  var currentImageIndex = 0;
  var slideshowInterval;

  function changeImage(next = true) {
      // Determine the next index, wrapping around if necessary
      currentImageIndex = next ? (currentImageIndex + 1) % images.length : (currentImageIndex - 1 + images.length) % images.length;
      document.getElementById('slideshow').src = images[currentImageIndex];
  }

  // Set up the slideshow interval
  function startSlideshow() {
      slideshowInterval = setInterval(() => changeImage(), 15000);
  }

  // Stop the slideshow
  function stopSlideshow() {
      clearInterval(slideshowInterval);
  }

  // Start the slideshow automatically
  startSlideshow();

  // Manual controls
  document.getElementById('prev').addEventListener('click', function() {
      changeImage(false);
      stopSlideshow(); // Stop the automatic slideshow when manually controlled
  });

  document.getElementById('next').addEventListener('click', function() {
      changeImage(true);
      stopSlideshow(); // Stop the automatic slideshow when manually controlled
  });
});

  



// document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
//     // Assuming you have a product ID and quantity
//     fetch('/add-to-cart', {
//       method: 'POST',
//       body: JSON.stringify({
//         productId: '123',
//         quantity: 1
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if(data.success) {
//           // Visual feedback code goes here
      
//           // Change button text and style
//           const addToCartButton = document.querySelector('.add-to-cart-btn');
//           addToCartButton.textContent = 'Added!';
//           addToCartButton.classList.add('added');
      
//           // Show a toast notification
//           const toast = document.createElement('div');
//           toast.className = 'cart-toast';
//           toast.textContent = 'Item added to cart!';
//           document.body.appendChild(toast);
      
//           // Animate toast notification
//           setTimeout(() => {
//             toast.classList.add('show');
//             setTimeout(() => {
//               toast.classList.remove('show');
//               setTimeout(() => {
//                 document.body.removeChild(toast);
//               }, 500); // Wait for animation to finish before removing
//             }, 3000); // Duration the toast notification stays on screen
//           }, 100);
      
//           // Revert button text after some time
//           setTimeout(() => {
//             addToCartButton.textContent = 'Add to Cart';
//             addToCartButton.classList.remove('added');
//           }, 2000);
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
      
//   });
  