import { USER_STATUS } from '@/utils/enums'

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS]

export interface UserModel {
  username: string
  password: string
}

export interface UserRow {
  _id: string
  username: string
  nickname: string
  status: UserStatus
  createdAt: string
  updatedAt: string
}

export interface LoginResponse {
  token: string
  profile: UserRow
}
