import axios from 'axios'
import URL from '../_helpers/url'

class IntercepServices {
  // Logout Handler
  logout() {
    // Remove data from Local Storage
    localStorage.removeItem('user')
    const userRefresh = localStorage.getItem('userRefresh')

    // GET call to the Logout end-point
    return axios.get(`${URL}/auth/logout`, {
      token: userRefresh
    })
    .then(res => {
      // console.log(res)
      return res
    })
  }

  // Refresh Token
  tokenRef() {
    const token = localStorage.getItem('userRefresh')

    // Post request to the Refresh Token end-point
    return axios.post(`${URL}/auth/token`, {
      refreshToken: token
    })
    .then(res => {
      // console.log(res)
      return res
    })
  }
}

export default new IntercepServices()
