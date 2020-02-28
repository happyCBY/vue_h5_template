import Vue from "vue";
import Vuex from "vuex";
// vuex持久化
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
  plugins: [persistedState()]
});
