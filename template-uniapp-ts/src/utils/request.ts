import uniAjax from 'uni-ajax'
import { network } from '@/config/app'
import { useUserStore } from '@/stores/user'

declare module 'uni-ajax' {
  interface CustomResponse<T> {
    code: number
    msg: string
    data: T
  }
}

const service = uniAjax.create({
  baseURL: network.baseURL,
  timeout: network.timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    const token = userStore.token
    if (token) {
      config.header.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  // 处理响应成功情况
  response => {
    const { code, message, data } = response.data
    const userStore = useUserStore()
    // 处理自定义响应状态码
    switch (code) {
      // 响应正常返回响应数据
      case 200:
        return data
      // 处理token无效情况
      case 401:
        uni.showToast({ title: '请先登录', icon: 'error' })
        userStore.clear()
        setTimeout(() => {
          uni.reLaunch({ url: '/pages/index' })
        }, 500)
        break
      default:
        uni.hideLoading()
        uni.showModal({
          title: 'Error: ' + (code || 'Unknown'),
          content: message,
          showCancel: false
        })
    }
    return Promise.reject(message || 'Response Error')
  },
  // 处理网络超时或http状态码非2xx情况
  error => {
    const { statusCode, errMsg } = error
    uni.hideLoading()
    uni.showModal({
      title: 'Error: ' + (statusCode || 'Unknown'),
      content: errMsg,
      showCancel: false
    })
    return Promise.reject(errMsg || 'Network Error')
  }
)

export default service
