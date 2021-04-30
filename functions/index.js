const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {collection, getDocs} = require("firebase/firestore");

admin.initializeApp();

const db = admin.firestore();

// exports.getFBData = functions.https.onCall((data, context) => {
//     return new Promise((resolve, reject) => {
//       firebase.database.ref("settings/setting").on("value", (snapshot) => {
//         resolve(snapshot.val())
//     })
//   })
// });

// exports.getUsers = functions.https.onCall((data, context) => {
//   return new Promise((resolve, reject) => {
//     resolve(getDocs(collection(db, "users")));
//   });
// });

exports.getUsers = functions.https.onCall((data, context) => {
  try {
    return db.collection("users").get().then((querySnapshot) => {
        return querySnapshop
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //     // return doc.data()
    //   });
    };
  } catch (error) {
    console.error(error);
  }
});


