import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import logo from '../../assets/logo.png'
import { Button } from '../../components/button/Button.tsx'
import { InputWithLabel } from '../../components/input/Input.tsx'
import { InputType } from '../../components/input/Input.type.ts'
import { PlainText } from '../../components/text/Text.tsx'
import { TextAlign } from '../../components/text/Text.types.ts'
import { Variant } from '../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../../utils/ElementControl.ts'
import { Container, Form, Logo } from './slyles/ResetPassword.styled.ts'

export default function ResetPasswordPage() {
  const { t } = useTranslation()
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
