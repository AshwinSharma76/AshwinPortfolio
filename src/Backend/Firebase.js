// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Authentication
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// ✅ Import Firestore
import { getFirestore } from "firebase/firestore";

// (Optional) Analytics
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDf84wD-9v7DCsCoT-6B82ZpGN6HuFCxZg",
  authDomain: "portfolio-96e8f.firebaseapp.com",
  projectId: "portfolio-96e8f",
  storageBucket: "portfolio-96e8f.firebasestorage.app",
  messagingSenderId: "240158693937",
  appId: "1:240158693937:web:be700b348d9b7a5d925310",
  measurementId: "G-T5FMNZQFPV",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
export const db = getFirestore(app);

// ✅ Initialize Analytics (optional)
export const analytics = getAnalytics(app);

// ✅ Authentication exports
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// ✅ Email/Password functions
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
