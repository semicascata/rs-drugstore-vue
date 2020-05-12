export default [
  {
    path: '/drugstore',
    name: 'drugstore',
    component: () => import(/* webpackChunkName: "drugstore" */ './views/Drugstore')
  },
  {
    path: '/drugstore/:id',
    name: 'drug',
    component: () => import(/* webpackChunkName: "drug" */ './views/Drug'),
    props: true
  }
]
