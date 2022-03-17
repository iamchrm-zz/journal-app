import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh05nFaSxBhcnqNRvaK7he5ZryLCeUZSs",
  authDomain: "react-journal-app-7d846.firebaseapp.com",
  projectId: "react-journal-app-7d846",
  storageBucket: "react-journal-app-7d846.appspot.com",
  messagingSenderId: "97184635051",
  appId: "1:97184635051:web:301396d082620328a2bfee",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuth = new firebase.auth.GoogleAuthProvider();

export { db, googleAuth, firebase };
