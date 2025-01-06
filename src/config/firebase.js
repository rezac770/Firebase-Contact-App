// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJU8KAjTROs1r9dPX_HjID7n34qIfkL9E",
  authDomain: "concat-vite.firebaseapp.com",
  projectId: "concat-vite",
  storageBucket: "concat-vite.firebasestorage.app",
  messagingSenderId: "789200012224",
  appId: "1:789200012224:web:d3cf362ce1adc458b77e25",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
