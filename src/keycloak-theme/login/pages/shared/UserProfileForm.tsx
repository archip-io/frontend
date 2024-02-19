import { useFormValidation } from 'keycloakify/login/lib/useFormValidation'
import { useEffect } from 'react'

import type { I18n } from '../../i18n.ts'

import { InputWithLabelAndError } from '../../../../components/input/Input.tsx'
import { InputType } from '../../../../components/input/Input.type.ts'
import { Variant } from '../../../../styles/ts/types.ts'

export type UserProfileFormFieldsProps = {
  i18n: I18n
  kcContext: Parameters<typeof useFormValidation>[0]['kcContext']
  onIsFormSubmittableValueChange: (isFormSubmittable: boolean) => void
}

export function UserProfileFormFields(props: UserProfileFormFieldsProps) {
  const { i18n, kcContext, onIsFormSubmittableValueChange } = props
  const { advancedMsgStr, msgStr } = i18n
  const {
    attributesWithPassword,
    formValidationDispatch,
    formValidationState: { fieldStateByAttributeName, isFormSubmittable },
  } = useFormValidation({
    i18n,
    kcContext,
    passwordValidators: {
      length: {
        'ignore.empty.value': true,
        max: '64',
        min: '8',
      },
      pattern: {
        'error-message': msgStr('passwordPatternError'),
        'ignore.empty.value': true,
        pattern: '^(?=.*[A-Z])(?=.*[\\W_])(?=.*[0-9])(?=.*[a-z]).+$',
      },
    },
  })

  // Сортируем в порядке: имя пользователя, email, пароль, подтверждение пароля и остальные
  attributesWithPassword.sort((a, b) => {
    if (a.name === 'username') return -1
    if (b.name === 'username') return 1

    if (a.name === 'email') return -1
    if (b.name === 'email') return 1

    if (a.name === 'password') return -1
    if (b.name === 'password') return 1

    // eslint-disable-next-line sonarjs/no-duplicate-string
    if (a.name === 'password-confirm') return -1
    if (b.name === 'password-confirm') return 1
    return 0
  })

  useEffect(() => {
    onIsFormSubmittableValueChange(isFormSubmittable)
  }, [isFormSubmittable])

  return (
    <>
      {attributesWithPassword.map((attribute) => {
        const { displayableErrors, value } = fieldStateByAttributeName[attribute.name]

        const { options } = attribute.validators
        if (options !== undefined) {
          return <></>
        }

        return (
          <>
            <InputWithLabelAndError
              config={{
                error: displayableErrors.length > 0 ? displayableErrors[0].errorMessageStr : ' ',
                errorSize: 14,
                inputSize: 18,
                label: attribute.displayName ? advancedMsgStr(attribute.displayName) : ' ',
                labelSize: 16,
                name: attribute.name,
                onBlur: () =>
                  formValidationDispatch({
                    action: 'focus lost',
                    name: attribute.name,
                  }),
                onChange: (event) =>
                  formValidationDispatch({
                    action: 'update value',
                    name: attribute.name,
                    newValue: event.target.value,
                  }),
                type: ['password', 'password-confirm'].includes(attribute.name) ? InputType.PASSWORD : InputType.TEXT,
                value,
                variant: Variant.PRIMARY,
              }}
            />
          </>
        )
      })}
    </>
  )
}
