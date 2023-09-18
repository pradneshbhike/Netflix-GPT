// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpRd5kQz71bNnzCm5X9LpKYLwgxajh84E",
  authDomain: "netflixgpt-a0e86.firebaseapp.com",
  projectId: "netflixgpt-a0e86",
  storageBucket: "netflixgpt-a0e86.appspot.com",
  messagingSenderId: "659014190733",
  appId: "1:659014190733:web:cecb33fd05f2d9555d84c4",
  measurementId: "G-BBK1NPBGRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();