import ErrorPage, { ErrorPageProps } from '../ErrorPage.tsx'

export default {
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Common/Error',
}

const Template = (props: ErrorPageProps) => <ErrorPage {...props} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  message: 'Страница не найдена',
}
