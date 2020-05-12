export default [
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ './views/AdminBoard')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ './views/User'),
    props: true
  }
]
