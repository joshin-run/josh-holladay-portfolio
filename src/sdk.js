
import firebase from "firebase/app";
import 'firebase/functions';

// Set the configuration for my app
var config = {
  apiKey: "AIzaSyBpIu4FOqKQgl4IVsdR6Yced7xAjU1RrUU",
  authDomain: "calico-7c4ba.firebaseapp.com",
  projectId: "calico-7c4ba",
  storageBucket: "calico-7c4ba.appspot.com",
  messagingSenderId: "714349983765",
  appId: "1:714349983765:web:6269ddd18883a20b59761c"
};

const app = firebase.initializeApp(config);

// Get a reference to the database service
// var database = firebase.database();

const firebaseFunctions = app.functions();
firebaseFunctions.useEmulator('localhost', 5001);


// Methods that access Firestore functions within index.js

export async function getUsers() {
  const res = await firebaseFunctions.httpsCallable('getUsers')({});
  return res
}


