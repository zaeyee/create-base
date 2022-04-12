import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  getters: {
    hasToken: state => !!state.token
  },
  actions: {
    // 退出登录
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})
