<template>
  <div v-if="!menu.meta || !menu.meta.hidden">
    <el-menu-item v-if="onlyItem" :index="resolvePath(onlyItem.path)">
      <SvgIcon :name="onlyItem.meta.icon" />
      <span>{{ onlyItem.meta.title }}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="resolvePath(menu.path)">
      <template v-if="menu.meta" #title>
        <SvgIcon :name="menu.meta.icon" />
        <span>{{ menu.meta.title }}</span>
      </template>
      <NavMenuItem v-for="child in menu.children" :key="child.path" :menu="child" :base-path="basePath" />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { resolve as pathResolve } from 'path-browserify'
import { isExternal } from '@/utils/validator'

const props = defineProps({
  // 菜单数据
  menu: { type: Object, required: true },
  // 基础路径
  basePath: { type: String, default: '' }
})

// 单独的菜单项
const onlyItem = computed(() => {
  const children = (props.menu.children || []).filter(item => !item.meta || !item.meta.hidden)

  // 没有子菜单或子菜单都不显示，则显示该父菜单
  if (children.length === 0) {
    return props.menu
  }

  // 只有一个子菜单显示且该父菜单无元信息，则显示该子菜单
  if (children.length === 1 && !props.menu.meta) {
    return children[0]
  }

  // 否则不是单独的菜单项，是嵌套的菜单
  return null
})

// 处理菜单的路径
const resolvePath = menuPath => {
  if (isExternal(menuPath)) {
    return menuPath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return pathResolve(props.basePath, menuPath)
}
</script>
