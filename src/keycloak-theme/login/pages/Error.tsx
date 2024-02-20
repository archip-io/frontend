import type { PageProps } from 'keycloakify/login/pages/PageProps'

import styled from 'styled-components'

import type { I18n } from '../i18n'
import type { KcContext } from '../kcContext'

import { Button } from '../../../components/button/Button.tsx'
import { HeaderText, PlainText } from '../../../components/text/Text.tsx'
import { TextAlign } from '../../../components/text/Text.types.ts'
import { Variant } from '../../../styles/ts/types.ts'

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
  gap: 30px;
  overflow: auto;
`

export default function Error(props: PageProps<Extract<KcContext, { pageId: 'error.ftl' }>, I18n>) {
  const { i18n, kcContext } = props

  const { message, url } = kcContext

  const { msgStr } = i18n

  return (
    <Container>
      <Content>
        <HeaderText
          config={{
            align: TextAlign.CENTER,
            bold: true,
            size: 32,
            text: msgStr('errorTitle'),
            variant: Variant.SECONDARY,
          }}
        />
        <PlainText
          config={{
            align: TextAlign.CENTER,
            size: 22,
            text: message.summary,
            variant: Variant.PRIMARY,
          }}
        />
        <Button
          config={{
            onClick: () => {
              window.location.href = url.loginUrl
            },
            size: 16,
            text: msgStr('backToLogin'),
            variant: Variant.PRIMARY,
          }}
        />
      </Content>
    </Container>
  )
}
