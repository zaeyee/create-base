import request from '@/utils/request'

// 用户登录
export const login = data => request.post('/login', data)
// 获取用户信息
export const getInfo = params => request.get('/getInfo', params)
