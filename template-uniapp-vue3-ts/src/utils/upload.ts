import { network } from '@/config/index'
import { useUserStore } from '@/stores/user'

interface ResponseData {
  code: number
  message: string
  data: {
    path: string
  }
}

export const uploadFile = (filePath: string) => {
  return new Promise((resolve, reject) => {
    const userStore = useUserStore()
    uni.uploadFile({
      url: network.baseURL + '/upload',
      header: { Authorization: userStore.token || uni.getStorageSync('token') },
      name: 'file',
      filePath,
      success: result => {
        const { statusCode } = result
        // 处理http状态码非200
        if (statusCode !== 200) {
          const message = result.data || result.errMsg
          uni.hideLoading()
          uni.showModal({
            title: '温馨提示',
            content: '系统错误，请联系管理员：' + message,
            showCancel: false
          })
          return reject(message)
        }
        const data = JSON.parse(result.data) as ResponseData
        // 处理自定义响应状态码
        switch (data.code) {
          case 200:
            // 响应正常返回路径
            return resolve(data.data.path)
          case 401:
            // 处理token无效情况
            userStore.clear()
            uni.showToast({
              title: '请先登录',
              icon: 'error'
            })
            setTimeout(() => {
              uni.switchTab({ url: '/pages/mine/mine' })
            }, 500)
            break
          default:
            uni.hideLoading()
            uni.showModal({
              title: 'Error: ' + data.code,
              content: '系统错误，请联系管理员：' + data.message,
              showCancel: false
            })
        }
        return reject(data.message || 'Error')
      },
      fail: error => {
        // 处理接口调用失败
        uni.hideLoading()
        uni.showModal({
          title: '温馨提示',
          content: '系统错误，请联系管理员：' + error.errMsg,
          showCancel: false
        })
        return reject(error)
      }
    })
  }) as Promise<string>
}

export const uploadFiles = (filePaths: string[]) => {
  const promises = filePaths.map(filePath => uploadFile(filePath))
  return Promise.all(promises)
}
