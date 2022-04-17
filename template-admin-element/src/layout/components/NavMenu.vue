<script setup>
import NavMenuItem from './NavMenuItem.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const menus = userStore.accessRoutes
</script>

<template>
  <el-menu :default-active="$route.path" router>
    <NavMenuItem v-for="menu in menus" :key="menu.path" :menu="menu" :base-path="menu.path" />
  </el-menu>
</template>
