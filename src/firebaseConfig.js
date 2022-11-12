import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs1qFMNox3KTtotF61K4cBDpvtfv8CvZY",
  authDomain: "personal-blog---homework-3.firebaseapp.com",
  projectId: "personal-blog---homework-3",
  storageBucket: "personal-blog---homework-3.appspot.com",
  messagingSenderId: "757400790407",
  appId: "1:757400790407:web:afedde73b1569daeb89f22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)