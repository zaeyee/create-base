import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
