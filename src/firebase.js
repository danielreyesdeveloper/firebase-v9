import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCziYBPZziExwN_3p7UTKmycu7nIG8Bx1U",
  authDomain: "fir-v9-f7bd8.firebaseapp.com",
  projectId: "fir-v9-f7bd8",
  storageBucket: "fir-v9-f7bd8.appspot.com",
  messagingSenderId: "569972229050",
  appId: "1:569972229050:web:2cd52f0bd2044288341383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}