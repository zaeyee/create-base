export interface UserModel {
  username: string
  password: string
}

export interface UserRow {
  _id: string
  username: string
  nickname: string
  createdAt: string
  updatedAt: string
}

export interface LoginResponse {
  token: string
  profile: UserRow
}
