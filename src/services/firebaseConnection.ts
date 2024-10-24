import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCgTl6SuJ3E4FjssN9MMo4AbimV-oHvRsg",
  authDomain: "reactslinks-33ef7.firebaseapp.com",
  projectId: "reactslinks-33ef7",
  storageBucket: "reactslinks-33ef7.appspot.com",
  messagingSenderId: "949653107935",
  appId: "1:949653107935:web:5b5dc92d1d7c280265256a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };