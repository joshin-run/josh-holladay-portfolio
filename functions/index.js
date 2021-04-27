const { firestore } = require("firebase-admin");
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

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
