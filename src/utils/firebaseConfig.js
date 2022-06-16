// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeEQy7_Y9tYbTtpU08BMZBSjI9l1i_DCk",
  authDomain: "budines-bc07c.firebaseapp.com",
  projectId: "budines-bc07c",
  storageBucket: "budines-bc07c.appspot.com",
  messagingSenderId: "354466539023",
  appId: "1:354466539023:web:82e59ee6d3c0c7b05d257a",
  measurementId: "G-THL240BRM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore Initialize
const db = getFireStore(app)

export default db 