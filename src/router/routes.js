import { routes as auth } from '../modules/auth'
import { routes as home } from '../views/home'
import { routes as drugstore } from '../views/drugstore'
import { routes as contact } from '../views/contact'
import { routes as account } from '../views/account'
import { routes as adminBoard } from '../views/admin-board'

export default [
  ...home,
  ...auth,
  ...drugstore,
  ...contact,
  ...account,
  ...adminBoard
]
