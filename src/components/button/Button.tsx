import { StyledButton, StyledButtonText } from "./Button.styled.ts";
import {
  ButtonConfig,
  toButtonTextUIConfig,
  toButtonUIConfig,
} from "./Button.types.ts";

export function Button({ config }: { config?: ButtonConfig }) {
  return (
    <StyledButton
      config={toButtonUIConfig(config)}
      disabled={config?.disabled || false}
      onClick={config?.onClick}
    >
      <StyledButtonText config={toButtonTextUIConfig(config)}>
        {config?.text || ""}
      </StyledButtonText>
    </StyledButton>
  );
}
