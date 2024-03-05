import { RegistrationSuccessPage } from '../RegistrationSuccessPage.tsx'

export default {
  component: RegistrationSuccessPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/RegistrationSuccessPage',
}

const Template = () => <RegistrationSuccessPage />

export const Default = Template.bind({})
