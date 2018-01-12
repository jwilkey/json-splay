import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = {
  json: undefined
}

export const getters = {
  json: state => state.json
}

export const actions = {
  setJson ({ commit }, json) {
    commit('SET_JSON', json)
  }
}

export const mutations = {
  SET_JSON (state, json) {
    state.json = json
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
