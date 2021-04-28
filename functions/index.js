import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { collection, getDocs } from "firebase/firestore"; 

admin.initializeApp();

const db = admin.firestore();

exports.getUsers = functions.https.onCall(async (data, context) => {
    console.log('q', await getDocs(collection(db, 'users'))
    // const querySnapshot = await getDocs(collection(db, 'users'));
    // console.log('q', querySnapshot)
}

// exports.getUsers = functions.https.onCall(async (data, context) => {
//     return new Promise((resolve, reject) => {
//         console.log('getUsers')
//         const users = await db.collection('users')
//         console.log(users)
//         resolve(users)
//     })
// });


// const querySnapshot = await getDocs(collection(db, 'users'));
// console.log('q', querySnapshot)
// return querySnapshot
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
// const querySnapshot = await getDocs(collection(db, 'users'));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

