import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import TextBoard from '../atoms/TextBoard';
import CodeSpan from '../atoms/CodeSpan';
import { styled } from 'styled-components';

const Sentry = () => {
  return (
    <TitledContainer title="For Growing Product 2: 즉각적인 에러대응을 위한 Sentry 도입">
      <Div></Div>
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
      </TextBoard>
    </TitledContainer>
  );
};
const Div = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
`;

export default Sentry;
