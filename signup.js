import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi8sjg8uCAYR1rdH3Z1oggCdGJzHpNCw4",
    authDomain: "login-eabb8.firebaseapp.com",
    projectId: "login-eabb8",
    storageBucket: "login-eabb8.appspot.com",
    messagingSenderId: "558839981344",
    appId: "1:558839981344:web:ead396f2134402c37ce345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


signup.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('fullname').value;
    const signup = document.getElementById('signupBtn');

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('creating account.....')
            window.location.href = "grand.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });


})