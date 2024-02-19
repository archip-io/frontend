import styled from 'styled-components'

import { Color } from '../styles/ts/colors.ts'
import './App.css'

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 60px;
  background-color: ${Color.BACKGROUND_EXTRA};
`
export default function App() {
  return <HeaderContainer />
}
