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

// Form Submission to Google Sheets
const form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `
            <div id="successMessage" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; border: 1px solid #cccccc; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); color: #008000; font-size: 16px; font-weight: bold; opacity: 0; transition: opacity 1s;">
                Thanks for Contacting us..! We Will Contact You Soon...
            </div>`;

            document.body.appendChild(successMessage);
            setTimeout(() => {
                document.getElementById('successMessage').style.opacity = 1;
            }, 100); // Delay appearance for 100 milliseconds
            setTimeout(() => {
                document.getElementById('successMessage').style.opacity = 0;
                setTimeout(() => {
                    successMessage.remove();
                }, 1000); // Remove after transition ends (1 second)
            }, 6000); // Remove after 6 seconds
        })
        .catch(error => console.error('Error!', error.message));
});


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