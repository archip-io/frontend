import LoginPage from '../LoginPage.tsx'

export default {
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/Login',
}

const Template = () => <LoginPage />
export const Default = Template.bind({})
