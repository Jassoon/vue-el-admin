import types from "../types.js";
const tagsview = {
  state: {
    editableTabsValue: "0",
    tabIndex: "0",
    editTabs: [],
  },
  mutations: {
    [types.ADD_TAGS]: (state, targetName) => {
      let newTabName = ++state.tabIndex + ""
      state.editTabs.push({
        title: targetName.title,
        name: newTabName,
        content: "New Tab content" + state.tabIndex,
      });
      state.editableTabsValue = newTabName;
    },
    [types.REMOVE_TAGS]: (state, targetName) => {
      let tabs = state.editTabs;
      let activeName = state.editableTabsValue;
      if(activeName ===targetName){
        state.editTabs.forEach((tab,index) => {
            if(tab.name===targetName){
              let nextTab = tabs[index+1] || tabs[index-1]
              if(nextTab){
                activeName = nextTab.name
              }
            }
        });
      }
      state.editableTabsValue = activeName;
      state.editTabs = tabs.filter(tab => tab.name !== targetName)
    },
  },
  actions: {
    addtags({ commit, state }, targetName) {
      commit(types.ADD_TAGS, targetName);
    },
    removeTab({commit,state}, targetName) {
      commit(types.REMOVE_TAGS, targetName);
    }
  },
};

export default tagsview;
