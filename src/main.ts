// import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './registerServiceWorker'
// Plugins
import VueTimers from 'vue-plugin-timers'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'

// if (process.env.NODE_ENV === 'development') {
//   devtools.connect()
// }

// Fonts
import '@/assets/fonts/google-font-imports.css'
import '@/assets/fonts/local.css'

// Styles
import Buefy from 'buefy'
import './assets/scss/app.scss'

// Inject Plugins
Vue.use(VueTimers)
Vue.use(Buefy)
Vue.use(VueClipboard)
Vue.use(VueAnalytics, {
  id: 'UA-51064506-3',
  router,
  autoTracking: {
    screenview: true
  }
})

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
