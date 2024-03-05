import styled from 'styled-components'
import { Variant } from '../../styles/ts/types.ts'
import { Button } from '../../components/button/Button.tsx'
import { SuccessPage } from '../common/SuccessPage.tsx'
import { useTranslation } from 'react-i18next'

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 40px;
  flex-direction: row;
`

export function NewPasswordSuccessPage() {
  const { t } = useTranslation()

  return (
    <SuccessPage title={t('newPasswordSuccess')}>
      <ButtonContainer>
        <Button
          config={{
            size: 22,
            text: t('backToMain'),
            variant: Variant.PRIMARY,
          }}
        />
      </ButtonContainer>
    </SuccessPage>
  )
}
