import Fallback from "keycloakify/login";
import { Suspense, lazy } from "react";

import type { KcContext } from "./kcContext";

import "./LoginApp.css";
import Template from "./Template";
import { useI18n } from "./i18n";

const Login = lazy(() => import("./pages/Login"));

export default function LoginApp(props: { kcContext: KcContext }) {
  const { kcContext } = props;

  const i18n = useI18n({ kcContext });

  if (i18n === null) {
    return null;
  }

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case "login.ftl": {
            return (
              <Login
                {...{ Template, i18n, kcContext }}
                doUseDefaultCss={false}
              />
            );
          }
          default: {
            return (
              <Fallback
                {...{ i18n, kcContext }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );
          }
        }
      })()}
    </Suspense>
  );
}
