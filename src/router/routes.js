import { routes as auth } from '../modules/auth'
import { routes as home } from '../views/home'
import { routes as drugstore } from '../views/drugstore'
import { routes as contact } from '../views/contact'
import { routes as account } from '../views/account'

export default [
  ...home,
  ...auth,
  ...drugstore,
  ...contact,
  ...account
]
