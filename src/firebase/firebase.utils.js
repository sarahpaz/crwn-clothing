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
  appId: "1:469412315886:web:19424835 6e86455bbf69ff",
  measurementId: "G-8V4BYL5YV1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if it's not false -> if the userAuth object does not exist exit from the function

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // if the snapShot doesn't exist, create a new user using the data from the userAuth object
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //* this triggers the Google popup whenever we use the GoogleAuthProvider for authentication and sign-in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
