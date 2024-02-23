import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import logo from '../../assets/logo.png'
import { Button } from '../../components/button/Button.tsx'
import { InputWithLabel } from '../../components/input/Input.tsx'
import { InputType } from '../../components/input/Input.type.ts'
import { HeaderText, PlainText } from '../../components/text/Text.tsx'
import { Variant } from '../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../../utils/ElementControl.ts'
import { ContentItem, DivLine, GridContainer, Logo, LogoItem } from './slyles/Login.styled.ts'

export default function LoginPage() {
  const { t } = useTranslation()
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
        <ContentItem action={'#'} id={'ContentItem'} method="POST">
          <DivLine style={{ justifyContent: 'flex-start' }}>
            <HeaderText
              config={{
                bold: true,
                size: 44,
                text: t('loginTitle'),
                variant: Variant.SECONDARY,
              }}
            />
          </DivLine>
          <InputWithLabel
            config={{
              inputSize: 18,
              label: t('usernameOrEmail'),
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
              label: t('password'),
              labelSize: 16,
              name: 'password',
              onChange: (event) => setPassword(event.target.value),
              type: InputType.PASSWORD,
              value: password,
              variant: Variant.PRIMARY,
            }}
          />
          <a href={'#'}>
            <PlainText
              config={{
                size: 16,
                text: t('doForgotPassword'),
                variant: Variant.SECONDARY,
              }}
            />
          </a>
          <Button
            config={{
              disabled: isLoginButtonDisabled,
              fullWidth: true,
              size: 22,
              text: t('doLogIn'),
              variant: Variant.PRIMARY,
            }}
          />
          <DivLine>
            <PlainText
              config={{
                size: 16,
                text: t('noAccount'),
                variant: Variant.SECONDARY,
              }}
            />
            <span>&nbsp;</span>
            <a href={'#'}>
              <PlainText
                config={{
                  size: 16,
                  text: t('doCreateAccount'),
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
