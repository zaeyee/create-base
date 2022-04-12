import { createService } from 'uni-io'
import { useUserStore } from '@/store/user'
import { network } from '@/config/index'

const service = createService({
  baseURL: network.baseURL,
  timeout: network.timeout
})

const userStore = useUserStore()

// 请求拦截
service.interceptors.request.use(config => {
  // 请求前，附加token到header上
  const token = userStore.token || uni.getStorageSync('token')
  if (token) {
    config.header['Authorization'] = token || ''
  }
  return config
})

// 响应拦截
service.interceptors.response.use(
  response => {
    // 响应成功处理
    const { data } = response
    // 自定义响应码处理
    switch (data.code) {
      case 200:
        // 响应正常返回响应数据
        return data
      case 401:
        // token无效处理
        userStore.logout()
        uni.showToast({
          title: '请先登录',
          icon: 'error'
        })
        break
      default:
        uni.hideLoading()
        uni.showModal({
          title: 'Error: ' + data.code,
          content: '系统错误，请联系管理员：' + data.message,
          showCancel: false
        })
    }
    return Promise.reject(data.message || 'Error')
  },
  error => {
    // 网络超时或http状态码非200处理
    const message = error.data || error.errMsg
    uni.hideLoading()
    uni.showModal({
      title: '温馨提示',
      content: '系统错误，请联系管理员：' + message,
      showCancel: false
    })
    return Promise.reject(message)
  }
)

export default service
