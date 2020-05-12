import axios from 'axios'
import URL from '../../_helpers/url'

class AuthService {
  // Login Handler
  login(user) {
    return axios.post(`${URL}/auth/login`, {
      // Payload for authentication POST requests
      username: user.username,
      password: user.password
    })
    .then(res => {
      // Got the response from the 'send' POST request from server-side
      if(res.data.token) {
        // Set the token we got on 'res' to the Local Storage on browser
        const token = res.data.token
        localStorage.setItem('user', token)
      }
      // Return the response
      return res.user
    })
  }

  // Register Handler
  register(user) {
    return axios.post(`${URL}/auth/register`, {
      username: user.username,
      email: user.email,
      password: user.password,
      password2: user.password2, // ?
      role: user.role // ?
    })
  }
}

export default new AuthService()
