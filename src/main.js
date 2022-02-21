import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import Routes from './routes'
import Store from './store'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
})

const store = new Vuex.Store(Store)

const app = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
