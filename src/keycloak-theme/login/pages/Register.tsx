import type { PageProps } from 'keycloakify/login/pages/PageProps'

import { useEffect, useState } from 'react'

import type { I18n } from '../i18n'
import type { KcContext } from '../kcContext'

import logo from '../../../assets/logo.png'
import { Button } from '../../../components/button/Button.tsx'
import { HeaderText, PlainText } from '../../../components/text/Text.tsx'
import { Variant } from '../../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../../../utils/Utils.ts'
import { ContentItem, DivLine, GridContainer, Logo, LogoItem } from './shared/Login.styled.ts'
import { UserProfileFormFields } from './shared/UserProfileForm.tsx'

export default function Register(props: PageProps<Extract<KcContext, { pageId: 'register-user-profile.ftl' }>, I18n>) {
  const { i18n, kcContext } = props
  const { msgStr } = i18n
  const { url } = kcContext
  const [isFormSubmittable, setIsFormSubmittable] = useState(false)

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
        <ContentItem action={url.loginAction} id={'ContentItem'} method="POST" style={{ gap: 10 }}>
          <DivLine style={{ justifyContent: 'flex-start', marginBottom: 10 }}>
            <HeaderText
              config={{
                bold: true,
                size: 44,
                text: msgStr('registerTitle'),
                variant: Variant.SECONDARY,
              }}
            />
          </DivLine>
          <UserProfileFormFields i18n={i18n} kcContext={kcContext} onIsFormSubmittableValueChange={setIsFormSubmittable} />
          <div style={{ marginBottom: 20, marginTop: 10, width: '100%' }}>
            <Button
              config={{
                disabled: !isFormSubmittable,
                fullWidth: true,
                size: 20,
                text: msgStr('doRegister'),
                variant: Variant.PRIMARY,
              }}
            />
          </div>
          <DivLine>
            <PlainText
              config={{
                size: 16,
                text: msgStr('haveAccount'),
                variant: Variant.SECONDARY,
              }}
            />
            <span>&nbsp;</span>
            <a href={url.loginUrl}>
              <PlainText
                config={{
                  size: 16,
                  text: msgStr('doLogIn'),
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
