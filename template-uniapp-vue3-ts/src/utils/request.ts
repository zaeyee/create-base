/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { createService } from 'uni-io'
import { useUserStore } from '@/stores/user'
import { network } from '@/config'

const service = createService({
  baseURL: network.baseURL,
  timeout: network.timeout
})

// 请求拦截
service.interceptors.request.use(config => {
  // 请求前，附加token到header上
  const userStore = useUserStore()
  const token = userStore.token || uni.getStorageSync('token')
  if (token) {
    config.header.Authorization = token
  }
  return config
})

// 响应拦截
service.interceptors.response.use(
  // 处理响应成功情况
  response => {
    uni.hideLoading()
    const { data } = response
    const userStore = useUserStore()
    // 处理自定义响应状态码
    switch (data.code) {
      // 响应正常返回响应数据
      case 200:
        return data.data
      // 处理token无效情况
      case 401:
        userStore.clear()
        uni.showToast({ title: '请先登录', icon: 'error' })
        setTimeout(() => {
          uni.reLaunch({ url: '/pages/login/login' })
        }, 500)
        break
      default:
        uni.showModal({
          title: 'Error: ' + data.code,
          content: '请联系管理员：' + data.message,
          showCancel: false
        })
    }
    return Promise.reject(data.message || 'Error')
  },
  // 处理网络超时或http状态码非200情况
  error => {
    uni.hideLoading()
    const message = error.data || error.errMsg
    uni.showModal({
      title: '系统错误',
      content: '请联系管理员：' + message,
      showCancel: false
    })
    return Promise.reject(message)
  }
)

export default service
