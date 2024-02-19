import { createGetKcContext } from 'keycloakify/login'

export type KcContextExtension = { pageId: 'login.ftl' }

export const { getKcContext } = createGetKcContext<KcContextExtension>({
  mockData: [
    {
      locale: {
        currentLanguageTag: 'ru',
      },
      pageId: 'login.ftl',
    },
    {
      locale: {
        currentLanguageTag: 'ru',
      },
      pageId: 'register-user-profile.ftl',
    },
    {
      locale: {
        currentLanguageTag: 'ru',
      },
      pageId: 'login-reset-password.ftl',
    },
    {
      locale: {
        currentLanguageTag: 'ru',
      },
      pageId: 'login-update-password.ftl',
    },
    {
      locale: {
        currentLanguageTag: 'ru',
      },
      pageId: 'login-verify-email.ftl',
    },
  ],
})

export const { kcContext } = getKcContext({})

export type KcContext = NonNullable<ReturnType<typeof getKcContext>['kcContext']>
