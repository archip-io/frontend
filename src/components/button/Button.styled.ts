import styled from 'styled-components'

import { Color } from '../../styles/ts/colors.ts'
import { Variant } from '../../styles/ts/types.ts'
import { ButtonTextUIConfig, ButtonUIConfig } from './Button.types.ts'

function getButtonColorByVariant(variant?: Variant): string {
    const defaultColor = Color.BUTTON_PRIMARY

    const colorMap: Map<Variant, Color> = new Map<Variant, Color>([
        [Variant.PRIMARY, Color.BUTTON_PRIMARY],
        [Variant.SECONDARY, Color.BUTTON_SECONDARY],
    ])

    return variant && colorMap.has(variant) ? colorMap.get(variant) || defaultColor : defaultColor
}

function getButtonAccentColorByVariant(variant?: Variant): string {
    const defaultColor = Color.BUTTON_ACCENT_PRIMARY

    const colorMap: Map<Variant, Color> = new Map<Variant, Color>([
        [Variant.PRIMARY, Color.BUTTON_ACCENT_PRIMARY],
        [Variant.SECONDARY, Color.BUTTON_ACCENT_SECONDARY],
    ])

    return variant && colorMap.has(variant) ? colorMap.get(variant) || defaultColor : defaultColor
}

function getButtonTextColorByVariant(variant?: Variant): string {
    const defaultColor = Color.BUTTON_TEXT_PRIMARY

    const colorMap: Map<Variant, Color> = new Map<Variant, Color>([[Variant.PRIMARY, Color.BUTTON_TEXT_PRIMARY]])

    return variant && colorMap.has(variant) ? colorMap.get(variant) || defaultColor : defaultColor
}

export const StyledButton = styled.button<{ config: ButtonUIConfig }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    height: fit-content;
    width: ${(props) => (props.config.fullWidth ? '100%' : 'fit-content')};
    border: none;
    border-radius: 25px;
    cursor: ${(props) => (props.config.disabled ? 'not-allowed' : 'pointer')};
    outline: none;
    background: ${(props) => getButtonColorByVariant(props.config.variant)};
    color: ${(props) => getButtonTextColorByVariant(props.config.variant)};
    overflow: hidden;
    box-sizing: border-box;
    flex-shrink: 0;

    &:focus {
        outline: none;
    }

    &:not([disabled]):hover {
        background: ${(props) => getButtonAccentColorByVariant(props.config.variant)};
    }
`

export const StyledButtonText = styled.div<{ config: ButtonTextUIConfig }>`
    position: relative;
    color: ${(props) => getButtonTextColorByVariant(props.config.variant)};
    font-size: ${(props) => `${props.config.size}px`};
    font-weight: normal;
    word-wrap: break-word;
    text-transform: uppercase;
`
