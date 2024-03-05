import { Navigate } from 'react-router-dom'

import { Role } from './model/UserContex.ts'
import { getAllRoles } from './model/UserContextHelper.ts'
import {NewPasswordSuccessPage} from "./pages/auth/NewPasswordSuccessPage.tsx";
import { NotFoundPage } from './pages/common/NotFoundPage.tsx'
import { RegistrationSuccessPage } from './pages/auth/RegistrationSuccessPage.tsx'

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
      element: <RegistrationSuccessPage />,
      isProtected: false,
      path: '/register-success',
    },
    {
      element: <NewPasswordSuccessPage />,
      isProtected: false,
      path: '/new-password-success',
    },
    {
      element: <Navigate to="/" />,
      isProtected: false,
      path: '*',
    },
  ]
}
