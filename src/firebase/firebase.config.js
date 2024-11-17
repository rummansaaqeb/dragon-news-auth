// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQrt31zhTu8UaqSigeYhesZiciI3d492k",
  authDomain: "dragon-news-486b7.firebaseapp.com",
  projectId: "dragon-news-486b7",
  storageBucket: "dragon-news-486b7.firebasestorage.app",
  messagingSenderId: "413904117753",
  appId: "1:413904117753:web:4ca068496a8cf54f64a728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;