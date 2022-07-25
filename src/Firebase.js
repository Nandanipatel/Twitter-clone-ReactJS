import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAFIDVKyBgoAffw-4fQoMoBtwNu9w_thoQ",
  authDomain: "twitter-clone-e8f8a.firebaseapp.com",
  projectId: "twitter-clone-e8f8a",
  storageBucket: "twitter-clone-e8f8a.appspot.com",
  messagingSenderId: "1072576891048",
  appId: "1:1072576891048:web:bcd094213a574efee75a9d",
  measurementId: "G-7HL8PSP97K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
