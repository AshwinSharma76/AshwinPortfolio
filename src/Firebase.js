// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf84wD-9v7DCsCoT-6B82ZpGN6HuFCxZg",
  authDomain: "portfolio-96e8f.firebaseapp.com",
  projectId: "portfolio-96e8f",
  storageBucket: "portfolio-96e8f.firebasestorage.app",
  messagingSenderId: "240158693937",
  appId: "1:240158693937:web:be700b348d9b7a5d925310",
  measurementId: "G-T5FMNZQFPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
