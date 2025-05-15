import type { UserModel } from '@/types/user'
import request from '@/utils/request'

export const login = (model: UserModel) => request.post('/login', model)
