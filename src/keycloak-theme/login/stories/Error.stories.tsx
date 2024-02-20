import { Meta, StoryObj } from '@storybook/react'

import { createPageStory } from './createPageStory.tsx'

const { PageStory } = createPageStory({
  pageId: 'error.ftl',
})

const errorMeta: Meta<typeof PageStory> = {
  component: PageStory,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Keycloak/Error',
}

export default errorMeta

type ErrorStory = StoryObj<typeof errorMeta>

// @ts-ignore
export const Default: ErrorStory = () => <PageStory />
