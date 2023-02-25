// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF1BOS-4yH0mTbboUIfaF6MXBidoNV5Ec",
  authDomain: "greenenv-expo.firebaseapp.com",
  projectId: "greenenv-expo",
  storageBucket: "greenenv-expo.appspot.com",
  messagingSenderId: "326774506739",
  appId: "1:326774506739:web:b7eff4db72ffea81762386",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
