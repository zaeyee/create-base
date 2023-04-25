<script setup lang="ts">
defineProps<{
  msg: string
}>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="m-8">
    <button type="button" @click="count++">count is {{ count }}</button>

    <p c-blue><i i-logos-unocss></i> Using UnoCSS</p>
    <p>Edit <code>home/components/HelloWorld.vue</code> to test HMR</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="c-#888">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
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
  font-weight: bold;
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
