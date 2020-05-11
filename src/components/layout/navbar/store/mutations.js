// Wait the 'commit' from action to execute the changes on the state(data)
export default {
  // Loggin out
  logout(state) {
    state.initState.status.loggedIn = false
    state.user = null
  },

  // Get logged user info
  setUser(state, user) {
    state.loggedUser = user
  }
}
