export const useUserStore = defineStore('user', {
  state: () => ({
    token: uni.getStorageSync('token'),
    profile: {}
  }),
  actions: {
    clear() {
      uni.removeStorageSync('token')
      this.$reset()
    }
  }
})
