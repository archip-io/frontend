import { Meta, StoryObj } from '@storybook/react'

import { createPageStory } from './createPageStory.tsx'

const { PageStory } = createPageStory({
  pageId: 'login.ftl',
})

const loginMeta: Meta<typeof PageStory> = {
  component: PageStory,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Keycloak/Login',
}

export default loginMeta

type LoginStory = StoryObj<typeof loginMeta>

// @ts-ignore
export const WithoutSocialLogin: LoginStory = () => <PageStory />

// @ts-ignore
export const WithSocialLogin: LoginStory = () => (
  <PageStory
    kcContext={{
      social: {
        providers: [
          {
            alias: 'google',
            displayName: 'Google',
            loginUrl: '#',
            providerId: 'google',
          },
          {
            alias: 'yandex',
            displayName: 'Yandex',
            loginUrl: '#',
            providerId: 'yandex',
          },
        ],
      },
    }}
  />
)
