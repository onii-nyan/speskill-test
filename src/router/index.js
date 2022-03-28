import Vue from 'vue'
import VueRouter from 'vue-router'
import AwasomeTerminal from '../views/AwasomeTerminal.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AwasomeTerminal',
    component: AwasomeTerminal
  },
  {
    path:'/shop',
    component:Shop,
    name: "Shop"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
