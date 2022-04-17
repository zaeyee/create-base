import { useUserStore } from '@/stores/user'

// 判断某路由是否有权限访问
export const isRouteAuth = (permissions, route) => {
  if (route.meta && route.meta.auth) {
    return permissions.some(permission => route.meta.auth.includes(permission))
  }
  return true
}

// 过滤不可访问的路由
export const filterRoutes = (routes, permissions) => {
  const newRoutes = []
  routes.forEach(route => {
    const newRoute = { ...route }
    if (isRouteAuth(permissions, newRoute)) {
      if (newRoute.children) {
        newRoute.children = filterRoutes(newRoute.children, permissions)
      }
      newRoutes.push(newRoute)
    }
  })
  return newRoutes
}

// 鉴权（用户是否有某一个权限）
export const isAuth = permission => {
  const userStore = useUserStore()
  return userStore.permissions.some(item => item === permission)
}

// 鉴权（一个符合即可）
export const isAuthSome = permissions => {
  return permissions.some(item => isAuth(item))
}

// 鉴权（全部符合才可）
export const isAuthEvery = permissions => {
  return permissions.every(item => isAuth(item))
}
