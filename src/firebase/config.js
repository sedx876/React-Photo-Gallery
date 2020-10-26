import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDQhD7sVUnBdgpQuw3cYquZ4CrJcaWVIHw",
  authDomain: "photo-gallery-86ebd.firebaseapp.com",
  databaseURL: "https://photo-gallery-86ebd.firebaseio.com",
  projectId: "photo-gallery-86ebd",
  storageBucket: "photo-gallery-86ebd.appspot.com",
  messagingSenderId: "605583623902",
  appId: "1:605583623902:web:ac13a5ef5228f71ac3244f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };