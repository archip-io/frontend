import RegistrationPage from '../RegistrationPage.tsx'

export default {
  component: RegistrationPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/Registration',
}

const Template = () => <RegistrationPage />

export const Default = Template.bind({})
