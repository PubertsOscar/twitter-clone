import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYlWuDab8APIjh5M-7MUIF04AQys3-LGg",
    authDomain: "twitter-clone-3f77d.firebaseapp.com",
    projectId: "twitter-clone-3f77d",
    storageBucket: "twitter-clone-3f77d.appspot.com",
    messagingSenderId: "247334426248",
    appId: "1:247334426248:web:300f6383bac6486309b13d"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();