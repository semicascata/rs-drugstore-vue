import axios from 'axios'
import authHeader from '../../_helpers/setHeaders'
import URL from '../../_helpers/url'

class AuthService {
  // Get User
  getUser() {
    return axios.get(`${URL}/auth/user`, {
        headers: authHeader()
      })
      .then(res => {
        if(res.data) {
          // Get the data from response and console log it
          console.log(res.data)
        }
        // Send the info to the 'Actions'
        return res.data
      })
  }
}

export default new AuthService()
