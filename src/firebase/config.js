// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const env = import.meta.env

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_APIKEY,
  authDomain: env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: env.VITE_FIREBASE_PROJECTID,
  storageBucket: env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: env.VITE_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//Inicialice Firestore
export const db = getFirestore(app);
