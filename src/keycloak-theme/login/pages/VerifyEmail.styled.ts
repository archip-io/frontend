import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  padding: 50px;
  box-sizing: border-box;
  column-gap: 50px;
  overflow: auto;
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  min-width: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  overflow: auto;
`

export const Logo = styled.img`
  width: 30%;
  object-fit: cover;
`

export const DivLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
`
