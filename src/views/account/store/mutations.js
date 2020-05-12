// Wait the 'commit' from action to execute the changes on the state(data)
export default {
  // Get logged user info
  setUser(state, user) {
    state.loggedUser = user
  }
}
