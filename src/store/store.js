import Vuex from 'vuex'
import Vue from 'vue'
import firebase from "firebase/app";
import 'firebase/functions';
import { getFBData, setFBData, getUsers } from '../sdk.js';

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    users: ['sam', 'frodo'],
    loggedInLink: 'Login',
    loggedIn: false,
    _isTrue: null
  },
  
  getters: {
    // if user is logged in...change loggedIn to true...
    // if user is logged in...change loggedInLink to 'Logout'
    isTrue (state) {
      return state._isTrue;
    },
    users (state) {
      return state.users
    }
  },
  
  mutations: {
    // Here we will create Jenny
    setUsers(state, val) {
      state.users = val
    },
    updateUser(state, val) {
        state.user = val;
    },
    updateLoggedInLink(state, val) {
        state.loggedInLink = val;
    },
    toggle(state, bool) {
      state._isTrue = bool;
    },
  },
  
  actions: {
    async getUsers(context) {
      context.commit('setUsers', await getUsers())
    },
    // async setUsers(context) {
    //   const result = await getUsers();
    //   context.commit('setUsers', result)
    // },
    async toggle(context) {
      let temp = !context.state._isTrue
      await setFBData(temp)
    },
    async updateFBData(context) {
      const result = await getFBData();
      context.commit('toggle', result);
      // context.commit('toggle', await getFBData());
    }
  }
});


