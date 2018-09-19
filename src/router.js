import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Query from './views/Query.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/query',
      name: 'Query',
      component: Query
    }
  ]
})
