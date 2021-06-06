import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDWC0uStK6v0aZ1Tud-GFRlK6zaLO59sU",
  authDomain: "watsapp-2-cc5c3.firebaseapp.com",
  projectId: "watsapp-2-cc5c3",
  storageBucket: "watsapp-2-cc5c3.appspot.com",
  messagingSenderId: "821034462193",
  appId: "1:821034462193:web:725abdf5c747154408b250",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };