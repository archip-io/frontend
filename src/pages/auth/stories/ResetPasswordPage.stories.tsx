import ResetPasswordPage from '../ResetPasswordPage.tsx'

export default {
  component: ResetPasswordPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/ResetPassword',
}

const Template = () => <ResetPasswordPage />

export const Default = Template.bind({})
