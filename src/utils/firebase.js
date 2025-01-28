// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlhwo0B15Yi5BlQtJI-59Zayzwvtv6Sj8",
  authDomain: "netflixgpt-6e258.firebaseapp.com",
  projectId: "netflixgpt-6e258",
  storageBucket: "netflixgpt-6e258.firebasestorage.app",
  messagingSenderId: "35729997527",
  appId: "1:35729997527:web:e517a167371eb96956fa92",
  measurementId: "G-C79W1FKCS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();