import types from "../types.js";
const tagsview = {
  state: {
    editableTabsValue: "0",
    tabIndex: "0",
    editTabs: [],
    ispath: "",
  },
  mutations: {
    [types.ADD_TAGS]: (state, targetName) => {
      let iftitle = state.editTabs.filter((item) => {
        return item.title === targetName.title;
      });
      if (iftitle.length === 0) {
        let newTabName = ++state.tabIndex + "";
        state.editTabs.push({
          title: targetName.title,
          name: newTabName,
          ispath: targetName.path,
          content: newTabName + "试试",
        });
        state.editableTabsValue = newTabName;
        state.ispath = targetName.path;
      } else {
        iftitle.forEach((item, i) => {
          state.editableTabsValue = item.name;
        });
      }
    },
    [types.REMOVE_TAGS]: (state, targetName) => {
      let tabs = state.editTabs;
      let activeName = state.editableTabsValue;
      if (activeName === targetName) {
        state.editTabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      state.editableTabsValue = activeName;
      state.editTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
  actions: {
    addtags({ commit, state }, targetName) {
      // -----------------------------------------------------------------------------------------------------------------------------up
      // let iftitle = state.editTabs.filter(item =>{
      //   return item.title === targetName.title
      // })
      // if(iftitle.length===0){
      //   commit(types.ADD_TAGS, targetName);
      // }
      commit(types.ADD_TAGS, targetName);
    },
    removeTab({ commit, state }, targetName) {
      commit(types.REMOVE_TAGS, targetName);
    },
  },
};

export default tagsview;
