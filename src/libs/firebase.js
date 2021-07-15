import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_xXU1x35Fhb_UVGqh5uKUNf3cCBuYbxs",
  authDomain: "firegram2-3f074.firebaseapp.com",
  projectId: "firegram2-3f074",
  storageBucket: "firegram2-3f074.appspot.com",
  messagingSenderId: "223482164372",
  appId: "1:223482164372:web:2a41358cd90d067f267081",
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

const { FieldValue } = Firebase.firestore;
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = FieldValue.serverTimestamp;

export { firebase, FieldValue, projectStorage, projectFirestore, timestamp };
