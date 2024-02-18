import { useState } from 'react'

import { Variant } from '../../../styles/ts/types.ts'
import { InputWithLabelAndError } from '../Input.tsx'
import { InputType, InputWithLabelAndErrorConfig } from '../Input.type.ts'

export default {
    argTypes: {
        type: {
            control: 'inline-radio',
            options: Object.values(InputType),
        },
        variant: {
            control: 'inline-radio',
            options: [Variant.PRIMARY, Variant.SECONDARY],
        },
    },
    component: InputWithLabelAndError,
    parameters: {
        layout: 'centered',
    },
    title: 'Components/Input',
}

const Template = (config: InputWithLabelAndErrorConfig) => {
    const [value, setValue] = useState(config.value || '')
    if (config.onChange === undefined) {
        config.onChange = (event) => setValue(event.target.value)
    }

    return (
        <>
            <InputWithLabelAndError config={config} />
            <br />
            <p>
                <b>Value:</b> {value}
            </p>
        </>
    )
}

export const WithLabelAndError = Template.bind({})
// @ts-ignore
WithLabelAndError.args = {
    error: 'Error',
    errorSize: 14,
    inputSize: 24,
    label: 'Label:',
    labelSize: 18,
    name: 'InputWithLabelAndError',
    onChange: undefined,
    type: InputType.TEXT,
    value: undefined,
    variant: Variant.PRIMARY,
}
