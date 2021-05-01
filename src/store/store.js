import Vuex from 'vuex'
import Vue from 'vue'
import firebase from "firebase/app";
import 'firebase/functions';
import { getUsers } from '../sdk.js';

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    users: [],
    currentUser: null
  },
  
  getters: {
    users (state) {
      return state.users
    }
  },
  
  mutations: {
    setUsers(state, val) {
      state.users = val
    },
  },
  
  actions: {
    async getUsers() {
      const res = await getUsers()
      console.log('res', res)
    }
  }
});


