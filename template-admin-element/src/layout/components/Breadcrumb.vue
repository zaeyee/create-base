<script setup>
const route = useRoute()

// 面包屑导航列表
let breadcrumbList = ref([])

// 初始化面包屑导航列表
const initBreadcrumb = () => {
  const matched = route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
  const first = matched[0]
  if (!first || !first.name || first.name.trim().toLocaleLowerCase() !== 'dashboard') {
    matched.unshift({ path: '/dashboard', meta: { title: '控制台' } })
  }
  breadcrumbList.value = matched
}

initBreadcrumb()

// 监听路由变化
watch(route, route => {
  // 如果转到重定向页面，不更新面包屑
  if (route.path.startsWith('/redirect/')) {
    return
  }
  initBreadcrumb()
})
</script>

<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="item">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
