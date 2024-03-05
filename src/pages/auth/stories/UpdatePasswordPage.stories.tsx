import UpdatePasswordPage from '../UpdatePasswordPage.tsx'

export default {
  component: UpdatePasswordPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/UpdatePassword',
}

const Template = () => <UpdatePasswordPage />

export const Default = Template.bind({})
