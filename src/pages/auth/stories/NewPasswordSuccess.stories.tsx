import { NewPasswordSuccessPage } from '../NewPasswordSuccessPage.tsx'

export default {
  component: NewPasswordSuccessPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/NewPasswordSuccessPage',
}

const Template = () => <NewPasswordSuccessPage />

export const Default = Template.bind({})
