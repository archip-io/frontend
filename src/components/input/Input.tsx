import { useState } from "react";

import eyeSvg from "../../assets/eye.svg";
import eyeCloseSvg from "../../assets/eye-close.svg";
import { PlainText } from "../text/Text.tsx";
import { DivLine, FormDiv, Img, StyledInput } from "./Input.styled.ts";
import {
  InputConfig,
  InputType,
  InputWithLabelConfig,
  toInputConfig,
  toInputUIConfig,
} from "./Input.type.ts";

export function Input({ config }: { config: InputConfig }) {
  const [changedType, setChangedType] = useState(config.type);
  const handleChangeType = () =>
    setChangedType(
      changedType === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD,
    );

  return (
    <DivLine config={toInputUIConfig(config)}>
      <StyledInput
        config={toInputUIConfig(config)}
        name={config.name}
        onChange={config.onChange}
        type={changedType}
        value={config.value}
      />
      {config.type === InputType.PASSWORD && (
        <Img
          onClick={handleChangeType}
          src={changedType === InputType.PASSWORD ? eyeSvg : eyeCloseSvg}
        />
      )}
    </DivLine>
  );
}

export function InputWithLabel({ config }: { config: InputWithLabelConfig }) {
  return (
    <FormDiv>
      <PlainText
        config={{
          size: config.size,
          text: config.label,
          variant: config.variant,
        }}
      />
      <Input config={toInputConfig(config)} />
    </FormDiv>
  );
}
