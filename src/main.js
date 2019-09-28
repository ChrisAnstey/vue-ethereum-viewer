import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import EthereumView from './components/EthereumView.vue'
import Info from './components/Info.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/latest_block', component: EthereumView },
  { path: '/info', component: Info },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
