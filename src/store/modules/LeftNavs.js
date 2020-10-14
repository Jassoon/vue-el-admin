import types from '../types.js'
import Cookies from 'js-cookie'
const leftnavs = {
  state: {
    togglestate: !+Cookies.get('leftnavstate'),
  },
  mutations: {
    [types.TOGGLE_STATE]: (state) => {
      if (state.togglestate) {
        Cookies.set('leftnavstate', 1)
        state.togglestate = !state.togglestate
      } else {
        Cookies.set('leftnavstate', 0)
        state.togglestate = !state.togglestate
      }

    },
  },
  actions: {
    togglemenu({
      commit
    }) {
      commit(types.TOGGLE_STATE)
    },
  },
}
export default leftnavs