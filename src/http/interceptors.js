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
    console.log(err)
    return Promise.reject(err)
  })

  // Response
  axios.interceptors.response.use(res => {
    console.log(`Endpoint: ${res.config.url}`)

    // Edit request config
    return res
  }, err => {

    const originalReq = err.config
    const refreshUrl = 'http://localhost:3000/shelter/v1/auth/token'

    // 401 Status code AND Refresh token URL?
    if (err.response.status === 401 && originalReq.url === refreshUrl) {
      return Promise.reject(err)
    }

    // 401 Status code AND Is it failed again?
    if (err.response.status === 401 && !originalReq._retry) {
      console.log('Refresh token')

      // originalReq._retry = true

      // Refresh Token Exchange
      IntercepServices.tokenRef()
        .then(res => {

          //Removing expired token
          localStorage.removeItem('user')

          // Get new token response and setting it
          const newToken = res.data.token
          localStorage.setItem('user', newToken)
        })
        .catch(err => {

          // If 401 Status code
          if(err.response.status === 401) {
            console.log('Logging user out')

            IntercepServices.logout()
            .then(() => {
              // Reload page
              router.go()
            })
          }
          return Promise.reject(err)
        })

      // Handle err
      return Promise.reject(err)
    }
  })
}
