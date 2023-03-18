// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD5W27sD9yALjFquWcjYDF3a04F15UQsg",
  authDomain: "workout-707d3.firebaseapp.com",
  projectId: "workout-707d3",
  storageBucket: "workout-707d3.appspot.com",
  messagingSenderId: "435670635244",
  appId: "1:435670635244:web:9e617ceb23db9019de0bc9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
