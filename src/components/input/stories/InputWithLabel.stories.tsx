import { useState } from "react";

import { Variant } from "../../../styles/ts/types.ts";
import { InputWithLabel } from "../Input.tsx";
import { InputType, InputWithLabelConfig } from "../Input.type.ts";

export default {
  argTypes: {
    type: {
      control: "inline-radio",
      options: Object.values(InputType),
    },
    variant: {
      control: "inline-radio",
      options: [Variant.PRIMARY, Variant.SECONDARY],
    },
  },
  component: InputWithLabel,
  parameters: {
    layout: "centered",
  },
  title: "Components/InputWithLabel",
};

const Template = (config: InputWithLabelConfig) => {
  const [value, setValue] = useState(config.value || "");
  if (config.onChange === undefined) {
    config.onChange = (event) => setValue(event.target.value);
  }

  return (
    <>
      <InputWithLabel config={config} />
      <p>
        <b>Value:</b> {value}
      </p>
    </>
  );
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  id: "InputWithLabel",
  label: "Label:",
  labelSize: 18,
  onChange: undefined,
  size: 24,
  type: InputType.TEXT,
  value: undefined,
  variant: Variant.PRIMARY,
};
