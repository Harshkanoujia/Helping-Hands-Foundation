// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPzLiGsOJDE2Z0kew6uPi2E-iOFtbY6F8",
    authDomain: "login-signup-1a991.firebaseapp.com",
    projectId: "login-signup-1a991",
    storageBucket: "login-signup-1a991.appspot.com",
    messagingSenderId: "315425462507",
    appId: "1:315425462507:web:2cc3511f895015948ec6ae",
    measurementId: "G-0ESJMK9KKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();

function showAlert(message) {
    const alertMessage = document.getElementById("alert-message");
    const alertText = alertMessage.querySelector("p"); // Corrected to select the paragraph element

    alertText.textContent = message;
    alertMessage.style.display = "block";

    // Hide the alert message after 5 seconds
    setTimeout(() => {
        alertMessage.style.display = "none";
    }, 5000);
}

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

let forgotpasslabel = document.getElementById('forgotpasslabel')

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

createacctbtn.addEventListener('click', function() {
    const signupEmail = signupEmailIn.value;
    const confirmSignupEmail = confirmSignupEmailIn.value;
    const signupPassword = signupPasswordIn.value;
    const confirmSignUpPassword = confirmSignUpPasswordIn.value;

    var isVerified = true;

    if(signupEmail !== confirmSignupEmail || signupPassword !== confirmSignUpPassword || signupEmail === "" || confirmSignupEmail === "" || signupPassword === "" || confirmSignUpPassword === "") {
        window.alert("Please fill out all required fields or make sure they match.");
        isVerified = false;
    }

    if(isVerified) {
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.alert("Success! Account created.");
                
                // Store user data in Firebase Realtime Database
                const userId = user.uid;
                const userData = {
                    email: signupEmail
                    // Add more user data if needed
                };
                
                set(ref(db, 'users/' + userId), userData)
                    .then(() => { window.alert("Kindly Log in Now") })
                    .catch((error) => { window.alert("Error storing user data: " + error.message) });
            })
            .catch((error) => { window.alert("Error occurred: " + error.message) });
    }
});


submitButton.addEventListener("click", function() {
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.alert("Success! Welcome back!");
            // Redirect to another page after successful login
            window.location.href = "volunteer.html"; // Replace with your desired URL
        })
        .catch((error) => { window.alert("Error occurred: " + error.message) });
});

signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createacct.style.display = "block";
});

returnBtn.addEventListener("click", function() {
    main.style.display = "block";
    createacct.style.display = "none";
});


let ForgotPassword = () => {
    const email = emailInput.value.trim(); // Trim whitespace from the email input
    
    if (!email) {
        alert("Please enter an email address.");
        return; // Exit the function early if email is empty
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("A password reset link has been sent to your email");
        })
        .catch((error) => {
            console.error("Error occurred:", error.code, error.message);
            alert("An error occurred. Please try again later.");
        });
};

forgotpasslabel.addEventListener('click', ForgotPassword);