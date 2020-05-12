// Wait the 'commit' from action to execute the changes on the state(data)
export default {
  // If login OK
  loginSuccess(state, user) {
    state.initState.status.loggedIn = true
    state.user = user
  },

  // If login NOK
  loginFailure(state, err) {
    state.initState.status.loggedIn = false
    state.user = null
    state.validateErr = err
  },

  // If register OK
  registerSuccess(state, err) {
    state.initState.status.loggedIn = false
    state.validateErr = err
  },

  // If register NOK
  registerFailure(state, err) {
    state.initState.status.loggedIn = false
    state.validateErr = err
  }
}
