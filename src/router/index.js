import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculadoras',
    name: 'Calculadora',
    component: () => import('../views/Calculadora.vue')
  },
  {
    path: '/lembretes',
    name: 'Lembrete',
    component: () => import('../views/Lembrete.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
