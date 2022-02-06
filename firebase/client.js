// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSqJbeHn5bpw-UhDJWwF0WvX6ozVJIqJ8",
    authDomain: "instagram-clone-97283.firebaseapp.com",
    projectId: "instagram-clone-97283",
    storageBucket: "instagram-clone-97283.appspot.com",
    messagingSenderId: "236458718772",
    appId: "1:236458718772:web:f00155dd99b853de357c61"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()
export { app, db, storage }