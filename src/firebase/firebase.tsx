import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

import { firebaseConfig } from "./config";

try {
    initializeApp(firebaseConfig);
} catch (error) {
    console.log("error init firebase", error);

}

const auth = getAuth();
const db = getFirestore();




export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile };