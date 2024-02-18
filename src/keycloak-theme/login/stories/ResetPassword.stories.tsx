import { Meta, StoryObj } from '@storybook/react'

import { createPageStory } from './createPageStory.tsx'

const { PageStory } = createPageStory({
  pageId: 'login-reset-password.ftl',
})

const resetPasswordMeta: Meta<typeof PageStory> = {
  component: PageStory,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/ResetPassword',
}

export default resetPasswordMeta

type ResetPasswordStory = StoryObj<typeof resetPasswordMeta>

// @ts-ignore
export const Default: ResetPasswordStory = () => <PageStory />
