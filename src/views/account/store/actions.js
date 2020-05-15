import AuthService from '../services'

export default {
  // Get logged user info
  ActionGetUser({ commit }) {
    return AuthService.getUser()
    .then(data => {
      commit('setUser', data)
      return Promise.resolve(data)
    })
    .catch(err => {
      console.log('There is a error!')
      return Promise.reject(err)
    })
  }
}
