import { Navigate } from 'react-router-dom'

import { Role } from './model/UserContex.ts'
import { getAllRoles } from './model/UserContextHelper.ts'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { RegistrationSuccess } from './pages/RegistrationSuccess.tsx'
import {NewPasswordSuccess} from "./pages/NewPasswordSuccess.tsx";

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
      element: <RegistrationSuccess />,
      isProtected: false,
      path: '/register-success',
    },
    {
      element: <NewPasswordSuccess />,
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
