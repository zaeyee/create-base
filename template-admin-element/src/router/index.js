import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import constantRoutes from './constant'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  // 若已有token
  if (userStore.hasToken) {
    // 若目标是登录页，则重定向到首页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasPermissions = userStore.permissions && userStore.permissions.length > 0
      if (hasPermissions) {
        // 若已获取用户权限列表，则直接进入
        next()
      } else {
        // 未获取用户权限列表，则先获取
        try {
          // 获取用户信息
          const { permissions } = await userStore.getInfo()

          // 基于权限生成可访问的异步路由
          const asyncRoutes = userStore.getAsyncRoutes(permissions)

          // 动态添加可访问的异步路由
          asyncRoutes.forEach(item => router.addRoute(item))

          //设置replace为true，这样导航就不会留下历史记录
          next({ ...to, replace: true })
        } catch (error) {
          // 获取用户信息失败，则退出登录后重定向到登录页
          ElMessageBox.alert(error)
          userStore.logout()
          next('/login?redirect' + to.fullPath)
        }
      }
    }
  } else {
    // 无token时
    // 免登录白名单
    const whiteList = ['/login']
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单中，直接进入
      next()
    } else {
      // 其他没有访问权限的页面，则重定向到登录页
      next('/login?redirect' + to.fullPath)
    }
  }
})

export default router
