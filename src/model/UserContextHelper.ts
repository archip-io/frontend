import { Role } from './UserContex.ts'

export function getAllRoles(): Role[] {
  return [Role.USER, Role.ADMIN]
}
