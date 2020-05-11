import Vuex from "vuex";
import Vue from "vue";
import modules from './modules'

// The connection between Vue and Vuex.
Vue.use(Vuex);

export default new Vuex.Store({ modules });
