// Get the token from Local Storage and set it to the user
// const user = JSON.parse(localStorage.getItem('user'))

const user = localStorage.getItem('user')


const initState = user
  // IF: If the user is already logged in, set it to the 'user' state
  ? { status: { loggedIn: true }, user }
  // ELSE: If user is not logged, set his value to 'null'
  : { status: { loggedIn: false }, user: null }

export default {
  initState
}
