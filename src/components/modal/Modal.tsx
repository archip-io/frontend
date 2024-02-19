import { ReactNode, useEffect } from 'react'

import { ModalContent, ModalWrapper } from './Modal.styled.ts'
import { ModalConfig } from './Modal.types.ts'

export function Modal({ children, config }: { children: ReactNode; config: ModalConfig }) {
  if (config.timeout) {
    useEffect(() => {
      const timer = setTimeout(() => config.onClose(), config.timeout)
      return () => clearTimeout(timer)
    }, [])
  }

  return (
    <ModalWrapper onClick={() => config.onClose()}>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  )
}
