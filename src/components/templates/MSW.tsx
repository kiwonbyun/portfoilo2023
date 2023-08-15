import React, { useState } from 'react';
import TitledContainer from '../molecules/TitledContainer';
import { styled } from 'styled-components';
import FlexBar from '../atoms/FlexBar';
import TextBoard from '../atoms/TextBoard';
import CodeSpan from '../atoms/CodeSpan';
import Button from '../atoms/Button';

const MSW = () => {
  const [[one, two, three], setWidth] = useState([600, 250, 250]);

  const handleMockingClick = () => {
    one === 750 ? setWidth([600, 250, 250]) : setWidth([750, 100, 100]);
  };
  return (
    <TitledContainer
      title="For Growing Product 1: 개발기간 단축을 위한 효율적인 Mocking 적용"
      id="msw">
      <MockingDiv data-aos="fade-right">
        <FlexBar
          color="darkGreen"
          width={600}
          content="요구사항 분석 및 기획"
        />
        <FlexBar
          width={850}
          content="백엔드 개발"
          color="codePink"
          leftPadding={100}
        />
        <div style={{ display: 'flex' }}>
          <FlexBar
            width={one}
            content="프론트엔드 개발"
            color="codeBlue"
            leftPadding={100}
          />
          <FlexBar
            width={two}
            content="대기"
            contentcolor="black"
            color="white"
            leftPadding={100}
          />
          <FlexBar
            width={three}
            content="api 연결"
            color="codeBlue"
            leftPadding={100}
          />
        </div>
      </MockingDiv>
      <TextBoard>
        <p>
          <CodeSpan color="codeBlue">•</CodeSpan>Problem Statement: api개발에
          대한 종속성으로 대기 기간 생김, 전체 프로젝트 기간 Delay
        </p>
        <p>
          <CodeSpan color="codeBlue">•</CodeSpan>Solution: MSW를 적용하여
          네트워크 통신 환경에서 Mock데이터를 사용
        </p>
        <p>
          <CodeSpan color="codeBlue">•</CodeSpan>Result: api개발 종속성이 적어진
          만큼 대기 기간 감소
        </p>
        <Button onClick={handleMockingClick}>
          {one === 600 ? '적용 후' : '적용 전'}
        </Button>
      </TextBoard>
    </TitledContainer>
  );
};

const MockingDiv = styled.div`
  overflow: hidden;
  margin: 30px 0px 50px 0px;
`;

export default MSW;
