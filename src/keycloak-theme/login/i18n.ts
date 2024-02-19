import { createUseI18n } from 'keycloakify/login'

import en from './messages/en.json'
import ru from './messages/ru.json'

export const { useI18n } = createUseI18n({ en, ru })
export type I18n = NonNullable<ReturnType<typeof useI18n>>
