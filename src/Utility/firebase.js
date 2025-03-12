// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA30FdIfNNhdFjY6o1LHQzjcoi1-gIGk0M",
  authDomain: "e-clone-c0ff9.firebaseapp.com",
  projectId: "e-clone-c0ff9",
  storageBucket: "e-clone-c0ff9.firebasestorage.app",
  messagingSenderId: "204433970584",
  appId: "1:204433970584:web:1a06b3f0d2108d9d6207ed"
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();
