// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBwf61ZwVYHDcbHhYVhBBi8fXb74qmFFXY",
    authDomain: "unworldly-8436f.firebaseapp.com",
    projectId: "unworldly-8436f",
    storageBucket: "unworldly-8436f.firebasestorage.app",
    messagingSenderId: "960185771275",
    appId: "1:960185771275:web:87b800e646fd2fcb9d6e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementById('signup-btn');

submit.addEventListener('click', function (event){ 
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account Created!")
        // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
    });
});
