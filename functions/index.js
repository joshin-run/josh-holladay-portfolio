import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { collection, getDocs } from "firebase/firestore"; 

admin.initializeApp();

const db = admin.firestore();

// exports.getUsers = functions.https.onCall(async (data, context) => {
//     return new Promise((resolve, reject) => {
//         console.log('getUsers')
//         const users = await db.collection('users')
//         console.log(users)
//         resolve(users)
//     })
// });

exports.getUsers = functions.https.onCall(async(async (data, context) => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    console.log('q', querySnapshot)
    return querySnapshot
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    // const querySnapshot = await getDocs(collection(db, 'users'));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
}))

// exports.getUser = () => {
//     const querySnapshot = await getDocs(collection(db, 'users'));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
// }


// const { firestore } = require("firebase-admin");
// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions




// exports.getUsers = functions.https.onCall((data, context) => {
//     return firebase.database.
// })

// exports.getFBData = functions.https.onCall((data, context) => {
//     return new Promise((resolve, reject) => {
//       firebase.database.ref('settings/setting').on('value', (snapshot) => {
//         resolve(snapshot.val())
//     })
//   })
// });

// exports.getFBData = functions.https.onCall((val) => {
//     return new Promise((resolve, reject) => {
//         firebase.database.ref('settings/setting').set(val)
//     })
// });



