export const useUserStore = defineStore('user', {
  state: () => ({
    token: uni.getStorageSync('token'),
    profile: {}
  }),
  actions: {
    // 清除数据
    clear() {
      this.$reset()
      uni.removeStorageSync('token')
    }
  }
})
