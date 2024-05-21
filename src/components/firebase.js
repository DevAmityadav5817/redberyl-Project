// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSO_1ENQqi1ZDzq9-tPBw4z-SuFhs016s",
  authDomain: "login-auth-53a98.firebaseapp.com",
  projectId: "login-auth-53a98",
  storageBucket: "login-auth-53a98.appspot.com",
  messagingSenderId: "651656879362",
  appId: "1:651656879362:web:9d8bb27ce71b560700f61b",
  measurementId: "G-PEZTMS865W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 export const auth=getAuth();
 export default app;