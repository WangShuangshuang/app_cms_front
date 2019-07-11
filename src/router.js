import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "chunk1" */ './views/EditComponent')
    },
  ]
})