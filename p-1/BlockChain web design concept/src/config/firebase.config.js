// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2mome7DVtv6BdYVABO4WeK2egRXq-NKI",
  authDomain: "blockchain-concept-eae23.firebaseapp.com",
  projectId: "blockchain-concept-eae23",
  storageBucket: "blockchain-concept-eae23.firebasestorage.app",
  messagingSenderId: "42780931299",
  appId: "1:42780931299:web:21a8d5f96af8503da801d6",
  measurementId: "G-19YEZTWMLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export default app;
