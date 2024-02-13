import { Variant } from "../../styles/ts/types.ts";

export type ButtonUIConfig = {
  fullWidth?: boolean;
  variant?: Variant;
};

export type ButtonTextUIConfig = {
  size?: number;
  variant?: Variant;
};

export type ButtonConfig = {
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: any;
  size?: number;
  text?: string;
  variant?: Variant;
};

export function toButtonUIConfig(config?: ButtonConfig): ButtonUIConfig {
  return {
    fullWidth: config?.fullWidth,
    variant: config?.variant,
  };
}

export function toButtonTextUIConfig(
  config?: ButtonConfig,
): ButtonTextUIConfig {
  return {
    size: config?.size,
    variant: config?.variant,
  };
}
