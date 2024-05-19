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
    clear() {
      uni.removeStorageSync('token')
      this.$reset()
    }
  }
})
