// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBspLP2i6nrUoFRec2Tzj5Z_8LRFzDYMKc",
  authDomain: "nextjsauth-9103f.firebaseapp.com",
  projectId: "nextjsauth-9103f",
  storageBucket: "nextjsauth-9103f.appspot.com",
  messagingSenderId: "12733454467",
  appId: "1:12733454467:web:8c567b88b14e86077a63b6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const database = getFirestore(firebaseApp)