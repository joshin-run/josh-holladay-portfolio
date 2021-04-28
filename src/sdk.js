// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBpIu4FOqKQgl4IVsdR6Yced7xAjU1RrUU",
//   authDomain: "calico-7c4ba.firebaseapp.com",
//   projectId: "calico-7c4ba",
// });

// const db = getFirestore();

// const firebaseFunctions = firebaseApp.functions();
// firebaseFunctions.useEmulator('localhost', 5001);



import firebase from "firebase/app";
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBpIu4FOqKQgl4IVsdR6Yced7xAjU1RrUU",
  authDomain: "calico-7c4ba.firebaseapp.com",
  projectId: "calico-7c4ba",
  storageBucket: "calico-7c4ba.appspot.com",
  messagingSenderId: "714349983765",
  appId: "1:714349983765:web:6269ddd18883a20b59761c"
};

const app = firebase.initializeApp(firebaseConfig);

const firebaseFunctions = app.functions();
firebaseFunctions.useEmulator('localhost', 5001);

export async function getUsers() {
  const res = await firebaseFunctions.httpsCallable('getUsers')({});
  return res
}

// export async function setTest() {
//   const res = await firebaseFunctions.httpsCallable('setTest')({});
//   console.log(res);
// }




// import firebase from "firebase/app";
// import 'firebase/functions';

// const firebaseConfig = {
//     apiKey: "AIzaSyBpIu4FOqKQgl4IVsdR6Yced7xAjU1RrUU",
//     authDomain: "calico-7c4ba.firebaseapp.com",
//     projectId: "calico-7c4ba",
//     storageBucket: "calico-7c4ba.appspot.com",
//     messagingSenderId: "714349983765",
//     appId: "1:714349983765:web:6269ddd18883a20b59761c"
// };

// const app = firebase.initializeApp(firebaseConfig);



// var db = firebase.firestore();


// functions that call Firebase Functions

export async function getFBData() {
  return await firebaseFunctions.httpsCallable('getFBData')({});
}

export async function setFBData(val) {
  return await firebaseFunctions.httpsCallable('getFBData', val)({});
}