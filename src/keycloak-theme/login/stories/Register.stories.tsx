import { Meta, StoryObj } from '@storybook/react'

import { createPageStory } from './createPageStory.tsx'

const { PageStory } = createPageStory({
    pageId: 'register-user-profile.ftl',
})

const registerMeta: Meta<typeof PageStory> = {
    component: PageStory,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'Pages/Register',
}

export default registerMeta

type LoginStory = StoryObj<typeof registerMeta>

// @ts-ignore
export const Default: LoginStory = () => <PageStory />
