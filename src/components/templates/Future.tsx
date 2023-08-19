import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import fpImage from 'public/fp.png';
import tsImage from 'public/ts.png';
import CodeSpan from '../atoms/CodeSpan';
import styled from 'styled-components';
import LearningGoal from '../organisms/Parts/LearningGoal';

function Future() {
  return (
    <TitledContainer title="Next Learning Goals" id="Goals">
      <Container>
        <LearningGoal
          src={fpImage}
          title="함수형 프로그래밍"
          showLink={false}
          width="350px"
          height="350px">
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            한 가지 역할만을 담당하는 순수 함수들을 조합하여, 누구나 쉽게 읽을
            수 있고 재사용성이 높은 코드를 작성하고자 합니다.
          </CodeSpan>
        </LearningGoal>
        <LearningGoal
          src={tsImage}
          title="타입스크립트"
          showLink={false}
          width="350px"
          height="350px">
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            런타임 에러를 방지하고 생산성 및 개발 환경을 개선하기 위해
            타입스크립트를 더 깊이 있게 공부 하고 싶습니다.
          </CodeSpan>
        </LearningGoal>
      </Container>
    </TitledContainer>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default Future;
