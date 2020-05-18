// Wait the 'commit' from action to execute the changes on the state(data)
export default {
  // If login OK
  loginSuccess(state, user) {
    state.initState.status.loggedIn = true
    state.user = user
  },

  // If login NOK
  loginFailure(state) {
    state.initState.status.loggedIn = false
    state.user = null
  },

  // If register OK
  registerSuccess(state) {
    state.initState.status.loggedIn = false
  },

  // If register NOK
  registerFailure(state) {
    state.initState.status.loggedIn = false
  }
}
