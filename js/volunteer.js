document.getElementById("logout-btn").addEventListener("click", function() {
    // Show loading animation
    document.getElementById("loading").style.display = "block";

    // Delay redirect for 3 seconds
    setTimeout(function() {
        // Redirect to desired page after 3 seconds
        window.location.href = "index.html"; // Replace with your desired URL
    }, 3000);
});