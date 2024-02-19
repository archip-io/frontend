import type { PageProps } from 'keycloakify/login/pages/PageProps'

import { useEffect, useState } from 'react'

import type { I18n } from '../i18n'
import type { KcContext } from '../kcContext'

import logo from '../../../assets/logo.png'
import { Button } from '../../../components/button/Button.tsx'
import { InputWithLabelAndError } from '../../../components/input/Input.tsx'
import { InputType } from '../../../components/input/Input.type.ts'
import { PlainText } from '../../../components/text/Text.tsx'
import { TextAlign } from '../../../components/text/Text.types.ts'
import { Variant } from '../../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../utils/Utils.ts'
import { Container, From, Logo } from './ResetPassword.styled.ts'

export default function UpdatePassword(
  props: PageProps<
    Extract<
      KcContext,
      {
        pageId: 'login-update-password.ftl'
      }
    >,
    I18n
  >
) {
  const { i18n, kcContext } = props
  const { msgStr } = i18n
  const { url } = kcContext
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordError, setPasswordError] = useState(' ')
  const [passwordConfirmError, setPasswordConfirmError] = useState(' ')

  // Включение/отключение кнопки в зависимости от заполнения полей
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)
  useEffect(() => {
    console.log(`${password.length === 0} || ${passwordConfirm.length === 0} || ${passwordError !== ' '} || ${passwordConfirmError !== ' '}`)
    setIsLoginButtonDisabled(password.length === 0 || passwordConfirm.length === 0 || passwordError !== ' ' || passwordConfirmError !== ' ')
  }, [password, passwordConfirm, passwordError, passwordConfirmError])

  // Контроль за размером и расположение формы (при маленькой высоте появляется скролл, иначе равняется по центру)
  useEffect(() => {
    const handleResize = () => manageElementJustifyContent('#ContentItem')
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Валидация полей ввода
  function validatePassword() {
    if (password.length === 0) {
      setPasswordError(' ')
      return
    }
    if (password.length < 8) {
      setPasswordError(msgStr('error-invalid-length-too-short', '8'))
      return
    }
    if (password.length > 64) {
      setPasswordError(msgStr('error-invalid-length-too-long', '64'))
      return
    }
    if (!password.match('^(?=.*[A-Z])(?=.*[\\W_])(?=.*[0-9])(?=.*[a-z]).+$')) {
      setPasswordError(msgStr('passwordPatternError'))
      return
    }
    setPasswordError(' ')
  }

  function validatePasswordConfirm() {
    if (passwordConfirm.length === 0) {
      setPasswordError(' ')
      return
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError(msgStr('invalidPasswordConfirmMessage'))
      return
    }

    setPasswordConfirmError(' ')
  }

  return (
    <>
      <Container>
        <From action={url.loginAction} id={'ContentItem'} method="POST">
          <Logo src={logo} />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              size: 16,
              text: msgStr('resetPasswordText'),
              variant: Variant.PRIMARY,
            }}
          />
          <InputWithLabelAndError
            config={{
              error: passwordError,
              errorSize: 14,
              inputSize: 18,
              label: msgStr('password'),
              labelSize: 16,
              name: 'password',
              onBlur: () => {
                validatePassword()
                validatePasswordConfirm()
              },
              onChange: (event) => setPassword(event.target.value),
              type: InputType.PASSWORD,
              value: password,
              variant: Variant.PRIMARY,
            }}
          />
          <InputWithLabelAndError
            config={{
              error: passwordConfirmError,
              errorSize: 14,
              inputSize: 18,
              label: msgStr('passwordConfirm'),
              labelSize: 16,
              name: 'password-confirm',
              onBlur: validatePasswordConfirm,
              onChange: (event) => setPasswordConfirm(event.target.value),
              type: InputType.PASSWORD,
              value: passwordConfirm,
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
        </From>
      </Container>
    </>
  )
}
