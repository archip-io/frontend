import { Variant } from "../../../styles/ts/types.ts";
import { HeaderText } from "../Text.tsx";
import { TextConfig } from "../Text.types.ts";

export default {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: [Variant.PRIMARY, Variant.SECONDARY],
    },
  },
  component: HeaderText,
  parameters: {
    layout: "centered",
  },
  title: "Components/HeaderText",
};

const Template = (config: TextConfig) => <HeaderText config={config} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  bold: false,
  size: 40,
  text: "Header text",
  underlined: false,
  variant: Variant.PRIMARY,
};
