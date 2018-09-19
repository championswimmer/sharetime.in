import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './registerServiceWorker'

// Fonts
import '@/assets/fonts/google-font-imports.css'
import '@/assets/fonts/local.css'

// Styles
import Buefy from 'buefy'
import './assets/scss/app.scss'

Vue.use(Buefy)

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
