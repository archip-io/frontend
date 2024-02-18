import styled from 'styled-components'

import { Color } from '../../styles/ts/colors.ts'
import { Variant } from '../../styles/ts/types.ts'
import { InputUIConfig } from './Input.type.ts'

function getBackgroundColorByVariant(variant?: Variant): string {
  const defaultColor = Color.INPUT_BACKGROUND_PRIMARY

  const colorsMap: Map<Variant, string> = new Map([[Variant.PRIMARY, Color.INPUT_BACKGROUND_PRIMARY]])

  return variant ? colorsMap.get(variant) || defaultColor : defaultColor
}

export function getLabelVariantByVariant(variant?: Variant): Variant {
  const defaultVariant = Variant.PRIMARY
  const availableVariants: Set<Variant> = new Set([Variant.PRIMARY, Variant.SECONDARY])

  return variant && availableVariants.has(variant) ? variant : defaultVariant
}

export function getErrorVariantByVariant(variant?: Variant): Variant {
  const defaultVariant = Variant.SECONDARY
  const availableVariants: Set<Variant> = new Set([Variant.SECONDARY])

  return variant && availableVariants.has(variant) ? variant : defaultVariant
}

export const StyledInput = styled.input<{ config: InputUIConfig }>`
  position: relative;
  align-items: center;
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  justify-content: center;
  background-color: ${(props) => getBackgroundColorByVariant(props.config.variant)};
  color: black;
  font-size: ${(props) => `${props.config.inputSize}px`};
  line-height: ${(props) => `${props.config.inputSize}px`};
  font-weight: normal;
  word-wrap: break-word;
  border: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`

export const DivLine = styled.div<{ color: string }>`
  position: relative;
  align-items: center;
  display: flex;
  width: 100%;
  background-color: ${(props) => props.color};
  overflow-wrap: break-word;
`

export const FormDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  gap: 10px;
`

export const Img = styled.img`
  height: 60%;
  margin-right: 10px;
`
