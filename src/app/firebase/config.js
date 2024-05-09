// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpDzMn-4QcetF1yE-hRqvqIYu2aaOa1B0",
  authDomain: "prestex-85200.firebaseapp.com",
  projectId: "prestex-85200",
  storageBucket: "prestex-85200.appspot.com",
  messagingSenderId: "30852617177",
  appId: "1:30852617177:web:761af8bbcb8282f4787fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
export {db}
export default app 
export {auth}
export {storage}