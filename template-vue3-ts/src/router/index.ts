import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
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
