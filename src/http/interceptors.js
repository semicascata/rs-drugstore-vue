import axios from 'axios'
import router from '../router'
import IntercepServices from './services'

export default function interceptorSetup() {
  // Request
  axios.interceptors.request.use(req => {

    const token = localStorage.getItem('user')
    if (token) {
      req.headers['x-access-token'] = token
    }

    // Edit request config
    return req

  }, err => {
    return Promise.reject(err)
  })

  // Response
  axios.interceptors.response.use(res => {
    // console.log(`Endpoint: ${res.config.url}`)

    // Edit request config
    return res
  }, err => {

    const originalReq = err.config
    const refreshUrl = 'http://localhost:3000/shelter/v1/auth/token'

    // 401 Status code AND Refresh token URL?
    if (err.response.status === 401 && originalReq.url === refreshUrl) {

      // Logout user
      IntercepServices.logout()
      .then(() => {
        // localStorage.removeItem('userRefresh')

        // Reload page
        router.go()
      })
    }

    // 401 Status code AND Is it failed again?
    if (err.response.status === 401 && !originalReq._retry) {
      console.log('Refresh token')

      try {
        // Refresh Token Exchange
        IntercepServices.tokenRef()
          .then(res => {
            //Removing expired token
            localStorage.removeItem('user')

            // Get new token response and setting it
            const newToken = res.data.token
            localStorage.setItem('user', newToken)
          })

      } catch (err) {
        return Promise.reject(err)
      }
    }
  })
}
