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
    return axios.get(`${URL}/users/${id}`, {
      headers: authHeader()
    }).then(res => {
      console.log(res.data.success)
      return res.data.user
    })
  }

  // Get User
  getUserAuth() {
    return axios.get(`${URL}/auth/user`, {
        headers: authHeader()
      })
      .then(res => {
        if(res.data) {
          // Get the data from response and console log it
          console.log(res.data.role)
        }
        // Send the info to the 'Actions'
        return res.data
      })
  }

  // Delete User
  deleteUser(id) {
    console.log(id)
    return axios.delete(`${URL}/users/${id}`, {
      headers: authHeader()
    })
    .then(res => {
      console.log(res.data.message)
    })
  }
}

export default new UsersService()
