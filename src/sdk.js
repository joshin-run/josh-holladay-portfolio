import firebase from 'firebase/app'; 
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

export function getUsers() {
  console.log('here')
  const myPromise = new Promise((resolve, reject) => {
    firebaseFunctions.httpsCallable('getUsers')({});
    resolve('Success');
    reject('Something went wrong!')
  })

  return myPromise.then(
    (result) => { 
       console.log(result);
       return result
    },
    (error) => { 
       console.log(error);
    }
  ); 
}

// export function getUsers() {
//   console.log('here')
//   try {
//     const myPromise = new Promise((resolve, reject) => {
//       console.log('here')
//       firebaseFunctions.httpsCallable('getUsers')({});
//       resolve('Success')
//     })
//     myPromise.then((res) => {
//       return res;
//     })
//   } catch (error) {
//     console.error('error', error);
//   }  
// }



// export async function helloWorld(): Promise<void> {
//   const res = await firebaseFunctions.httpsCallable('helloWorld')({});
//   console.log(res);
// }

// export function getUsers() {
//   console.log('here')
//   try {
//     const myPromise = new Promise((resolve, reject) => {

//     })
//     console.log('here')
//     const res = firebaseFunctions.httpsCallable('getUsers')({});
//     console.log('res', res)
//     return res
//   } catch (error) {
//     console.error('error', error);
//   }  
// }


// export function getUsers() {
  // return new Promise((resolve, reject) => {
    //       firebase.database.ref("settings/setting").on("value", (snapshot) => {
    //         resolve(snapshot.val())
    //     })
// }
//=========
// .then((list) => {
//     try {
//       return firebaseFunctions.httpsCallable('getUsers')({});
//     } catch (error) {
//       console.error(error);
//     }  
//   })
// }
//=========


// export function getUsers() {
//   try {
//     const res = firebaseFunctions.httpsCallable('getUsers')({});
//     console.log('res', res)
//     return res
//   } catch (error) {
//     console.error(error);
//   }  
// }


// getUsers().then((list) => {
//   // do something with list
//   // console.log('list', list)
//   this.users = list;
// }).error((e) => {
//   console.log(e);
// });