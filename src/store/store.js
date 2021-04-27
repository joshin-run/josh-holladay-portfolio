import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    loggedInLink: 'Login',
    loggedIn: false
  },
  
  getters: {
    // if user is logged in...change loggedIn to true...
    // if user is logged in...change loggedInLink to 'Logout'
  },
  
  mutations: {
    // Here we will create Jenny
    updateUser(state, val) {
        state.user = val;
    },
    updateLoggedInLink(state, val) {
        state.loggedInLink = val;
    }
  },
  
  actions: {
    // Here we will create Larry
  }
});


