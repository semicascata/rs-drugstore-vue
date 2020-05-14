import UsersService from '../services'

export default {
  // Set Drugstore
  ActionFindUsers({ commit }) {
    return UsersService.getUsers()
      .then(res => {
        commit('setUsers', res)
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

  // Set single drug
  ActionFindUser({ commit }, id) {
    return UsersService.getUser(id)
      .then(res => {
        commit('setUser', res)
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

  // Get logged user info
  ActionGetUser({ commit }) {
    return UsersService.getUserAuth()
      .then(data => {
      commit('setUserAuth', data)
      return Promise.resolve(data)
    })
    .catch(err => {
      return Promise.reject(err)
    })
  },

  // Delete user
  ActionDeleteUser({ commit }, id) {
    console.log(id)
    return UsersService.deleteUser(id)
    .then(res => {
      commit('removeUser', id)
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
  }
}
