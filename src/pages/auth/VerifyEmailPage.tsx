import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import letter from '../../assets/letter.svg'
import { HeaderText, PlainText } from '../../components/text/Text.tsx'
import { TextAlign } from '../../components/text/Text.types.ts'
import { Variant } from '../../styles/ts/types.ts'
import { manageElementJustifyContent } from '../../utils/ElementControl.ts'

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

export interface VerifyEmailProps {
  email: string
}

export default function VerifyEmailPage(props: VerifyEmailProps) {
  const { email } = props
  const { t } = useTranslation()

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
              text: t('emailVerifyTitle'),
              variant: Variant.SECONDARY,
            }}
          />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              size: 16,
              text: t('emailVerifyInstruction1'),
              variant: Variant.PRIMARY,
            }}
          />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              bold: true,
              size: 16,
              text: email,
              variant: Variant.PRIMARY,
            }}
          />
          <PlainText
            config={{
              align: TextAlign.CENTER,
              size: 16,
              text: t('emailVerifyInstruction2'),
              variant: Variant.PRIMARY,
            }}
          />
        </Content>
      </Container>
    </>
  )
}
