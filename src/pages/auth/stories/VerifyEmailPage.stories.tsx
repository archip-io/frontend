import VerifyEmailPage, { VerifyEmailProps } from '../VerifyEmailPage.tsx'

export default {
  component: VerifyEmailPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Auth/VerifyEmail',
}

const Template = (props: VerifyEmailProps) => <VerifyEmailPage {...props} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  email: 'user@mail.ru',
}
