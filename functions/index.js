const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const {collection, getDocs} = require("firebase/firestore");

admin.initializeApp();

const db = admin.firestore();

// console.log(collection)
// console.log(getDocs)
// console.log(firestoreDB)
// console.log(functions)

// exports.getUsers = functions.https.onCall((data, context) => {
//   return db.collection("users").get();
// });

// exports.getUsers = () => {
//   functions.https.onCall((data, context) => {
//     return db.collection("users").get();
//   });
// }

exports.getUsers = () => {
  functions.https.onCall((data, context) => {
    return db.collection("users").get();
  });
};

// ======

// exports.getUsers = functions.https.onCall((data, context) => {
//   console.log("here is");
//   // return db.collection("users").get();
//   return db.collection("users").get().then();
// });

// ======

// db.collection("cities").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// });

// exports.addMessage = functions.https.onCall((data, context) => {
//   // ...
// });


// Saving the new message to the Realtime Database.
// const sanitizedMessage = sanitizer.sanitizeText(text);
// return admin.database().ref('/messages').push({
//   text: sanitizedMessage,
//   author: { uid, name, picture, email },
// }).then(() => {
//   console.log('New Message written');
//   // Returning the sanitized message to the client.
//   return { text: sanitizedMessage };
// })


//     .get().then((querySnapshot) => {
//         console.log(querySnapshot);
//         resolve(querySnapshot);
//       });
//   console.log(collection)
//   console.log(getDocs)
//   console.log(firestoreDB)
//   console.log(functions)
//   return ["h", "e", "n"];

// firestoreDB.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });


// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

// exports.getUsers = functions.https.onCall(async (data, context) => {
//     const res = await firestoreDB.collection("users");
//     .get().then((querySnapshot) => {
//         console.log(querySnapshot);
//         resolve(querySnapshot);
//       });
//   });

// exports.getUsers = functions.https.onCall((data, context) => {
//   return new Promise((resolve, reject) => {
//     firestoreDB.collection("users").get().then((querySnapshot) => {
//       console.log(querySnapshot);
//       resolve(querySnapshot);
//     });
//   });
// });

// exports.getFBData = functions.https.onCall((data, context) => {
//     return new Promise((resolve, reject) => {
//       firebase.database.ref("settings/setting").on("value", (snapshot) => {
//         resolve(snapshot.val())
//     })
//   })
// });

// firestoreDB.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
// return { text: 'Hello from Firebase!' };


// exports.getData = functions.https.onCall(async (data, context) => {
//     await firestoreDB.collection('foo').doc('bar').set({
//       test: `this is a test`,
//     });
//     return { text: 'Hello from Firebase!' };
// });


// exports.getUsers = functions.https.onCall((data, context) => {
//   try {
//     const res = ["index"];
//     return res;
//   } catch (error) {
//     console.error(error);
//   }
// });

// exports.getUsers = functions.https.onCall((data, context) => {
//   try {
//     return db.collection("users").get().then((querySnapshot) => {
//         return querySnapshop
//     //   querySnapshot.forEach((doc) => {
//     //     console.log(`${doc.id} => ${doc.data()}`);
//     //     // return doc.data()
//     //   });
//     };
//   } catch (error) {
//     console.error(error);
//   }
// });

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
