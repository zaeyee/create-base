import axios from 'axios'
import config from '@/config'
import { useUserStore } from '@/stores/user'

const service = axios.create({
  baseURL: config.network.baseURL,
  timeout: config.network.timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 请求前，附加token到headers上
    const userStore = useUserStore()
    const token = userStore.token || localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token || ''
    }
    return config
  },
  error => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { data } = response
    const userStore = useUserStore()
    // 处理自定义响应状态码
    switch (data.code) {
      case 200:
        // 响应正常返回响应数据
        return data
      case 401:
        // 处理token无效情况
        userStore.logout()
        console.log('token无效')
        break
      case 500:
        // 处理服务器错误情况
        console.log('服务器错误')
        break
    }
    return Promise.reject(data.message || 'Error')
  },
  error => {
    // 处理网络超时或http状态码非200
    return Promise.reject(error)
  }
)

export default service
