import { Variant } from '../../../styles/ts/types.ts'
import { PlainText as Plain } from '../Text.tsx'
import { TextAlign, TextConfig } from '../Text.types.ts'

export default {
  argTypes: {
    align: {
      control: 'inline-radio',
      options: Object.values(TextAlign),
    },
    variant: {
      control: 'inline-radio',
      options: [Variant.PRIMARY, Variant.SECONDARY],
    },
  },
  component: Plain,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Text',
}

const Template = (config: TextConfig) => <Plain config={config} />

export const PlainText = Template.bind({})
// @ts-ignore
PlainText.args = {
  align: TextAlign.CENTER,
  bold: false,
  size: 40,
  text: 'Plain text',
  underlined: false,
  variant: Variant.PRIMARY,
}
