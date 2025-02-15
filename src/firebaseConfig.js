// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU6c9G5qDNbRlvfgQiCulHcpj-3v6LPEA",
  authDomain: "studentconnect-fc388.firebaseapp.com",
  projectId: "studentconnect-fc388",
  storageBucket: "studentconnect-fc388.firebasestorage.app",
  messagingSenderId: "513875925827",
  appId: "1:513875925827:web:9d590228583799edd5adf6",
  measurementId: "G-V3LJ6MQBDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get Firebase Auth instance
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, getFirestore ,analytics};