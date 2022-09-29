import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDCdP18cBdMjTqR6rOeyM3mkbNvRJ6mqRA",
    authDomain: "video-a31ac.firebaseapp.com",
    projectId: "video-a31ac",
    storageBucket: "video-a31ac.appspot.com",
    messagingSenderId: "27377654019",
    appId: "1:27377654019:web:303cfe5a78f9ac46563136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;