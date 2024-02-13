import type { PageProps } from "keycloakify/login/pages/PageProps";

import { useConstCallback } from "powerhooks";
import { FormEventHandler, useState } from "react";

import type { I18n } from "../i18n";
import type { KcContext } from "../kcContext";

import gmail from "../../../assets/gmail.svg";
import logo from "../../../assets/logo.png";
import { Button } from "../../../components/button/Button.tsx";
import { InputWithLabel } from "../../../components/input/Input.tsx";
import { InputType } from "../../../components/input/Input.type.ts";
import { HeaderText, PlainText } from "../../../components/text/Text.tsx";
import { Variant } from "../../../styles/ts/types.ts";
import {
  ContentItem,
  DivLine,
  GridContainer,
  Logo,
  LogoItem,
} from "./Login.styled.ts";

export default function Login(
  props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>,
) {
  const { i18n, kcContext } = props;
  const { msgStr } = i18n;
  const { social, url } = kcContext;
  const googleProvider = social.providers
    ?.filter((p) => p.providerId === "google")
    .at(0);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);
  const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();

      setIsLoginButtonDisabled(true);

      const formElement = event.target as HTMLFormElement;
      formElement.submit();
    },
  );

  return (
    <>
      <GridContainer>
        <LogoItem>
          <Logo src={logo} />
        </LogoItem>
        <ContentItem action={url.loginAction} method="POST" onSubmit={onSubmit}>
          <DivLine style={{ justifyContent: "flex-start" }}>
            <HeaderText
              config={{
                bold: true,
                size: 44,
                text: msgStr("loginTitle"),
                variant: Variant.SECONDARY,
              }}
            />
          </DivLine>
          <InputWithLabel
            config={{
              label: msgStr("usernameOrEmail"),
              labelSize: 16,
              name: "username",
              onChange: (event) => setLogin(event.target.value),
              size: 20,
              type: InputType.TEXT,
              value: login,
              variant: Variant.PRIMARY,
            }}
          />
          <InputWithLabel
            config={{
              label: msgStr("password"),
              labelSize: 16,
              name: "password",
              onChange: (event) => setPassword(event.target.value),
              size: 20,
              type: InputType.PASSWORD,
              value: password,
              variant: Variant.PRIMARY,
            }}
          />
          <a href={url.loginResetCredentialsUrl}>
            <PlainText
              config={{
                size: 16,
                text: msgStr("doForgotPassword"),
                variant: Variant.SECONDARY,
              }}
            />
          </a>
          <Button
            config={{
              disabled: isLoginButtonDisabled,
              fullWidth: true,
              size: 24,
              text: msgStr("doLogIn"),
              variant: Variant.PRIMARY,
            }}
          />
          {googleProvider !== undefined && (
            <>
              <PlainText
                config={{
                  size: 16,
                  text: msgStr("or"),
                  variant: Variant.SECONDARY,
                }}
              />
              <a href={googleProvider.loginUrl}>
                <DivLine style={{ gap: "15px", justifyContent: "center" }}>
                  <img alt={"GMail"} height={"30px"} src={gmail} />
                  <PlainText
                    config={{
                      size: 16,
                      text: msgStr("gmailLogin"),
                      variant: Variant.PRIMARY,
                    }}
                  />
                </DivLine>
              </a>
            </>
          )}
          <DivLine style={{ gap: "5px", justifyContent: "center" }}>
            <PlainText
              config={{
                size: 16,
                text: msgStr("noAccount"),
                variant: Variant.SECONDARY,
              }}
            />
            <a href={url.registrationUrl}>
              <PlainText
                config={{
                  size: 16,
                  text: msgStr("createAccount"),
                  underlined: true,
                  variant: Variant.SECONDARY,
                }}
              />
            </a>
          </DivLine>
        </ContentItem>
      </GridContainer>
    </>
  );
}
