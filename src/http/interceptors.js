import axios from 'axios';
import IntercepServices from './services'

export default function interceptorSetup() {
    // Request
    axios.interceptors.request.use(req => {
      console.log(req)

      // Edit request config
      return req
    }, err => {
      console.log(err)
      return Promise.reject(err)
    })

    // Response
    axios.interceptors.response.use(res => {
      // console.log(res)

      // Edit request config
      return res
    }, err => {

      // Login out user
      IntercepServices.logout()
      .then(() => {
        return window.location.href = '/'
      })

      // Handle err
      console.log(err)
      return Promise.reject(err)
    })
}
