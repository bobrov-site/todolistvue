import Vue from 'vue'
import Vuex from 'vuex'
import {pageModule} from "@/store/pageModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    page: pageModule
  }
})
