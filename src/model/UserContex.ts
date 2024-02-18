export type UserContext = {
  accessToken: string
  id: string
  refreshToken: string
  role: Role
  username: string
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
