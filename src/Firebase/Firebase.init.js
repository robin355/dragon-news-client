// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9Yzo2rvrxqN0cTFIK2xgMj4ShIdXPMZY",
    authDomain: "dragon-news-client.firebaseapp.com",
    projectId: "dragon-news-client",
    storageBucket: "dragon-news-client.appspot.com",
    messagingSenderId: "392268278389",
    appId: "1:392268278389:web:184a4ad308547b89f0663c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;