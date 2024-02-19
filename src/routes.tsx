import { Navigate } from 'react-router-dom'

import { Role } from './model/UserContex.ts'
import { getAllRoles } from './model/UserContextHelper.ts'
import { NotFoundPage } from './pages/NotFoundPage.tsx'

export type RouteType = {
  accessRoles?: Role[]
  children?: RouteType[]
  element: JSX.Element
  index?: boolean
  isProtected: boolean
  path: string
}

export function getRoutes(): RouteType[] {
  return [
    {
      accessRoles: getAllRoles(),
      children: [],
      element: <NotFoundPage />,
      isProtected: false,
      path: '/',
    },

    {
      element: <NotFoundPage />,
      isProtected: false,
      path: '/not-found',
    },
    {
      element: <Navigate to="/" />,
      isProtected: false,
      path: '*',
    },
  ]
}
