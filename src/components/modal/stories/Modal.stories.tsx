import { useState } from 'react'

import { Button } from '../../button/Button.tsx'
import { Modal } from '../Modal.tsx'
import { ModalConfig } from '../Modal.types.ts'

export default {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Modal',
}

const Template = (config: ModalConfig) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  config.onClose = () => setIsConfirmModalOpen(false)

  return (
    <>
      <Button
        config={{
          onClick: () => setIsConfirmModalOpen(true),
          size: 18,
          text: 'Show modal',
        }}
      />
      {isConfirmModalOpen && (
        <Modal config={config}>
          <Button
            config={{
              onClick: () => config.onClose(),
              size: 18,
              text: 'Close modal',
            }}
          />
        </Modal>
      )}
    </>
  )
}

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  onClose: undefined,
  timeout: undefined,
}
