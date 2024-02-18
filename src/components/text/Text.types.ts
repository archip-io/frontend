import { Variant } from '../../styles/ts/types.ts'

export enum TextAlign {
  CENTER = 'center',
  LEFT = 'left',
}

export type TextUIConfig = {
  align?: TextAlign
  bold?: boolean
  size: number
  underlined?: boolean
  variant?: Variant
}

export type TextConfig = {
  align?: TextAlign
  bold?: boolean
  size: number
  text: string
  underlined?: boolean
  variant?: Variant
}
