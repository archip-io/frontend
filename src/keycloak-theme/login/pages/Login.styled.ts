import styled from 'styled-components'

export const GridContainer = styled.div`
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

export const LogoItem = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: fit-content;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const ContentItem = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    overflow: auto;
`

export const Logo = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`

export const DivLine = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
`
