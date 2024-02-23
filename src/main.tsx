import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'

import { Router } from './AppRouter.tsx'
import './i18n'
import './styles/css/index.css'
import { Color } from './styles/ts/colors.ts'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100%' }}>
          <PropagateLoader color={Color.BUTTON_PRIMARY} />
        </div>
      }
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
)
