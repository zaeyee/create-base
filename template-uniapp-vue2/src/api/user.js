import request from '@/utils/request'

// 用户登录
export const login = data => request.post('/login', data)
