import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/performance";
import "firebase/analytics";

export const firebaseConfig = {
    // enter your firebase config here
};

firebase.initializeApp(firebaseConfig)
