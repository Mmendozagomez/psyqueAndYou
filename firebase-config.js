// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9EsxAUPTj74sZwF2Ickzk-lCBZjaIaYg",
  authDomain: "psyqueandyou-app.firebaseapp.com",
  projectId: "psyqueandyou-app",
  storageBucket: "psyqueandyou-app.firebasestorage.app",
  messagingSenderId: "135076588419",
  appId: "1:135076588419:web:e2fb70fa81ef92c14964b6",
  measurementId: "G-LS5Q58E3LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Exportamos para usarlos en otros archivos
export { auth, db };