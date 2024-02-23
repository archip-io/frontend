import { NotFoundPage } from '../NotFoundPage.tsx'

export default {
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Common/NotFoundPage',
}

const Template = () => <NotFoundPage />

export const Default = Template.bind({})
