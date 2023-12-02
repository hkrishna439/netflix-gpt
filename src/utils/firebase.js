// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6gTQaPutnRu9Q8owLbpRD0a4Ti5MG7vg",
  authDomain: "netflix-gpt-98334.firebaseapp.com",
  projectId: "netflix-gpt-98334",
  storageBucket: "netflix-gpt-98334.appspot.com",
  messagingSenderId: "436114745940",
  appId: "1:436114745940:web:9da8ad38ff1968dc3adbc1",
  measurementId: "G-S1QMT25P3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
