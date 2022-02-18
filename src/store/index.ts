import { createStore } from 'vuex'
import UserModule from "@/store/UserModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule
  }

  /*  state: {
      user: null
    },
    mutations: {
      SET_USER: (state, user) => state.user = user
    },
    actions: {
      /!*setUser: (context, user) =>*!/
      setUser: ({commit}, user) => commit('SET_USER', user)
    },
    modules: {
    }*/
})
