<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const thisYear = new Date().getFullYear()
const loading = ref(false)
const username = ref('admin')
const password = ref('123456')
const redirect = ref('')

onMounted(() => {
  redirect.value = route.query.redirect || '/'
})

// 登录
const login = async () => {
  if (!username.value || !password.value) {
    ElMessage.error('请输入帐号密码')
    return
  }
  try {
    loading.value = true
    await userStore.login({
      username: username.value,
      password: password.value
    })
    router.push(redirect.value)
    const hours = new Date().getHours()
    ElNotification.success({
      title: hours < 8 ? '早上好' : hours <= 11 ? '上午好' : hours <= 13 ? '中午好' : hours < 18 ? '下午好' : '晚上好',
      message: '欢迎登录',
      duration: 2000,
      offset: 80
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElMessageBox.alert(error)
  }
}
</script>

<template>
  <div v-loading.fullscreen.lock="loading" element-loading-background="rgba(0, 0, 0, 0.3)" class="login">
    <div class="login__main">
      <input v-model="username" type="text" class="login__input" placeholder="请输入账号" />
      <input v-model="password" type="password" class="login__input" placeholder="请输入密码" />
      <button class="login__button" @click="login">登录</button>
    </div>
    <div class="login__footer">
      Copyright &copy; 2018 - {{ thisYear }} <a href="http://www.ouzero.com" target="_blank">OUZERO</a>. All Rights
      Reserved.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #673ab7 50%, #6231b9 50%);

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__input {
    width: 280px;
    padding: 12px 20px;
    margin: 6px 0;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 25px;
    outline: none;
    transition: all 0.3s;

    &:focus {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &__button {
    width: 280px;
    height: 42px;
    margin-top: 10px;
    font-size: 16px;
    line-height: 42px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background: rgba(255, 127, 0, 0.8);
    border: none;
    border-radius: 25px;
    outline: none;
    box-shadow: 0 0 6px #ff7f00;
    transition: all 0.3s;

    &:hover {
      background: #ff7f00;
    }
  }

  &__footer {
    position: absolute;
    bottom: 25px;
    width: 100%;
    color: #ccc;
    text-align: center;

    a {
      color: #ddd;
      transition: all 0.3s;

      &:hover {
        color: #ff7f00;
      }
    }
  }
}
</style>
