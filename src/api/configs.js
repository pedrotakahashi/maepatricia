import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt8xYy0vxJl0IIgG4aw02vZiApwwQ2MBc",
  authDomain: "maepatricia-aad6b.firebaseapp.com",
  projectId: "maepatricia-aad6b",
  storageBucket: "maepatricia-aad6b.appspot.com",
  messagingSenderId: "796149600267",
  appId: "1:796149600267:web:76bee549b7278ca816770e",
  measurementId: "G-CRXBKNQ3Q8"
};

// Initialize Firebase
const initApp = initializeApp(firebaseConfig);

export {initApp};