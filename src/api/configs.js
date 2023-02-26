// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };