import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkGiV1vCvXYB2rYnJpTpi7-HKy8RJ35PY",
  authDomain: "anonibus-984ce.firebaseapp.com",
  databaseURL: "https://anonibus-984ce.firebaseio.com",
  projectId: "anonibus-984ce",
  storageBucket: "anonibus-984ce.appspot.com",
  messagingSenderId: "671871719919",
  appId: "1:671871719919:web:65f42ed8f48644276d3e1a"
};
 

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();