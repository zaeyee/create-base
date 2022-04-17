<script setup>
import { isAuth, isAuthSome, isAuthEvery } from '@/utils/auth'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const loading = ref(false)

// 更换帐号
const changeAccount = async username => {
  try {
    loading.value = true
    await userStore.login({
      username,
      password: '123456'
    })
    location.reload()
  } catch (error) {
    loading.value = false
    ElMessageBox.alert(error)
  }
}

// 检测单个权限
const checkAuth = permission => {
  if (isAuth(permission)) {
    ElMessage.success('检测通过')
  } else {
    ElMessage.error('检测不通过')
  }
}

// 检测多个权限，一个符合即可
const checkAuthSome = permissions => {
  if (isAuthSome(permissions)) {
    ElMessage.success('检测通过')
  } else {
    ElMessage.error('检测不通过')
  }
}

// 检测多个权限，全部符合才可
const checkAuthEvery = permissions => {
  if (isAuthEvery(permissions)) {
    ElMessage.success('检测通过')
  } else {
    ElMessage.error('检测不通过')
  }
}
</script>

<template>
  <div v-loading.fullscreen.lock="loading">
    <h3>切换帐号</h3>
    <el-radio-group v-model="userStore.profile.username" @change="changeAccount">
      <el-radio-button label="admin" />
      <el-radio-button label="editor" />
    </el-radio-group>

    <h3>帐号权限</h3>
    <div>{{ userStore.permissions }}</div>

    <h3>鉴权组件（请对照代码查看）</h3>
    <div>
      <Auth value="admin" class="m-b-10">
        <el-tag>你有 admin 权限</el-tag>
        <template #denied>
          <el-tag type="danger">你没有 admin 权限</el-tag>
        </template>
      </Auth>
      <Auth value="editor" class="m-b-10">
        <el-tag>你有 editor 权限</el-tag>
        <template #denied>
          <el-tag type="danger">你没有 editor 权限</el-tag>
        </template>
      </Auth>
      <Auth :value="['admin', 'editor']" class="m-b-10">
        <el-tag>你有 admin 或 editor 权限</el-tag>
        <template #denied>
          <el-tag type="danger">你没有 admin 或 editor 权限</el-tag>
        </template>
      </Auth>
      <Auth :value="['admin', 'editor']" check-every>
        <el-tag>你有 admin 和 editor 权限</el-tag>
        <template #denied>
          <el-tag type="danger">你没有 admin 和 editor 权限</el-tag>
        </template>
      </Auth>
    </div>

    <h3>鉴权指令（请对照代码查看）</h3>
    <p v-auth="'admin'">如果你有 admin 权限则能看到这句话</p>
    <p v-auth="'editor'">如果你有 editor 权限则能看到这句话</p>
    <p v-auth="['admin', 'editor']">如果你有 admin 或 editor 权限则能看到这句话</p>
    <p v-auth.every="['admin', 'editor']">如果你同时有 admin 和 editor 权限才能看到这句话</p>

    <h3>鉴权函数（请对照代码查看）</h3>
    <el-row>
      <el-button-group style="display: block; margin-bottom: 10px">
        <el-button @click="checkAuth('admin')">检测 admin 权限</el-button>
        <el-button @click="checkAuth('editor')">检测 editor 权限</el-button>
      </el-button-group>
    </el-row>
    <el-row>
      <el-button-group>
        <el-button @click="checkAuthSome(['admin', 'editor'])">检测 admin 或 editor 权限</el-button>
        <el-button @click="checkAuthEvery(['admin', 'editor'])">检测 admin 和 editor 权限</el-button>
      </el-button-group>
    </el-row>
  </div>
</template>
