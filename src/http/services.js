import axios from 'axios'
import URL from '../_helpers/url'

class IntercepServices {
  // Logout Handler
  logout() {
    // Remove data from Local Storage
    localStorage.removeItem('user')

    // GET call to the Logout end-point
    return axios.get(`${URL}/auth/logout`)
    .then((res) => {
      console.log(res)
    })
  }
}

export default new IntercepServices()
