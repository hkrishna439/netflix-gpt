// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4vrau0rUAw4fxcL6fuGvU2fuHHMjBnL4",
  authDomain: "netflix-gpt-c506d.firebaseapp.com",
  projectId: "netflix-gpt-c506d",
  storageBucket: "netflix-gpt-c506d.appspot.com",
  messagingSenderId: "22623300029",
  appId: "1:22623300029:web:7b82837f43f22f930a0ad4",
  measurementId: "G-T1LLW1WCKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
