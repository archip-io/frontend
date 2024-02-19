import { Meta, StoryObj } from '@storybook/react'

import { createPageStory } from './createPageStory.tsx'

const { PageStory } = createPageStory({
  pageId: 'login-update-password.ftl',
})

const updatePasswordMeta: Meta<typeof PageStory> = {
  component: PageStory,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/UpdatePassword',
}

export default updatePasswordMeta

type UpdatePasswordStory = StoryObj<typeof updatePasswordMeta>

// @ts-ignore
export const Default: UpdatePasswordStory = () => <PageStory />
