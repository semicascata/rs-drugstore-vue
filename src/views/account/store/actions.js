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
      return Promise.reject(err)
    })
  }
}
