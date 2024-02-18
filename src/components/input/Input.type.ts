import React from 'react'

import { Variant } from '../../styles/ts/types.ts'

export enum InputType {
    PASSWORD = 'password',
    TEXT = 'text',
}

export type InputUIConfig = {
    inputSize: number
    variant?: Variant
}

export type InputConfig = {
    inputSize: number
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: InputType
    value?: string
    variant?: Variant
}

export type InputWithLabelConfig = {
    inputSize: number
    label: string
    labelSize: number
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: InputType
    value?: string
    variant?: Variant
}

export type InputWithLabelAndErrorConfig = {
    error: string
    errorSize: number
    inputSize: number
    label: string
    labelSize: number
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: InputType
    value?: string
    variant?: Variant
}
