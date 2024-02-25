// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANkFsZ9lEkRMsPz5VS_g_th6cv3gM0-A4",
  authDomain: "todo-app-yt-b1ebc.firebaseapp.com",
  projectId: "todo-app-yt-b1ebc",
  storageBucket: "todo-app-yt-b1ebc.appspot.com",
  messagingSenderId: "379701603048",
  appId: "1:379701603048:web:fda9f1a81a35e7e570b75d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)