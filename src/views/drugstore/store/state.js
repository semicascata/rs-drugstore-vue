// Data
const user = localStorage.getItem('user')

const initState = user
  // IF: If the user is already logged in, set it to the 'user' state
  ? { status: { loggedIn: true }, user }
  // ELSE: If user is not logged, set his value to 'null'
  : { status: { loggedIn: false }, user: null }

export default {
  initState,
  loggedUser: {},
  drugs: [],
  drug: [],
  newDrug: false
}
