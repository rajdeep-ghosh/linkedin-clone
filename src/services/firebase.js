import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcqlI_aKftZGYzB2owLWj9w1iweGP-6zQ",
  authDomain: "linkedin-clone-ff08c.firebaseapp.com",
  projectId: "linkedin-clone-ff08c",
  storageBucket: "linkedin-clone-ff08c.appspot.com",
  messagingSenderId: "161547782014",
  appId: "1:161547782014:web:45c6dc0b2b22047dc1d52f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
