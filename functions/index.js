const { firestore } = require("firebase-admin");
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.getFBData = functions.https.onCall( (data, context) => {
//     console.log('base getFBData func')
//     firebase.database.ref('settings/setting').on('value', (snapshot) => {
//         console.log('snapshot', snapshot.val())
//         return snapshot.val()
//     })
// });

exports.getFBData = functions.https.onCall((data, context) => {
    return new Promise((resolve, reject) => {
      firebase.database.ref('settings/setting').on('value', (snapshot) => {
        resolve(snapshot.val())
    })
  })
});

exports.getFBData = functions.https.onCall((val) => {
    return new Promise((resolve, reject) => {
        firebase.database.ref('settings/setting').set(val)
    })
});

// export const helloWorld = functions.https.onCall((data, context) => {

// exports.helloWorld = functions.https.onCall((data, context) => {
//     return { text: 'Hello from Firebase!' };
// });

// exports.test = functions.https.onCall(async (data, context) => {
//     await firestoreDB.collection('users').doc('alice').set({
//       email: `changed.email@alice.com`,
//     });
//     return { text: 'Hello test from Firebase!' };
// });




// exports.getFirebaseDatabaseData = await firebase.database.ref('settings/setting').on('value', function(snapshot) {
//     // context.commit('toggle', snapshot.val());
//     return snapshot.val();
// })
