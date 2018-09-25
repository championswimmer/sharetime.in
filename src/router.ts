import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/:tz([A-Z]{2,4})/:time([0-2][0-9][0-5][0-9]|now)',
      name: 'abbr_time',
      component: () => import('@/pages/abbr/Time.vue')
    },
    {
      path: '/:continent/:city',
      component: () => import('@/pages/IANA/index.vue'),
      children: [
        {
          path: ':time([0-2][0-9][0-5][0-9])',
          name: 'IANA_time',
          component: () => import('@/pages/IANA/Time.vue')
        },
        {
          path: 'now',
          name: 'IANA_now',
          component: () => import('@/pages/IANA/Now.vue')
        }
      ]
    }
  ]
})
