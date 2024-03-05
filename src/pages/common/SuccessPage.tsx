import styled from 'styled-components'
import okey from '../../assets/success.svg'
import { Variant } from '../../styles/ts/types.ts'
import { PlainText } from '../../components/text/Text.tsx'
import { ReactNode } from 'react'

export const PageContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin: 0;
  padding: 40px;
  width: 100vw;
  justify-content: center;
  height: calc(100vh - 60px);
`

export const Img = styled.img`
  height: 210px;
  width: 210px;
`

export interface SuccessPageProps {
  title: string
  children: ReactNode
}

export function SuccessPage(props: SuccessPageProps) {
  const { title, children } = props

  return (
    <PageContainer>
      <Img src={okey} />
      <PlainText
        config={{
          size: 48,
          text: title,
          variant: Variant.PRIMARY,
        }}
      />
      {children}
    </PageContainer>
  )
}
