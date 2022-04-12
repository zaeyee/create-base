<template>
  <div class="hamburger" :class="{ 'is-active': isActive }" @click="toggle">
    <SvgIcon name="i-ep-fold" :size="20" />
  </div>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const toggle = () => {
  emit('toggle')
}
</script>

<style lang="scss">
.hamburger {
  padding: 8px;
  margin: 0 6px;
  font-size: 0;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    background: #f5f5f5;
  }

  &:active {
    background: #eee;
  }

  &.is-active {
    transform: rotateZ(180deg);
  }
}
</style>
