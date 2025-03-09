function validateForm() {
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('father-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var qualification = document.getElementById('qualification').value;
    var address = document.getElementById('address').value;

    var error = "";

    if (!name) {
        error += "Name is required.\n";
    }

    if (!fatherName) {
        error += "Father's Name is required.\n";
    }

    if (!email) {
        error += "Email Address is required.\n";
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            error += "Email Address is invalid.\n";
        }
    }

    if (!phone) {
        error += "Phone Number is required.\n";
    } else {
        var phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            error += "Phone Number is invalid.\n";
        }
    }

    if (!qualification) {
        error += "Qualification is required.\n";
    }

    if (!address) {
        error += "Address is required.\n";
    }

    if (error) {
        alert(error);
        return false;
    } else {
        return true;
    }
}

const form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `
            <div id="successMessage" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: green; border: 1px solid #cccccc; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); color: white; font-size: 16px; font-weight: bold; opacity: 0; transition: opacity 1s;">
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

document.getElementById("logout-btn").addEventListener("click", function() {
    // Show loading animation
    document.getElementById("loading").style.display = "block";

    // Delay redirect for 3 seconds
    setTimeout(function() {
        window.location.href = "index.html"; // Replace with your desired URL
    }, 3000);
});