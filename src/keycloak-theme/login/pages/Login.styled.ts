import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  padding: 70px;
  box-sizing: border-box;
  column-gap: 70px;
  overflow: auto;
`;

export const LogoItem = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: fit-content;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 20px;
  overflow: hidden;
`;

export const ContentItem = styled.form`
  display: flex;
  height: 100%;
  min-height: fit-content;
  max-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  overflow: auto;
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const DivLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
`;
