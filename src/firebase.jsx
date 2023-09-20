import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBjp6VqsDbHqHzQIvVsKnev2KhbCZAJRA",
  authDomain: "jiocinema-4f457.firebaseapp.com",
  projectId: "jiocinema-4f457",
  storageBucket: "jiocinema-4f457.appspot.com",
  messagingSenderId: "578531812563",
  appId: "1:578531812563:web:c2f059e01a8a96bfaf2026",
  measurementId: "G-Q7HKR5C90V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
