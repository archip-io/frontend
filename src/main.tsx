import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./AppRouter.tsx";
import { kcContext as kcLoginThemeContext } from "./keycloak-theme/login/kcContext";

const LoginApp = lazy(() => import("./keycloak-theme/login/LoginApp.tsx"));
const App = lazy(() => import("./app/App"));

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <Suspense>
      {(() => {
        if (kcLoginThemeContext !== undefined) {
          return <LoginApp kcContext={kcLoginThemeContext} />;
        }
        return <App />;
      })()}
    </Suspense>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
);
