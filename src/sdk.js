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

// functions that call Firebase Functions

export async function getFBData() {
  return await firebaseFunctions.httpsCallable('getFBData')({});
}

export async function setFBData(val) {
  return await firebaseFunctions.httpsCallable('getFBData', val)({});
}




// export async function getFBData() {
//   console.log('index', 'getFBDATA wrapper')
//   const test = await firebaseFunctions.httpsCallable('getFBData')({});
//   console.log(test)
//   return test
//   // return await firebaseFunctions.httpsCallable('getFBData')({});
// }

// export async function test() {
//   const res = await firebaseFunctions.httpsCallable('test')({});
//   console.log(res);
// }


// export async function getFirebaseDatabaseData() {
//   return await firebaseFunctions.httpsCallable('getFirebaseDatabaseData')({});
// }

