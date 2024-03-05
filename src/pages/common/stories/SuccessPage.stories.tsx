import { SuccessPage, SuccessPageProps } from '../SuccessPage.tsx'
import { Button } from '../../../components/button/Button.tsx'

export default {
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Common/Success',
}

const Template = (props: SuccessPageProps) =>
  <SuccessPage {...props}>
    <Button config={{
      size: 22,
      text: 'Кнопка'
    }}/>
  </SuccessPage>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  title: 'Регистрация пройдена успешно',
}
