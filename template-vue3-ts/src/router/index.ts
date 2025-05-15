import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
