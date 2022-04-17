<script setup>
import NavMenu from './components/NavMenu.vue'
import Hamburger from './components/Hamburger.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import ToolBar from './components/ToolBar.vue'

let isRouterAlive = ref(true)

// 重新加载当前路由页面
const reload = () => {
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
  })
}

provide('reload', reload)
</script>

<template>
  <div class="de-layout">
    <el-scrollbar class="de-layout__sidebar">
      <NavMenu />
    </el-scrollbar>
    <div class="de-layout__container">
      <div class="de-layout__header is-fixed">
        <Hamburger class="c-flex-none" />
        <Breadcrumb class="c-flex-1" />
        <ToolBar class="c-flex-none" />
      </div>
      <div class="de-layout__main">
        <router-view v-if="isRouterAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$sidebar-width: 260px;
$header-height: 55px;
$main-padding: 15px;

.de-layout {
  &__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: $sidebar-width;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 4px #ddd;
  }

  &__container {
    position: relative;
    width: auto;
    min-height: 100%;
    margin-left: $sidebar-width;
  }

  &__header {
    display: flex;
    align-items: center;
    height: $header-height;
    background: #fff;
    box-shadow: 0 0 4px #ddd;

    &.is-fixed {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 998;
      width: calc(100% - $sidebar-width);
    }
  }

  &__main {
    padding: $main-padding;
  }

  &__header.is-fixed + &__main {
    margin-top: $header-height;
  }
}
</style>
