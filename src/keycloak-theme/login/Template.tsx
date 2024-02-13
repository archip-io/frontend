// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import { type TemplateProps } from "keycloakify/login/TemplateProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";

import type { I18n } from "./i18n";
import type { KcContext } from "./kcContext";

export default function Template(props: TemplateProps<KcContext, I18n>) {
  const { classes, doUseDefaultCss, kcContext } = props;
  const { getClassName } = useGetClassName({ classes, doUseDefaultCss });
  const { url } = kcContext;
  const { isReady } = usePrepareTemplate({
    bodyClassName: getClassName("kcBodyClass"),
    doFetchDefaultThemeResources: doUseDefaultCss,
    htmlClassName: getClassName("kcHtmlClass"),
    styles: [
      `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
      `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
      `${url.resourcesCommonPath}/lib/zocial/zocial.css`,
      `${url.resourcesPath}/css/login.css`,
    ],
  });

  if (!isReady) {
    return null;
  }

  return <div></div>;
}
