// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG8RkaXasBBA_i-8cBEYMuFBIPCSAMPh4",
  authDomain: "ecommerce-1cee2.firebaseapp.com",
  projectId: "ecommerce-1cee2",
  storageBucket: "ecommerce-1cee2.appspot.com",
  messagingSenderId: "1071818872228",
  appId: "1:1071818872228:web:dd7bed07f70b51b7099d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);
export{fireDB, auth};