// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2bF8U8hTrORBrfXAkNSri0Yrb7T3yd9Y",
  authDomain: "leggedfreak-clientauth.firebaseapp.com",
  projectId: "leggedfreak-clientauth",
  storageBucket: "leggedfreak-clientauth.appspot.com",
  messagingSenderId: "619879908539",
  appId: "1:619879908539:web:c56cd87f06e9dc6b2a159e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);