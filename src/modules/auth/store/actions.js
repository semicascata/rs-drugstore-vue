import AuthService from '../services'

export default {
  // Login Action
  ActionLogin({ commit }, user) {
    return AuthService.login(user)
    .then(user => {
      commit('loginSuccess', user)
      return Promise.resolve(user)
    })
    .catch(err => {
      commit('loginFailure', err)
      return Promise.reject(err)
    })
  },

  // Register Action
  ActionRegister({ commit }, user) {
    return AuthService.register(user)
    .then(res => {
      commit('registerSuccess')
      return Promise.resolve(res.data)
    })
    .catch(err => {
      commit('registerFailure', err)
      return Promise.reject(err)
    })
  }
}
