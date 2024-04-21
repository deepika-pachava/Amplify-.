// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB17cl21TVFRU2TVTKxym3fmGLo6vTWwfc",
  authDomain: "amplify-1da38.firebaseapp.com",
  projectId: "amplify-1da38",
  storageBucket: "amplify-1da38.appspot.com",
  messagingSenderId: "104474286965",
  appId: "1:104474286965:web:88e73ba1e45abb3eb8913c",
  measurementId: "G-99353WSGWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);