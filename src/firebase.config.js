// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWx6r36FCgBTFY93d_JnYM-IjCCvuNyHg",
  authDomain: "plants-care-cb29c.firebaseapp.com",
  projectId: "plants-care-cb29c",
  storageBucket: "plants-care-cb29c.firebasestorage.app",
  messagingSenderId: "984138564404",
  appId: "1:984138564404:web:89ee59f59626218adcdb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);