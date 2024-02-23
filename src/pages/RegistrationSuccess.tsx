import styled from 'styled-components'
import okey from '../assets/success.svg'
import { Variant } from '../styles/ts/types.ts'
import { PlainText } from '../components/text/Text.tsx'
import { Button } from '../components/button/Button.tsx'

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

export function RegistrationSuccess() {
  return (
    <PageContainer>
      <Img src={okey} />
      <PlainText
        config={{
          size: 48,
          text: 'Регистрация прошла успешно',
          variant: Variant.PRIMARY,
        }}
      />
      <Button
        config={{
          size: 22,
          text: 'Вернуться на окно входа',
          variant: Variant.PRIMARY,
        }}
      />
    </PageContainer>
  )
}
