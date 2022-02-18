import {User} from "@/classes/user";
import {Commit} from "vuex";

export default {
    namespaced: true,
    state: {
        user: new User()
    },
    mutations: {
        /*SET_USER: (state, user) => state.user = user*/
        SET_USER: (state: { user: User }, user: User) => state.user = user
    },
    actions: {
        /*setUser: ({commit}, user) => commit('SET_USER', user)*/
        setUser: ({commit}: { commit: Commit }, user: User) => commit('SET_USER', user)
    },
}