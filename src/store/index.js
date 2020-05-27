import Vue from "vue";
import Vuex from "vuex";

import tagsview from "./modules/tagsview";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { tagsview },
  getters,
});

export default store;
