import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import logo from '../../assets/logo.png'
import { Button } from '../../components/button/Button.tsx'
import { InputWithLabelAndError } from '../../components/input/Input.tsx'
import { InputType } from '../../components/input/Input.type.ts'
import { PlainText } from '../../components/text/Text.tsx'
import { TextAlign } from '../../components/text/Text.types.ts'
import { Variant } from '../../styles/ts/types.ts'
import { usePasswordConfirmValidation, usePasswordValidation } from '../../utils/DataValidation.ts'
import { manageElementJustifyContent } from '../../utils/ElementControl.ts'
import { Container, Form, Logo } from './slyles/ResetPassword.styled.ts'

export default function UpdatePasswordPage() {
  const { t } = useTranslation()
  const { password, passwordError, setPassword, validatePassword } = usePasswordValidation()
  const { passwordConfirm, passwordConfirmError, setPasswordConfirm, validatePasswordConfirm } = usePasswordConfirmValidation(password)

  // Включение/отключение кнопки в зависимости от заполнения полей
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)
  useEffect(() => {
    setIsLoginButtonDisabled(password.length === 0 || passwordConfirm.length === 0 || passwordError !== ' ' || passwordConfirmError !== ' ')
  }, [password, passwordConfirm, passwordError, passwordConfirmError])

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
        <Form action={'#'} id={'ContentItem'} method="POST">
          <Logo src={logo} />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              size: 16,
              text: t('resetPasswordText'),
              variant: Variant.PRIMARY,
            }}
          />
          <InputWithLabelAndError
            config={{
              error: passwordError,
              errorSize: 14,
              inputSize: 18,
              label: t('password'),
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
              label: t('passwordConfirm'),
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
              text: t('doContinue'),
              variant: Variant.PRIMARY,
            }}
          />
        </Form>
      </Container>
    </>
  )
}
