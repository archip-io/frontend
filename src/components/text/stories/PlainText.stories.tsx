import { Variant } from "../../../styles/ts/types.ts";
import { PlainText } from "../Text.tsx";
import { TextConfig } from "../Text.types.ts";

export default {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: [Variant.PRIMARY, Variant.SECONDARY],
    },
  },
  component: PlainText,
  parameters: {
    layout: "centered",
  },
  title: "Components/PlainText",
};

const Template = (config: TextConfig) => <PlainText config={config} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  bold: false,
  size: 40,
  text: "Plain text",
  underlined: false,
  variant: Variant.PRIMARY,
};
