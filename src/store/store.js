import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onLogin: localStorage.getItem('onLogin'),
    username: localStorage.getItem('username'),
    roles: localStorage.getItem('roles')
  }
})
