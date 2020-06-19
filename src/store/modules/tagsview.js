import types from "../types.js";
const tagsview = {
  state: {
    editableTabsValue: "0",
    tabIndex: "0",
    editTabs: [],
    ispath: ""
  },
  mutations: {
    [types.ADD_TAGS]: (state, targetEvent) => {
      let iftitle = state.editTabs.filter((item) => {
        return item.title === targetEvent.title;
      });
      if (iftitle.length === 0) {
        let newTabName = ++state.tabIndex + "";
        state.editTabs.push({
          title: targetEvent.title,
          name: newTabName,
          ispath: targetEvent.path,
          // content: newTabName + "试试",
        });
        state.editableTabsValue = newTabName;
        state.ispath = targetEvent.path;
      } else {
        state.editableTabsValue = iftitle[0].name;
        state.ispath = iftitle[0].ispath;
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
              state.ispath = nextTab.ispath;
            }
          }
        });
      }
      state.editableTabsValue = activeName;
      state.editTabs = tabs.filter((tab) => tab.name !== targetName);
    },
    [types.EDIT_TAGS]:(state,targetName)=>{
      state.editableTabsValue = targetName.name
      state.ispath = targetName.path
    }
  },
  actions: {
    addtags({ commit, state }, targetEvent) {
      commit(types.ADD_TAGS, targetEvent);
    },
    removeTab({ commit, state }, targetName) {
      commit(types.REMOVE_TAGS, targetName);
    },
    editTab({ commit, state }, targetName) {
      commit(types.EDIT_TAGS, targetName);
    }
  },
};

export default tagsview;
