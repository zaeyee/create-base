<script setup lang="ts">
defineProps<{
  title: string
}>()

const count = ref(0)
</script>

<template>
  <div class="max-w-320 mx-auto p-8 text-center">
    <div class="flex justify-center">
      <a href="https://cn.vitejs.dev/" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://cn.vuejs.org/" target="_blank">
        <img src="@/assets/images/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <h1>{{ title }}</h1>

    <div class="m-8">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        <a href="https://unocss.dev/" target="_blank"><i class="i-logos-unocss" /> Using UnoCSS</a>
      </p>
      <p>Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
      starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">
        Vue Docs Scaling up Guide
      </a>
    </p>
    <p class="c-#888">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.logo {
  --at-apply: h-36 p-6;
  will-change: filter;
  transition: filter 300ms;
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  font-weight: 700;
  line-height: 1.1;
}

p {
  margin-top: 16px;
  margin-bottom: 16px;
}

code {
  font-size: 13px;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>
