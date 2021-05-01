<!--



// exports.getUsers = {
//     async functions.https.onCall(async (data, context) {
//         console.log('q', await getDocs(collection(db, 'users')));
//         // const querySnapshot = await getDocs(collection(db, 'users'));
//         // console.log('q', querySnapshot)
//     });

// }
//===
// exports.getUsers = functions.https.onCall(async (data, context) {
//     console.log('q', await getDocs(collection(db, 'users')));
//     // const querySnapshot = await getDocs(collection(db, 'users'));
//     // console.log('q', querySnapshot)
// });
//===
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



import firebase from "firebase/app";
import 'firebase/firestore';
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
const db = app.firestore();

// Get references to the collections
const users = db.collection('users');

// Methods that access Firestore functions within index.js
export async function getUsers() {
  return await users
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
      return querySnapshot;
    });
}







====================

  // async created() {
  //   await this.$store.dispatch('getUsers')
  // }

          <!-- <button @click="toggleMe">Toggle Me</button> -->
        <!-- <h1 v-if="isTrue">true man!</h1> 




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



loggedInLink: 'Login',
loggedIn: false,
_isTrue: null
// if user is logged in...change loggedIn to true...
// if user is logged in...change loggedInLink to 'Logout'
isTrue (state) {
  return state._isTrue;
},




async toggle(context) {
      let temp = !context.state._isTrue
      await setFBData(temp)
    },
    async updateFBData(context) {
      const result = await getFBData();
      context.commit('toggle', result);
      // context.commit('toggle', await getFBData());
    }





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



// import firebase from "firebase/app";
// import 'firebase/functions';

// const firebaseConfig = {
//   apiKey: "AIzaSyBpIu4FOqKQgl4IVsdR6Yced7xAjU1RrUU",
//   authDomain: "calico-7c4ba.firebaseapp.com",
//   projectId: "calico-7c4ba",
//   storageBucket: "calico-7c4ba.appspot.com",
//   messagingSenderId: "714349983765",
//   appId: "1:714349983765:web:6269ddd18883a20b59761c"
// };

// const app = firebase.initializeApp(firebaseConfig);

// const firebaseFunctions = app.functions();
// firebaseFunctions.useEmulator('localhost', 5001);

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

// export async function getFBData() {
//   return await firebaseFunctions.httpsCallable('getFBData')({});
// }

// export async function setFBData(val) {
//   return await firebaseFunctions.httpsCallable('getFBData', val)({});
// }


service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2021, 5, 19);
    }
  }
}





<!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> 
        
      // clear () {
      //   this.$v.$reset()
      //   this.name = ''
      //   this.email = ''
      //   this.select = null
      //   this.checkbox = false
      // },


// async updateStoreWithFBData({context}) {
    //   const res = getFBDataAction();
    //   await context.commit('toggle', res);
    // }




      <v-btn @click="clear">clear</v-btn>


// <v-checkbox
//         v-model="checkbox"
//         :error-messages="checkboxErrors"
//         label="Show password"
//         @change="$v.checkbox.$touch()"
//         @blur="$v.checkbox.$touch()"
//       ></v-checkbox>




<!-- <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Password"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field> -->


        <!-- <v-img
          alt="Calico Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=""
          width="100"
        /> -->
             <!-- <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field> --> 


<!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      > -->
        <!-- <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->




<!-- <style lang="scss" scoped>
// .nav-link {
//     text-decoration: none;
//     margin: 10px;
// }
// </style>



// <template>
//   <v-app>
//     <v-app-bar
//       app
//       color="blue lighten-3"
//       dark
//     >
//       <div class="d-flex align-center">
//         <v-img
//           alt="Vuetify Logo"
//           class="shrink mr-2"
//           contain
//           src="@/assets/Calico-logo-icon.png"
//           transition="scale-transition"
//           width="120"
//         />
//       </div>
//       <v-spacer></v-spacer>
//       <router-link to="/" class="nav-link">Home</router-link>
//       <router-link to="/login" class="nav-link">Login</router-link>
//       <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
//     </v-app-bar>

//     <v-main>
//       <router-view/>
//     </v-main>
//   </v-app>
// </template>

// <script>

// export default {
//   name: 'App',

//   data: () => ({
//     //
//   }),
// };
// </script>







import Vuex from 'vuex'
import Vue from 'vue'
import firebase from "firebase/app";
import 'firebase/functions';
import { getFBData } from '../sdk.js';

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    user: '',
    loggedInLink: 'Login',
    loggedIn: false,
    _isTrue: null,
    loadedFBData: null
  },
  
  getters: {
    // if user is logged in...change loggedIn to true...
    // if user is logged in...change loggedInLink to 'Logout'
    isTrue (state) {
      return state._isTrue;
    }
  },
  
  mutations: {
    // Here we will create Jenny
    updateUser(state, val) {
        state.user = val;
    },
    updateLoggedInLink(state, val) {
        state.loggedInLink = val;
    },
    toggle(state, bool) {
      state._isTrue = bool;
    },
    gotFBData(state, val) {
      state.loadedFBData = val
    }
  },
  
  actions: {
    async updateFBData({commit}) {
      commit('gotFBData', await getFBData())
      commit('toggle', await getFBData())
    }
  }
});

// actions: {
//   async getData ({ commit }) {
//     commit('gotData', await getData())
//   },
//   async actionB ({ dispatch, commit }) {
//     await dispatch('getData') // wait for `actionA` to finish
//     commit('gotOtherData', await getOtherData())
//   }
// }






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

