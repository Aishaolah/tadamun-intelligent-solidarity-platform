
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyBgsBQMI-EUYxT0PwsBoYm9ygpFkliwMzI",
    authDomain: "signupproject-c7a11.firebaseapp.com",
    projectId: "signupproject-c7a11",
    storageBucket: "signupproject-c7a11.appspot.com",
    messagingSenderId: "996046989237",
    appId: "1:996046989237:web:a662a2e50be4b51590dbfc"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider, signInWithPopup };