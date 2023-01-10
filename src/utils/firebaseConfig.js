// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbein-CTWR3BYJg3HoPr_x-CvlzVL52vU",
  authDomain: "ecomm-manga.firebaseapp.com",
  projectId: "ecomm-manga",
  storageBucket: "ecomm-manga.appspot.com",
  messagingSenderId: "144694791507",
  appId: "1:144694791507:web:3d849fe49180428ae9a5a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);