import { StyledHeaderText, StyledPlainText } from './Text.styled.ts'
import { TextConfig } from './Text.types.ts'

export function PlainText({ config }: { config: TextConfig }) {
    return <StyledPlainText config={config}>{config.text}</StyledPlainText>
}

export function HeaderText({ config }: { config: TextConfig }) {
    return <StyledHeaderText config={config}>{config.text}</StyledHeaderText>
}
