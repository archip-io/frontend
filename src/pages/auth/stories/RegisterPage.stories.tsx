import RegisterPage from '../RegisterPage.tsx'

export default {
  component: RegisterPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/Register',
}

const Template = () => <RegisterPage />

export const Default = Template.bind({})
