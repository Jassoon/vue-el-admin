import axios from "axios"
// const requesURL = "/mock"
// const requesURL = "http://localhost:8080/mock"
export function loginrequest(url, params) {
  return axios.post(url, params)
  // var data = JSON.stringify(params)
}