import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFsaj9ptmsIMceMzFV2F44ofAuw5G0hEA",
  authDomain: "whatsapp-2-6ce65.firebaseapp.com",
  projectId: "whatsapp-2-6ce65",
  storageBucket: "whatsapp-2-6ce65.appspot.com",
  messagingSenderId: "72715105285",
  appId: "1:72715105285:web:d8289409b2c30ad862d86c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
