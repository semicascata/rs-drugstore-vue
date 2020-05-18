import axios from 'axios'
import authHeader from '../../../_helpers/setHeaders'
import URL from '../../../_helpers/url'

class AuthService {
  // Logout Handler
  logout() {
    // Remove data from Local Storage
    localStorage.removeItem('user')
    localStorage.removeItem('userRefresh')

    // GET call to the Logout end-point
    return axios.get(`${URL}/auth/logout`)
    .then(res => {
      console.log(res)
    })
  }

  // Get User
  getUser() {
    return axios.get(`${URL}/auth/user`, {
        headers: authHeader()
      })
      .then(res => {
        if(res.data) {
          // Get the data from response and console log it
          // console.log(res.data.role)

          // Send the info to the 'Actions'
          return res.data
        }

        return
      })
  }
}

export default new AuthService()
