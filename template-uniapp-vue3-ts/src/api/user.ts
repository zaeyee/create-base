import type { UserModel } from '@/types/user'
import request from '@/utils/request'

// 用户登录
export const login = (model: UserModel) => request.post('/login', model)
