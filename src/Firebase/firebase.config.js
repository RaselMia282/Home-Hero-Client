// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_GKkcyYSrRwwdecEtQX48XcJWz6aZ6j0",
  authDomain: "home-hero-29a0a.firebaseapp.com",
  projectId: "home-hero-29a0a",
  storageBucket: "home-hero-29a0a.firebasestorage.app",
  messagingSenderId: "947622269844",
  appId: "1:947622269844:web:28e21aa6e7c3722671b581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);