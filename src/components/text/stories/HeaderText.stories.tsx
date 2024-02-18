import { Variant } from '../../../styles/ts/types.ts'
import { HeaderText as Header } from '../Text.tsx'
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
  component: Header,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Text',
}

const Template = (config: TextConfig) => <Header config={config} />

export const HeaderText = Template.bind({})
// @ts-ignore
HeaderText.args = {
  align: TextAlign.CENTER,
  bold: false,
  size: 40,
  text: 'Header text',
  underlined: false,
  variant: Variant.PRIMARY,
}
