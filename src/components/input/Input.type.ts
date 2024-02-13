import { Variant } from "../../styles/ts/types.ts";

export enum InputType {
  PASSWORD = "password",
  TEXT = "text",
}

export type InputUIConfig = {
  size: number;
  variant?: Variant;
};

export type InputConfig = {
  name?: string;
  onChange?: any;
  size: number;
  type: InputType;
  value?: string;
  variant?: Variant;
};

export type InputWithLabelConfig = {
  label: string;
  labelSize: number;
  name?: string;
  onChange?: any;
  size: number;
  type: InputType;
  value?: string;
  variant?: Variant;
};

export function toInputUIConfig(
  config: InputConfig | InputWithLabelConfig,
): InputUIConfig {
  return {
    size: config.size,
    variant: config.variant,
  };
}

export function toInputConfig(config: InputWithLabelConfig): InputConfig {
  return {
    name: config.name,
    onChange: config.onChange,
    size: config.size,
    type: config.type,
    value: config.value,
    variant: config.variant,
  };
}
