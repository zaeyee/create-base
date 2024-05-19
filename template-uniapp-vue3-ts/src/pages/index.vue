<script setup lang="ts">
const title = ref('Hello')
</script>

<template>
  <view class="flex flex-col justify-center items-center">
    <image class="mx-auto mb-50rpx mt-200rpx h-200rpx w-200rpx" src="/static/images/logo.png"></image>
    <view class="flex justify-center">
      <text class="text-lg c-info">{{ title }}</text>
    </view>
  </view>
</template>
