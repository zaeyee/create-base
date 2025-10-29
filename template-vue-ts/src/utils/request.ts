import axios from 'axios'
import { network } from '@/config/app'
import { useUserStore } from '@/stores/user'

const service = axios.create({
  baseURL: network.baseURL,
  timeout: network.timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    const token = userStore.token || localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { code, data, msg } = response.data
    const userStore = useUserStore()
    // 处理自定义响应状态码
    switch (code) {
      case 200:
        // 响应正常返回响应数据
        return data
      case 401:
        // 处理 token 无效情况
        userStore.clear()
        console.log('token无效')
        break
      default:
        // 处理服务器错误情况
        console.log('服务器错误')
        break
    }
    return Promise.reject(msg || 'Error')
  },
  error => {
    // 处理网络超时或 http 状态码非 2xx 情况
    return Promise.reject(error)
  }
)

export default service
