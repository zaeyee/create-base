import type { UserModel, UserRow } from '@/types/user'
import { login } from '@/api/user'

interface UserState {
  token: string
  profile: UserRow
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: localStorage.getItem('token') || '',
    profile: {} as UserRow
  }),
  actions: {
    // 用户登录
    async login(model: UserModel) {
      const { token, profile } = await login(model)
      this.token = token
      this.profile = profile
      localStorage.setItem('token', token)
    },
    // 清空数据
    clear() {
      this.$reset()
      localStorage.removeItem('token')
    }
  }
})
