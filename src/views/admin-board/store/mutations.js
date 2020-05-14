// Wait the 'commit' from action to execute the changes on the data/state
// import * as types from './mutation-types'
export default {
  // Get Drugstore
  setUsers (state, data) {
    state.users = data
  },

  // Get single drug from drugstore
  setUser (state, data) {
    state.user = data
  },

  // Set logged user info
  setUserAuth(state, user) {
    state.loggedUser = user
  },

  removeUser(state, id) {
    state.user = id
  }
}
