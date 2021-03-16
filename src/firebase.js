import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  // apiKey: "AIzaSyALjUv14BaVOKmAyzfWm8tSJc-sjGWu9WI",
  // authDomain: "new-react-firebase-9857f.firebaseapp.com",
  // databaseURL: "https://new-react-firebase-9857f-default-rtdb.firebaseio.com",
  // projectId: "new-react-firebase-9857f",
  // storageBucket: "new-react-firebase-9857f.appspot.com",
  // messagingSenderId: "954293621316",
  // appId: "1:954293621316:web:bc0a93642f4ee423f6a211",

  apiKey: "AIzaSyALjUv14BaVOKmAyzfWm8tSJc-sjGWu9WI",
  authDomain: "new-react-firebase-9857f.firebaseapp.com",
  databaseURL: "https://new-react-firebase-9857f-default-rtdb.firebaseio.com",
  projectId: "new-react-firebase-9857f",
  storageBucket: "new-react-firebase-9857f.appspot.com",
  messagingSenderId: "954293621316",
  appId: "1:954293621316:web:bc0a93642f4ee423f6a211"
});

export const googleProvider = firebase.auth.GoogleAuthProvider;
export const auth = app.auth();
export default app;


