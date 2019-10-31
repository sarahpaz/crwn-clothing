import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCnha84JVyTMtrcx1c75dSoV-bYQDCGaQM",
  authDomain: "crwn-db-afcef.firebaseapp.com",
  databaseURL: "https://crwn-db-afcef.firebaseio.com",
  projectId: "crwn-db-afcef",
  storageBucket: "crwn-db-afcef.appspot.com",
  messagingSenderId: "469412315886",
  appId: "1:469412315886:web:194248356e86455bbf69ff",
  measurementId: "G-8V4BYL5YV1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
