import Vuex from 'vuex'
import Vue from 'vue'
import firebase from "firebase/app";
import 'firebase/functions';
import { getFBData, setFBData } from '../sdk.js';

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    user: '',
    loggedInLink: 'Login',
    loggedIn: false,
    _isTrue: null
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
    }
  },
  
  actions: {
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


