// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdTLDUCivgFn-QCXD7iwmSfVtNcveHmmk",
  authDomain: "netflix-gpt-efb0e.firebaseapp.com",
  projectId: "netflix-gpt-efb0e",
  storageBucket: "netflix-gpt-efb0e.appspot.com",
  messagingSenderId: "170681282982",
  appId: "1:170681282982:web:aece8fac36089fa2e85f67",
  measurementId: "G-82PZ6SGK07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()