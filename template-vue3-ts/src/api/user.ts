import type { UserModel, LoginResponse } from '@/types/user'
import request from '@/utils/request'

export const login = (data: UserModel): Promise<LoginResponse> => request.post('/login', data)
