import Vue from "vue";
import Vuex from "vuex";

import tabsview from "./modules/tabsview";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tabsview
  },
  getters,
});

export default store;