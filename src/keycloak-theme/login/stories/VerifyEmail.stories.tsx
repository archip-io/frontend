import { Meta, StoryObj } from '@storybook/react'

import { createPageStory } from './createPageStory.tsx'

const { PageStory } = createPageStory({
  pageId: 'login-verify-email.ftl',
})

const verifyEmailMeta: Meta<typeof PageStory> = {
  component: PageStory,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Keycloak/VerifyEmail',
}

export default verifyEmailMeta

type VerifyEmailStory = StoryObj<typeof verifyEmailMeta>

// @ts-ignore
export const Default: VerifyEmailStory = () => <PageStory />
