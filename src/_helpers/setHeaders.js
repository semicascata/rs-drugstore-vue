export default function authHeader() {
    // Get token/user from Local Storage
    let user = localStorage.getItem('user')
  
    if(user) {
      // console.log(user)
      return {
        'Content-Type': 'application/json',
        'x-access-token': user // Node backend
        // 'Authorization': `Bearer ${user}` // Spring backend
      }
    } else {
      return {}
    }
}
