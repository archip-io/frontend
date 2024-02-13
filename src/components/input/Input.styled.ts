import styled from "styled-components";

import { Color } from "../../styles/ts/colors.ts";
import { Variant } from "../../styles/ts/types.ts";
import { InputUIConfig } from "./Input.type.ts";

function getBackgroundColorByVariant(variant?: Variant): string {
  const defaultColor = Color.INPUT_BACKGROUND_PRIMARY;

  const colorsMap: Map<Variant, string> = new Map([
    [Variant.PRIMARY, Color.INPUT_BACKGROUND_PRIMARY],
  ]);

  return variant ? colorsMap.get(variant) || defaultColor : defaultColor;
}

export const StyledInput = styled.input<{ config: InputUIConfig }>`
  position: relative;
  align-items: center;
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  padding: 14px 20px 14px 14px;
  justify-content: center;
  background-color: ${(props) =>
    getBackgroundColorByVariant(props.config.variant)};
  color: black;
  font-size: ${(props) => `${props.config.size}px`};
  line-height: ${(props) => `${props.config.size}px`};
  font-weight: normal;
  word-wrap: break-word;
  border: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

export const DivLine = styled.div<{ config: InputUIConfig }>`
  position: relative;
  align-items: center;
  display: flex;
  width: 100%;
  background-color: ${(props) =>
    getBackgroundColorByVariant(props.config.variant)};
`;

export const FormDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  gap: 10px;
`;

export const Img = styled.img`
  height: 50%;
  margin-right: 20px;
`;
