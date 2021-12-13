// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import fb from "firebase/compat/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyDyJEIuxq03xUG8xLMud2zE4fwcmqsdpFk",
//   authDomain: "auth-development-fc933.firebaseapp.com",
//   projectId: "auth-development-fc933",
//   storageBucket: "auth-development-fc933.appspot.com",
//   messagingSenderId: "170630485914",
//   appId: "1:170630485914:web:f3bcb2f9a8b5630ddacc23"
// };
const firebaseConfig = {
  apiKey: "AIzaSyApINitJlO6vBnf0vKCUKTLWLUG75ANmYE",
  authDomain: "auth-dev-f9a67.firebaseapp.com",
  projectId: "auth-dev-f9a67",
  storageBucket: "auth-dev-f9a67.appspot.com",
  messagingSenderId: "834047124131",
  appId: "1:834047124131:web:adbf7e8920de50740a5516",
  measurementId: "G-QV76PSZ23C"
};


// Initialize Firebase
const app = fb.initializeApp(firebaseConfig);
export default app;
