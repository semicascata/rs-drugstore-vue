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
  }
}
