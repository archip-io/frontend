import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { Button } from '../../components/button/Button.tsx'
import { HeaderText, PlainText } from '../../components/text/Text.tsx'
import { TextAlign } from '../../components/text/Text.types.ts'
import { Variant } from '../../styles/ts/types.ts'

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

export interface ErrorPageProps {
  action: any
  message: string
}

export default function ErrorPage(props: ErrorPageProps) {
  const { action, message } = props
  const { t } = useTranslation()

  return (
    <Container>
      <Content>
        <HeaderText
          config={{
            align: TextAlign.CENTER,
            bold: true,
            size: 32,
            text: t('errorTitle'),
            variant: Variant.SECONDARY,
          }}
        />
        <PlainText
          config={{
            align: TextAlign.CENTER,
            size: 22,
            text: message,
            variant: Variant.PRIMARY,
          }}
        />
        <Button
          config={{
            onClick: action,
            size: 16,
            text: t('backToMain'),
            variant: Variant.PRIMARY,
          }}
        />
      </Content>
    </Container>
  )
}
