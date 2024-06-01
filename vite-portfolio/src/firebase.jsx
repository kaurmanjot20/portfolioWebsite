import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6ryFqM084_HMuRGxMnNdJddY9gH1vdK8",
    authDomain: "manjotkaurportfolio.firebaseapp.com",
    projectId: "manjotkaurportfolio",
    storageBucket: "manjotkaurportfolio.appspot.com",
    messagingSenderId: "520453400885",
    appId: "1:520453400885:web:f9739391cca26942f2c47c",
    measurementId: "G-STE6SENDEZ",
    databaseURL: "https://manjotkaurportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/" // Correct URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
