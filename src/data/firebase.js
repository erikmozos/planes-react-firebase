// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB51TY4RY2sbtWlA59m8-ZJ0vX0UEwhDiE",
  authDomain: "plane-react.firebaseapp.com",
  projectId: "plane-react",
  storageBucket: "plane-react.firebasestorage.app",
  messagingSenderId: "1059079933335",
  appId: "1:1059079933335:web:8f3a7631b89b2ea3c408d2",
  measurementId: "G-8MZYVJ567P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
