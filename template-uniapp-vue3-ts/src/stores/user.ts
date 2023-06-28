import type { UserRow } from '@/types/user'

interface UserState {
  token: string
  profile: UserRow
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: uni.getStorageSync('token'),
    profile: {} as UserRow
  }),
  actions: {
    // 清除数据
    clear() {
      this.$reset()
      uni.removeStorageSync('token')
    }
  }
})
