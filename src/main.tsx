import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './AppRouter.tsx'
import LoginApp from './keycloak-theme/login/LoginApp.tsx'
import { kcContext as kcLoginThemeContext } from './keycloak-theme/login/kcContext'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <Suspense>
      {kcLoginThemeContext === undefined ? (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      ) : (
        <LoginApp kcContext={kcLoginThemeContext} />
      )}
    </Suspense>
  </StrictMode>
)
