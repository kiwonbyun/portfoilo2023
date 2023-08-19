import React, { useState } from 'react';
import TitledContainer from '../molecules/TitledContainer';
import styled from 'styled-components';
import FlexBar from '../atoms/FlexBar';
import TextBoard from '../atoms/TextBoard';
import CodeSpan from '../atoms/CodeSpan';
import Button from '../atoms/Button';

const MSW = () => {
  const [[one, two, three], setWidth] = useState(['50%', '15%', '15%']);

  const handleMockingClick = () => {
    one === '60%'
      ? setWidth(['50%', '15%', '15%'])
      : setWidth(['60%', '5%', '5%']);
  };
  return (
    <TitledContainer
      title="For Growing Product 1: 개발기간 단축을 위한 효율적인 Mocking 적용"
      id="msw">
      <MockingDiv data-aos="fade-right">
        <FlexBar
          color="darkGreen"
          width="50%"
          content="요구사항 분석 및 기획"
        />
        <FlexBar
          width={'65%'}
          content="백엔드 개발"
          color="codePink"
          leftPadding={200}
        />
        <div style={{ display: 'flex' }}>
          <FlexBar
            width={one}
            content="프론트엔드 개발"
            color="codeBlue"
            leftPadding={200}
          />
          <FlexBar
            width={two}
            content="대기"
            contentcolor="black"
            color="white"
            leftPadding={200}
          />
          <FlexBar
            width={three}
            content="api 연결"
            color="codeBlue"
            leftPadding={200}
          />
        </div>
      </MockingDiv>
      <TextBoard>
        <p>
          <CodeSpan>•</CodeSpan>Problem Statement: api개발에 대한 종속성으로
          대기 기간 생김, 전체 프로젝트 기간 Delay
        </p>
        <p>
          <CodeSpan>•</CodeSpan>Solution: MSW를 적용하여 네트워크 통신 환경에서
          Mock데이터를 사용
        </p>
        <p>
          <CodeSpan>•</CodeSpan>Result: api개발 종속성이 적어진 만큼 대기 기간
          감소
        </p>
        <Button onClick={handleMockingClick}>
          {one === '50%' ? '적용 후' : '적용 전'}
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
