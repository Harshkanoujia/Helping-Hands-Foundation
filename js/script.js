// Get the navbar
var navbar = document.getElementById("mainNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Function to toggle the scrolled class based on scroll position
function toggleNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
}

// pop up
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var popup = document.getElementById("newsletter-popup");
        popup.style.display = "block";
        
        var closeButton = document.querySelector(".close");
        closeButton.addEventListener("click", function() {
            popup.style.display = "none";
        });
      
        var subscribeForm = document.getElementById("subscribe-form");
        subscribeForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            // You can add your logic here to handle form submission (e.g., AJAX request)
            console.log("Name:", name);
            console.log("Email:", email);
            // Close the popup after submission
            popup.style.display = "none";
        });
    }, 4000); // 4000 milliseconds = 4 seconds
  
    var triggerButton = document.getElementById("newsletter-trigger");
    triggerButton.addEventListener("click", function() {
        var popup = document.getElementById("newsletter-popup");
        popup.style.display = "block";
    });
});
  
// pop up

// Add scroll event listener to window
window.onscroll = function() {
    toggleNavbar();
};

window.addEventListener('scroll', function() {
    var navbarHeight = document.getElementById('navbar').offsetHeight;
    var contentOffset = document.getElementById('content').getBoundingClientRect().top;
    var image = document.getElementById('bottomLeftImage');
    
    // Adjust this value according to when you want the image to become fixed
    var scrollThreshold = navbarHeight;
    if (contentOffset < scrollThreshold) {
        image.classList.add('fixedImage');
    } else {
        image.classList.remove('fixedImage');
    }
});