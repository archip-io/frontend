import { useState } from 'react'

import eyeSvg from '../../assets/eye.svg'
import eyeCloseSvg from '../../assets/eye-close.svg'
import { Color } from '../../styles/ts/colors.ts'
import { PlainText } from '../text/Text.tsx'
import { DivLine, FormDiv, Img, StyledInput, getErrorVariantByVariant, getLabelVariantByVariant } from './Input.styled.ts'
import { InputConfig, InputType, InputWithLabelAndErrorConfig, InputWithLabelConfig } from './Input.type.ts'

export function Input({ config }: { config: InputConfig }) {
    const [changedType, setChangedType] = useState(config?.type || InputType.TEXT)
    const handleChangeType = () => setChangedType(changedType === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD)

    return (
        <DivLine color={Color.INPUT_BACKGROUND_PRIMARY}>
            <StyledInput config={config} onChange={config.onChange} type={changedType} value={config.value} />
            {config?.type === InputType.PASSWORD && (
                <Img onClick={handleChangeType} src={changedType === InputType.PASSWORD ? eyeSvg : eyeCloseSvg} />
            )}
        </DivLine>
    )
}

export function InputWithLabel({ config }: { config: InputWithLabelConfig }) {
    return (
        <FormDiv>
            <PlainText
                config={{
                    size: config.labelSize,
                    text: config.label,
                    variant: getLabelVariantByVariant(config.variant),
                }}
            />
            <Input config={config} />
        </FormDiv>
    )
}

export function InputWithLabelAndError({ config }: { config: InputWithLabelAndErrorConfig }) {
    return (
        <FormDiv>
            <PlainText
                config={{
                    size: config.labelSize,
                    text: config.label,
                    variant: getLabelVariantByVariant(config.variant),
                }}
            />
            <Input config={config} />
            {config.error?.length > 0 && (
                <DivLine color={'transparent'}>
                    <PlainText
                        config={{
                            size: config.errorSize,
                            text: config.error,
                            variant: getErrorVariantByVariant(config.variant),
                        }}
                    />
                </DivLine>
            )}
        </FormDiv>
    )
}
