<script setup>
import { isAuth, isAuthSome, isAuthEvery } from '@/utils/auth'

const props = defineProps({
  value: { type: [String, Array], default: '' },
  checkEvery: { type: Boolean, default: false }
})

const auth = computed(() => {
  if (Array.isArray(props.value)) {
    return props.checkEvery ? isAuthEvery(props.value) : isAuthSome(props.value)
  }
  return isAuth(props.value)
})
</script>

<template>
  <div>
    <slot v-if="auth"></slot>
    <slot v-else name="denied"></slot>
  </div>
</template>
