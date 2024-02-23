import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import logo from '../../assets/logo.png'
import { Button } from '../../components/button/Button.tsx'
import { InputWithLabelAndError } from '../../components/input/Input.tsx'
import { InputType } from '../../components/input/Input.type.ts'
import { HeaderText, PlainText } from '../../components/text/Text.tsx'
import { Variant } from '../../styles/ts/types.ts'
import { useEmailValidation, usePasswordConfirmValidation, usePasswordValidation, useUsernameValidation } from '../../utils/DataValidation.ts'
import { manageElementJustifyContent } from '../../utils/ElementControl.ts'
import { ContentItem, DivLine, GridContainer, Logo, LogoItem } from './slyles/Login.styled.ts'

export default function RegisterPage() {
  const { t } = useTranslation()
  const { setUsername, username, usernameError, validateUsername } = useUsernameValidation()
  const { email, emailError, setEmail, validateEmail } = useEmailValidation()
  const { password, passwordError, setPassword, validatePassword } = usePasswordValidation()
  const { passwordConfirm, passwordConfirmError, setPasswordConfirm, validatePasswordConfirm } = usePasswordConfirmValidation(password)

  // Включение/отключение кнопки в зависимости от заполнения полей
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(false)
  useEffect(() => {
    setIsRegisterButtonDisabled(password.length === 0 || passwordConfirm.length === 0 || passwordError !== ' ' || passwordConfirmError !== ' ')
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
      <GridContainer>
        <ContentItem action={'#'} id={'ContentItem'} method="POST" style={{ gap: 10 }}>
          <DivLine style={{ justifyContent: 'flex-start', marginBottom: 10 }}>
            <HeaderText
              config={{
                bold: true,
                size: 44,
                text: t('registerTitle'),
                variant: Variant.SECONDARY,
              }}
            />
          </DivLine>
          <InputWithLabelAndError
            config={{
              error: usernameError,
              errorSize: 14,
              inputSize: 18,
              label: t('username'),
              labelSize: 16,
              name: 'username',
              onBlur: validateUsername,
              onChange: (event) => setUsername(event.target.value),
              type: InputType.TEXT,
              value: username,
              variant: Variant.PRIMARY,
            }}
          />
          <InputWithLabelAndError
            config={{
              error: emailError,
              errorSize: 14,
              inputSize: 18,
              label: t('email'),
              labelSize: 16,
              name: 'email',
              onBlur: validateEmail,
              onChange: (event) => setEmail(event.target.value),
              type: InputType.TEXT,
              value: email,
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
          <div style={{ marginBottom: 20, marginTop: 10, width: '100%' }}>
            <Button
              config={{
                disabled: isRegisterButtonDisabled,
                fullWidth: true,
                size: 20,
                text: t('doRegister'),
                variant: Variant.PRIMARY,
              }}
            />
          </div>
          <DivLine>
            <PlainText
              config={{
                size: 16,
                text: t('haveAccount'),
                variant: Variant.SECONDARY,
              }}
            />
            <span>&nbsp;</span>
            <a href={'#'}>
              <PlainText
                config={{
                  size: 16,
                  text: t('doLogIn'),
                  underlined: true,
                  variant: Variant.SECONDARY,
                }}
              />
            </a>
          </DivLine>
        </ContentItem>
        <LogoItem>
          <Logo src={logo} />
        </LogoItem>
      </GridContainer>
    </>
  )
}
