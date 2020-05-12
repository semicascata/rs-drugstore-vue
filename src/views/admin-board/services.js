import axios from 'axios'
import authHeader from '../../_helpers/setHeaders'
import URL from '../../_helpers/url'

class UsersService {
  // Get all Drugstore
  getUsers() {
    return axios.get(`${URL}/users`, {
      headers: authHeader()
    }).then(res => {
      console.log(res.data.success)
      return res.data.users
    })
  }

  // Get single drug from Drugstore
  getUser(id) {
    return axios.get(`${URL}/user/${id}`, {
      headers: authHeader()
    }).then(res => {
      console.log(res.data.success)
      return res.data.user
    })
  }
}

export default new UsersService()
