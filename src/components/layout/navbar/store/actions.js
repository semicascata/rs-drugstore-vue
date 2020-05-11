import AuthService from '../services'

export default {
  // Logout Action
  ActionLogout({ commit }) {
    return AuthService.logout()
    .then((res) => {
      commit('logout')
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
  },

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
