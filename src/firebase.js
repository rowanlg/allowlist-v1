// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdWLX0UN_l-cetqmHfsBS0_97_5cMdX7w",
  authDomain: "twitter-login-test-eb0eb.firebaseapp.com",
  projectId: "twitter-login-test-eb0eb",
  storageBucket: "twitter-login-test-eb0eb.appspot.com",
  messagingSenderId: "540834760376",
  appId: "1:540834760376:web:e4a26871956c5264c4964d",
  measurementId: "G-LV2028PVNT",
  databaseURL:
    "https://twitter-login-test-eb0eb-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
