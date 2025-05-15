<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style>
body {
  color: #181818;
  background: #fff;

  font-synthesis: none; /* 禁用字体合成 */
  text-rendering: optimizeLegibility; /* 提升文本可读性 */
  -webkit-font-smoothing: antialiased; /* WebKit 抗锯齿 */
  -moz-osx-font-smoothing: grayscale; /* Firefox 灰度抗锯齿 */
  -webkit-text-size-adjust: 100%; /* 禁用移动端文本自动调整 */

  -webkit-tap-highlight-color: transparent; /* 禁用点击高亮 */
}

input,
input:focus,
textarea,
textarea:focus,
button {
  outline: none;
}
</style>
