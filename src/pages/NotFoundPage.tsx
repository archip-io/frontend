import styled from "styled-components";

import backSVG from "../assets/back-icon.svg";
import circle from "../assets/circle.png";
import { HeaderText, PlainText } from "../components/text/Text.tsx";
import { Variant } from "../styles/ts/types.ts";

export const PageContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  margin: 0;
  padding-left: 40px;
  padding-right: 40px;
  width: 100vw;
  height: calc(100vh - 60px);
`;

export const Img = styled.img`
  height: 30px;
  width: 60px;

  &:hover {
    cursor: pointer;
    height: 35px;
  }
`;

export const ImgBack = styled.img<{
  height: number;
  width: number;
  left: number;
  top: number;
}>`
  position: absolute;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin-left: ${(props) => props.left}px;
  margin-top: ${(props) => props.top}px;
`;

export const BackContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: row-reverse;
`;

export function NotFoundPage() {
  return (
    <PageContainer>
      <ImgBack src={circle} height={60} width={60} left={30} top={168} />
      <ImgBack src={circle} height={134} width={134} left={1124} top={88} />
      <ImgBack src={circle} height={207} width={207} left={1031} top={537} />
      <HeaderText
        config={{
          size: 600,
          text: "404",
          variant: Variant.PRIMARY,
        }}
      />
      <PlainText
        config={{
          size: 64,
          text: "Страница не найдена",
          variant: Variant.PRIMARY,
        }}
      />
      <PlainText
        config={{
          size: 32,
          text: "Страница, которую вы ищете, не существует :(",
          variant: Variant.PRIMARY,
        }}
      />
      <BackContainer>
        <Img src={backSVG} />
        <PlainText
          config={{
            size: 32,
            text: "вернуться на главную страницу",
            variant: Variant.PRIMARY,
          }}
        />
      </BackContainer>
    </PageContainer>
  );
}
