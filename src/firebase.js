// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-kB1EkB0_cnvNoO4mvR8Mf-GtFyPBDAM",
  authDomain: "digitomize-d5e9e.firebaseapp.com",
  projectId: "digitomize-d5e9e",
  storageBucket: "digitomize-d5e9e.appspot.com",
  messagingSenderId: "541472050807",
  appId: "1:541472050807:web:a31c19bad2198fafd1c072",
  measurementId: "G-N98Q7ZQS64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
