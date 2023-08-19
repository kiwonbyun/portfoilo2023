import React from 'react';

import CodeSpan from '../atoms/CodeSpan';
import TypingText from '../atoms/TypingText';
import styled from 'styled-components';

const FirstTemplate = () => {
  return (
    <FirstPage>
      <span>
        안녕하세요<CodeSpan>.</CodeSpan>
      </span>

      <TextWrapper>
        <TypingText
          text="성장하는 Product"
          color="codeGreen"
          size="--font-size-title"
        />
        <span className="sub">에 집중하는</span>
      </TextWrapper>

      <span>
        프론트엔드 개발자 변기원입니다<CodeSpan>.</CodeSpan>
      </span>
    </FirstPage>
  );
};

const TextWrapper = styled.div`
  position: relative;
  .sub {
    position: absolute;
    top: 15px;
    left: 545px;
  }

  @media (min-width: 360px) {
    .sub {
      top: 15px;
      left: 452px;
    }
  }

  @media (min-width: 1024px) {
    .sub {
      top: 15px;
      left: 545px;
    }
  }
`;

const FirstPage = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 18vw;
  gap: 10px;
  font-size: 4vh;
  font-family: SBaL;
  span {
    font-size: var(--font-size-semi-lg);
  }
`;
export default FirstTemplate;
