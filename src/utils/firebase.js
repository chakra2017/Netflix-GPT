// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwHN1WxpnyRxcRNQWGfCuXWYLUMGpZACM",
  authDomain: "netflixgpt-f3244.firebaseapp.com",
  projectId: "netflixgpt-f3244",
  storageBucket: "netflixgpt-f3244.appspot.com",
  messagingSenderId: "399177157637",
  appId: "1:399177157637:web:0832f7322c938fedb7e06c",
  measurementId: "G-MJD9W63GRL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
