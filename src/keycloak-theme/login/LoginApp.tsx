import Fallback from 'keycloakify/login'
import { Suspense, lazy } from 'react'

import type { KcContext } from './kcContext'

import './LoginApp.css'
import Template from './Template'
import { useI18n } from './i18n'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const UpdatePassword = lazy(() => import('./pages/UpdatePassword'))
const VerifyEmail = lazy(() => import('./pages/VerifyEmail'))

export default function LoginApp(props: { kcContext: KcContext }) {
    const { kcContext } = props

    const i18n = useI18n({ kcContext })

    if (i18n === null) {
        return null
    }

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case 'login.ftl': {
                        return <Login {...{ Template, i18n, kcContext }} doUseDefaultCss={false} />
                    }
                    case 'register-user-profile.ftl': {
                        return <Register {...{ Template, i18n, kcContext }} doUseDefaultCss={false} />
                    }
                    case 'login-reset-password.ftl': {
                        return <ResetPassword {...{ Template, i18n, kcContext }} doUseDefaultCss={false} />
                    }
                    case 'login-update-password.ftl': {
                        return <UpdatePassword {...{ Template, i18n, kcContext }} doUseDefaultCss={false} />
                    }
                    case 'login-verify-email.ftl': {
                        return <VerifyEmail {...{ Template, i18n, kcContext }} doUseDefaultCss={false} />
                    }
                    default: {
                        return <Fallback {...{ i18n, kcContext }} Template={Template} doUseDefaultCss={true} />
                    }
                }
            })()}
        </Suspense>
    )
}
