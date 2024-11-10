// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI0nMvhCSKMIpr7kzX0CcENm0nGPEZ1AM",
    authDomain: "gloriousthaispa.firebaseapp.com",
    projectId: "gloriousthaispa",
    storageBucket: "gloriousthaispa.firebasestorage.app",
    messagingSenderId: "973338967952",
    appId: "1:973338967952:web:5ef6df2907759404bc3d15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 
