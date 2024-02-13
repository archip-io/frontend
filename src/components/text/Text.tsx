import { StyledHeaderText, StyledPlainText } from "./Text.styled.ts";
import { TextConfig, toTextUIConfig } from "./Text.types.ts";

export function PlainText({ config }: { config: TextConfig }) {
  return (
    <StyledPlainText config={toTextUIConfig(config)}>
      {config.text}
    </StyledPlainText>
  );
}

export function HeaderText({ config }: { config: TextConfig }) {
  return (
    <StyledHeaderText config={toTextUIConfig(config)}>
      {config.text}
    </StyledHeaderText>
  );
}
