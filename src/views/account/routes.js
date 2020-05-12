export default [
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "account" */ './views/Account'),
    props: true
  }
]
