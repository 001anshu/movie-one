// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgiyYB68s-mzjRnTq3dzHe78RB0bOXAoM",
  authDomain: "netflix-7159d.firebaseapp.com",
  projectId: "netflix-7159d",
  storageBucket: "netflix-7159d.appspot.com",
  messagingSenderId: "467200702261",
  appId: "1:467200702261:web:496e3a3b25d0340ee8fe7c",
  measurementId: "G-DJN8N5HJP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);