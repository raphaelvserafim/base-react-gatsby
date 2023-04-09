import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
 

import dotenv from 'dotenv';
dotenv.config();


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
const app = initializeApp(firebaseConfig);


const auth = getAuth();
const db = getFirestore();




export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile };