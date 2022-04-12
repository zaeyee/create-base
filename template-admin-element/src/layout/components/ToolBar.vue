<template>
  <div class="tool-bar">
    <div class="tool-bar__item" @click="reload">
      <SvgIcon name="i-ep-refresh" :size="16" />
    </div>
    <div class="tool-bar__item">
      <el-badge :value="1" :max="99">
        <SvgIcon name="i-ep-bell" :size="16" />
      </el-badge>
    </div>
    <el-dropdown @command="userCommand">
      <div class="tool-bar__avatar">
        <el-avatar icon="i-ep-user" :src="profile.avatar" :size="28" />
        <span class="m-l-6">{{ profile.nickname || profile.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="space">
            <SvgIcon name="i-ep-user" :size="16" />
            <span>个人中心</span>
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <SvgIcon name="i-ep-switch-button" :size="16" />
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="tool-bar__item">
      <SvgIcon name="i-ep-more" :size="16" />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const reload = inject('reload')
const profile = userStore.profile

const userCommand = command => {
  switch (command) {
    case 'space':
      break
    // 退出登录
    case 'logout':
      ElMessageBox.confirm('是否确定退出登录？', '退出登录').then(() => {
        userStore.logout()
        router.push('/login?redirect' + route.fullPath)
      })
      break
  }
}
</script>

<style lang="scss">
.tool-bar {
  display: flex;
  align-items: center;
  padding: 0 10px;

  &__item {
    padding: 10px;
    font-size: 0;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;

    &:hover {
      background: #f5f5f5;
    }

    &:active {
      background: #eee;
    }
  }

  &__avatar {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    margin: 0 6px;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s;

    &:hover {
      background: #f5f5f5;
    }

    &:active {
      background: #eee;
    }
  }
}
</style>
