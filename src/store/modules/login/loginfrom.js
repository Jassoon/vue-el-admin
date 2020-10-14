import types from "../../types.js";
import Cookies from "js-cookie"
import {
  loginrequest
} from "@/api/request"

const loginfrom = {
  state: {
    token: ''
  },
  mutations: {
    [types.LOGIN_IN]: (state, datatoken) => {
      state.token = datatoken
    }
  },
  actions: {
    loginin({
      commit
    }, loginfrom) {
      const username = loginfrom.username.trim()
      const password = loginfrom.password.trim()
      return new Promise((resolve, reject) => {
        loginrequest('/login', loginfrom).then(res => {
          const data = res.data.login
          Cookies.set('Token', data.token)
          commit(types.LOGIN_IN, data.token)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default loginfrom