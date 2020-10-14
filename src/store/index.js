import Vue from "vue";
import Vuex from "vuex";

import tabsview from "./modules/TabsView";
import leftnavs from "./modules/LeftNavs";
import loginin from "./modules/login/loginfrom";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tabsview,
    leftnavs,
    loginin
  },
  getters,
});

export default store;