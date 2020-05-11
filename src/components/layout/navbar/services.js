import axios from 'axios'
import authHeader from './headers'

// API URL
const URL = 'http://localhost:3000/shelter/v1/auth'

class AuthService {
  // Logout Handler
  logout() {
    // Remove data from Local Storage
    localStorage.removeItem('user')

    // GET call to the Logout end-point
    return axios.get(`${URL}/logout`)
    .then(res => {
      console.log(res)
    })
  }

  // Get User
  getUser() {
    return axios.get(`${URL}/user`, {
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
