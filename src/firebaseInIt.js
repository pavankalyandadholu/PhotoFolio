// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsVg_fWm7yTFt-G3cdUiKJm0ygZSA1b2E",
  authDomain: "blog-app-c53b0.firebaseapp.com",
  projectId: "blog-app-c53b0",
  storageBucket: "blog-app-c53b0.appspot.com",
  messagingSenderId: "734637905197",
  appId: "1:734637905197:web:b21c97edf814d6a7d22fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);