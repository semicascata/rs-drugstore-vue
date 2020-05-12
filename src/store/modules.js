import { store as auth } from '@/modules/auth'
import { store as drugstore } from '@/views/drugstore'
import { store as navbar } from '@/components/layout/navbar'
import { store as account } from '@/views/account'
import { store as adminBoard } from '@/views/admin-board'

export default {
  navbar,
  auth,
  drugstore,
  account,
  adminBoard
}
