import React from 'react';
import { styled } from 'styled-components';
import CodeSpan from '../atoms/CodeSpan';
import TypingText from '../atoms/TypingText';

const FirstTemplate = () => {
  return (
    <FirstPage>
      {/* <AnimatedTextCharacter text="안녕하세요." /> */}
      {/* <AnimatedTextWords text="성장하는 Product* 에 집중하는" size="7vh" /> */}
      {/* <AnimatedTextCharacter text="프론트엔드 개발자 변기원입니다." /> */}
      <span>
        안녕하세요<CodeSpan>.</CodeSpan>
      </span>

      <TextWrapper>
        <TypingText text="성장하는 Product" color="codeGreen" size="2em" />
        <span>에 집중하는</span>
      </TextWrapper>

      <span>
        프론트엔드 개발자 변기원입니다<CodeSpan>.</CodeSpan>
      </span>
    </FirstPage>
  );
};

const TextWrapper = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 16px;
    left: 567px;
  }
`;

const FirstPage = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 33vh;
  padding-left: 18vw;
  gap: 10px;
  font-size: 4vh;
  font-family: SBaL;
  span {
    font-size: 5.8vh;
  }
`;
export default FirstTemplate;
