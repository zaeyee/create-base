import { isAuth, isAuthSome, isAuthEvery } from '@/utils/auth'

export default app => {
  app.directive('auth', (el, binding) => {
    let auth
    if (Array.isArray(binding.value)) {
      auth = binding.modifiers.every ? isAuthEvery(binding.value) : isAuthSome(binding.value)
    } else {
      auth = isAuth(binding.value)
    }
    if (!auth) {
      el.remove()
    }
  })
}
