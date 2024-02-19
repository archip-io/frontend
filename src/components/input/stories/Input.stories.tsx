import { useState } from 'react'

import { Variant } from '../../../styles/ts/types.ts'
import { Input } from '../Input.tsx'
import { InputConfig, InputType } from '../Input.type.ts'

export default {
  argTypes: {
    type: {
      control: 'inline-radio',
      options: Object.values(InputType),
    },
    variant: {
      control: 'inline-radio',
      options: [Variant.PRIMARY],
    },
  },
  component: Input,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Input',
}

const Template = (config: InputConfig) => {
  const [value, setValue] = useState(config.value || '')
  if (config.onChange === undefined) {
    config.onChange = (event) => setValue(event.target.value)
  }

  return (
    <>
      <Input config={config} />
      <p>
        <b>Value:</b> {value}
      </p>
    </>
  )
}

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  inputSize: 18,
  name: 'input',
  onChange: undefined,
  type: InputType.TEXT,
  value: undefined,
  variant: Variant.PRIMARY,
}
