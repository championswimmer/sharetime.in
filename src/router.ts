import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:tz([A-Z]{3})/:time([0-2][0-9][0-5][0-9])',
      name: 'time',
      component: () => import('@/pages/Time.vue')
    }
  ]
})
