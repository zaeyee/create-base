import request from '@/utils/request'

// 用户登录
export const login = (data: unknown) => request.post('/login', data)
