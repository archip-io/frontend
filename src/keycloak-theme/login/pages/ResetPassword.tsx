import type { PageProps } from 'keycloakify/login/pages/PageProps'

import { useEffect, useState } from 'react'

import type { I18n } from '../i18n'
import type { KcContext } from '../kcContext'

import logo from '../../../assets/logo.png'
import { Button } from '../../../components/button/Button.tsx'
import { InputWithLabel } from '../../../components/input/Input.tsx'
import { InputType } from '../../../components/input/Input.type.ts'
import { PlainText } from '../../../components/text/Text.tsx'
import { TextAlign } from '../../../components/text/Text.types.ts'
import { Variant } from '../../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../utils/Utils.ts'
import { Container, Form, Logo } from './shared/ResetPassword.styled.ts'

export default function ResetPassword(
  props: PageProps<
    Extract<
      KcContext,
      {
        pageId: 'login-reset-password.ftl'
      }
    >,
    I18n
  >
) {
  const { i18n, kcContext } = props
  const { msgStr } = i18n
  const { url } = kcContext
  const [login, setLogin] = useState('')

  // Включение/отключение кнопки в зависимости от заполнения полей
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)
  useEffect(() => {
    setIsLoginButtonDisabled(login.length === 0)
  }, [login])

  // Контроль за размером и расположение формы (при маленькой высоте появляется скролл, иначе равняется по центру)
  useEffect(() => {
    const handleResize = () => manageElementJustifyContent('#ContentItem')
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Container>
        <Form action={url.loginAction} id={'ContentItem'} method="POST">
          <Logo src={logo} />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              size: 16,
              text: msgStr('resetPasswordText'),
              variant: Variant.PRIMARY,
            }}
          />
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
          <Button
            config={{
              disabled: isLoginButtonDisabled,
              fullWidth: true,
              size: 22,
              text: msgStr('doContinue'),
              variant: Variant.PRIMARY,
            }}
          />
        </Form>
      </Container>
    </>
  )
}
