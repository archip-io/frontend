import { Variant } from "../../styles/ts/types.ts";

export type TextUIConfig = {
  bold?: boolean;
  size: number;
  underlined?: boolean;
  variant?: Variant;
};

export type TextConfig = {
  bold?: boolean;
  size: number;
  text: string;
  underlined?: boolean;
  variant?: Variant;
};

export function toTextUIConfig(config: TextConfig): TextUIConfig {
  return {
    bold: config.bold,
    size: config.size,
    underlined: config.underlined,
    variant: config.variant,
  };
}
