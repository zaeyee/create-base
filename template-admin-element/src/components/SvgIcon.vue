<script setup>
const props = defineProps({
  name: { type: String, default: '' },
  size: { type: Number, default: 18 }
})

// 是否ElementPlus的图标
const isElementIcon = computed(() => {
  return props.name.indexOf('i-ep') === 0 || props.name.indexOf('IEp') === 0
})
</script>

<template>
  <el-icon v-if="isElementIcon" :size="size">
    <component :is="name" />
  </el-icon>
  <svg v-else class="svg-icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + name" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>
