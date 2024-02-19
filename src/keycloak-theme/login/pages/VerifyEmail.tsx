import type { PageProps } from 'keycloakify/login/pages/PageProps'

import { useEffect } from 'react'
import styled from 'styled-components'

import type { I18n } from '../i18n'
import type { KcContext } from '../kcContext'

import letter from '../../../assets/letter.svg'
import { HeaderText, PlainText } from '../../../components/text/Text.tsx'
import { TextAlign } from '../../../components/text/Text.types.ts'
import { Variant } from '../../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../utils/Utils.ts'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  padding: 50px;
  box-sizing: border-box;
  column-gap: 50px;
  overflow: auto;
`
const Content = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  min-width: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  overflow: auto;
`
const Logo = styled.img`
  width: 30%;
  object-fit: cover;
`
const DivLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
`

export default function VerifyEmail(
  props: PageProps<
    Extract<
      KcContext,
      {
        pageId: 'login-verify-email.ftl'
      }
    >,
    I18n
  >
) {
  const { i18n, kcContext } = props
  const { msgStr } = i18n
  const { url, user } = kcContext

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
        <Content>
          <Logo src={letter} />
          <HeaderText
            config={{
              align: TextAlign.CENTER,
              bold: true,
              size: 28,
              text: msgStr('emailVerifyTitle'),
              variant: Variant.SECONDARY,
            }}
          />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              size: 16,
              text: msgStr('emailVerifyInstruction1'),
              variant: Variant.PRIMARY,
            }}
          />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              bold: true,
              size: 16,
              text: user ? user.email : ' ',
              variant: Variant.PRIMARY,
            }}
          />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              size: 16,
              text: msgStr('emailVerifyInstruction2'),
              variant: Variant.PRIMARY,
            }}
          />
          <DivLine>
            <a href={url.loginUrl}>
              <PlainText
                config={{
                  size: 16,
                  text: msgStr('doClickHere'),
                  underlined: true,
                  variant: Variant.PRIMARY,
                }}
              />
            </a>
            <span>,&nbsp;</span>
            <PlainText
              config={{
                size: 16,
                text: msgStr('emailVerifyInstruction3'),
                variant: Variant.PRIMARY,
              }}
            />
          </DivLine>
        </Content>
      </Container>
    </>
  )
}
