import AuthService from '../services'

export default {
  // Login Action
  ActionLogin({ commit }, user) {
    try {
      return AuthService.login(user)
      .then(user => {
        commit('loginSuccess', user)
      })
    } catch(err) {
      commit('loginFailure')
    }
  },

  // Register Action
  ActionRegister({ commit }, user) {
    return AuthService.register(user)
    .then(res => {
      commit('registerSuccess')
      return Promise.resolve(res.data)
    })
    .catch(err => {
      commit('registerFailure')
      return Promise.reject(err)
    })
  }
}
