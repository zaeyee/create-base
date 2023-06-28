import request from '@/utils/request'

// 用户登录
export const login = model => request.post('/login', model)
