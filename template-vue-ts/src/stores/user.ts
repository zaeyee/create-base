import type { UserModel, UserRow } from '@/types/user'
import { TOKEN_KEY } from '@/utils/constant'
import { login } from '@/api/user'

interface UserState {
  token: string
  profile: UserRow
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: localStorage.getItem(TOKEN_KEY) || '',
    profile: {} as UserRow
  }),
  actions: {
    async login(model: UserModel) {
      const { token, profile } = await login(model)
      this.token = token
      this.profile = profile
      localStorage.setItem(TOKEN_KEY, token)
    },
    clear() {
      localStorage.removeItem(TOKEN_KEY)
      this.$reset()
    }
  }
})
