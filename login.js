// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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

const submit = document.getElementById('login-btn');

submit.addEventListener('click', function (event){ 
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Signed In!')
    window.location.replace('index.html');
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Incorrect Email or Password!')
    });

    

});
