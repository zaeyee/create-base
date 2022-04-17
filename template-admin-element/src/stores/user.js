import { login, getInfo } from '@/api/user'
import { filterRoutes } from '@/utils/auth'
import constantRoutes from '@/router/constant'
import asyncRoutes from '@/router/async'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    profile: {},
    permissions: [],
    accessRoutes: []
  }),
  getters: {
    hasToken: state => !!state.token
  },
  actions: {
    // 登录
    async login(userForm) {
      const { data } = await login(userForm)
      this.token = data.token
      localStorage.setItem('token', data.token)
    },
    // 获取用户信息
    async getInfo() {
      const { data } = await getInfo()
      this.profile = data.profile
      this.permissions = data.permissions
      return data
    },
    // 退出登录
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    },
    // 获取可访问的异步路由
    getAsyncRoutes(permissions) {
      const newAsyncRoutes = filterRoutes(asyncRoutes, permissions)
      this.accessRoutes = constantRoutes.concat(newAsyncRoutes)
      return newAsyncRoutes
    }
  }
})
