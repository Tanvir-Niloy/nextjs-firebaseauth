// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your Firebase Api Key",
  authDomain: "nextjsauth-9103f.firebaseapp.com",
  projectId: "nextjsauth-9103f",
  storageBucket: "Your StorageBucket",
  messagingSenderId: "12733454467",
  appId: "Your FireBase App id"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const database = getFirestore(firebaseApp)
