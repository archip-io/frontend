import type { PageProps } from 'keycloakify/login/pages/PageProps'

import { useEffect, useState } from 'react'

import type { I18n } from '../i18n'
import type { KcContext } from '../kcContext'

import gmail from '../../../assets/gmail.svg'
import logo from '../../../assets/logo.png'
import { Button } from '../../../components/button/Button.tsx'
import { InputWithLabel } from '../../../components/input/Input.tsx'
import { InputType } from '../../../components/input/Input.type.ts'
import { HeaderText, PlainText } from '../../../components/text/Text.tsx'
import { Variant } from '../../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../utils/Utils.ts'
import { ContentItem, DivLine, GridContainer, Logo, LogoItem } from './Login.styled.ts'

export default function Login(props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>) {
  const { i18n, kcContext } = props
  const { msgStr } = i18n
  const { social, url } = kcContext
  const googleProvider = social.providers?.filter((p) => p.providerId === 'google').at(0)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  // Включение/отключение кнопки в зависимости от заполнения полей
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)
  useEffect(() => {
    setIsLoginButtonDisabled(login.length === 0 || password.length === 0)
  }, [login, password])

  // Контроль за размером и расположение формы (при маленькой высоте появляется скролл, иначе равняется по центру)
  useEffect(() => {
    const handleResize = () => manageElementJustifyContent('#ContentItem')
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <GridContainer>
        <LogoItem>
          <Logo src={logo} />
        </LogoItem>
        <ContentItem action={url.loginAction} id={'ContentItem'} method="POST">
          <DivLine style={{ justifyContent: 'flex-start' }}>
            <HeaderText
              config={{
                bold: true,
                size: 44,
                text: msgStr('loginTitle'),
                variant: Variant.SECONDARY,
              }}
            />
          </DivLine>
          <InputWithLabel
            config={{
              inputSize: 18,
              label: msgStr('usernameOrEmail'),
              labelSize: 16,
              name: 'username',
              onChange: (event) => setLogin(event.target.value),
              type: InputType.TEXT,
              value: login,
              variant: Variant.PRIMARY,
            }}
          />
          <InputWithLabel
            config={{
              inputSize: 18,
              label: msgStr('password'),
              labelSize: 16,
              name: 'password',
              onChange: (event) => setPassword(event.target.value),
              type: InputType.PASSWORD,
              value: password,
              variant: Variant.PRIMARY,
            }}
          />
          <a href={url.loginResetCredentialsUrl}>
            <PlainText
              config={{
                size: 16,
                text: msgStr('doForgotPassword'),
                variant: Variant.SECONDARY,
              }}
            />
          </a>
          <Button
            config={{
              disabled: isLoginButtonDisabled,
              fullWidth: true,
              size: 22,
              text: msgStr('doLogIn'),
              variant: Variant.PRIMARY,
            }}
          />
          {googleProvider !== undefined && (
            <>
              <PlainText
                config={{
                  size: 16,
                  text: msgStr('or'),
                  variant: Variant.SECONDARY,
                }}
              />
              <a href={googleProvider.loginUrl}>
                <DivLine style={{ gap: '15px' }}>
                  <img alt={'GMail'} height={'30px'} src={gmail} />
                  <PlainText
                    config={{
                      size: 16,
                      text: msgStr('gmailLogin'),
                      variant: Variant.PRIMARY,
                    }}
                  />
                </DivLine>
              </a>
            </>
          )}
          <DivLine>
            <PlainText
              config={{
                size: 16,
                text: msgStr('noAccount'),
                variant: Variant.SECONDARY,
              }}
            />
            <span>&nbsp;</span>
            <a href={url.registrationUrl}>
              <PlainText
                config={{
                  size: 16,
                  text: msgStr('createAccount'),
                  underlined: true,
                  variant: Variant.SECONDARY,
                }}
              />
            </a>
          </DivLine>
        </ContentItem>
      </GridContainer>
    </>
  )
}
