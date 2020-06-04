import types from "../types.js";
const tagsview = {
  state: {
    editableTabsValue: "0",
    tabIndex: "0",
    editTabs: [],
  },
  mutations: {
    [types.ADD_TAGS]: (state, targetName) => {
      state.editableTabsValue = state.tabIndex;
      state.tabIndex = ++state.tabIndex + "";
      state.editTabs.push(targetName);
    },
  },
  actions: {
    addtags({ commit, state }, targetName) {
      let Tnames = {
        title: targetName,
        name: state.tabIndex + "",
        content: "New Tab content" + state.tabIndex,
      };
      commit(types.ADD_TAGS, Tnames);
    },
    removeTab({commit,state}, targetNameid) {
      if(state.editableTabsValue == targetNameid){
        console.log(targetNameid)
      }

    }
  },
  // actions: {
  //   addtags({ commit }, name) {
  //     commit(types.ADD_TAGS, name);
  //   },
  // },
};

export default tagsview;
