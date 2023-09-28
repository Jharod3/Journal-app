// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDkdMLdyg8DuRBvh09S3MpDdr22jboPAU",
  authDomain: "journal-app-b613d.firebaseapp.com",
  projectId: "journal-app-b613d",
  storageBucket: "journal-app-b613d.appspot.com",
  messagingSenderId: "935456842859",
  appId: "1:935456842859:web:3d96f89bee79bdcf507d2e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);