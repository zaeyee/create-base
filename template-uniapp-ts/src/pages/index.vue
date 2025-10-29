<script setup lang="ts">
const title = ref('Hello')
</script>

<template>
  <view class="flex flex-col items-center justify-center">
    <image class="mx-auto mb-6 mt-25 h-25 w-25" src="/static/images/logo.png" />
    <view class="flex justify-center">
      <text class="text-lg c-link">{{ title }}</text>
    </view>
  </view>
</template>
