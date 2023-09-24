// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5AaQOodsBJy4-PrbyWA_xNhAp9syd2wg",
  authDomain: "dummy-133c9.firebaseapp.com",
  projectId: "dummy-133c9",
  storageBucket: "dummy-133c9.appspot.com",
  messagingSenderId: "772088545510",
  appId: "1:772088545510:web:ccdb96e6ff299ade583b27",
  measurementId: "G-ZMJPXEKXG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();