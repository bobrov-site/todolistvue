import Vue from 'vue'
import Vuex from 'vuex'
import {todosModule} from "@/store/todosModule";

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
    todos: todosModule
  }
})
