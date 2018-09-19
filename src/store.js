import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: undefined
  },

  mutations: {
    setJWT(state, jwt) {
      axios.defaults.headers.common['Authorization'] = 'Bearer' + jwt
      state.jwt = jwt
    }
  }
})
