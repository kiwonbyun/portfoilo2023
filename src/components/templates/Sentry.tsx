import React, { useState } from 'react';
import TitledContainer from '../molecules/TitledContainer';
import TextBoard from '../atoms/TextBoard';
import CodeSpan from '../atoms/CodeSpan';
import { styled } from 'styled-components';

import RightArrow from '../icons/RightArrow';
import Button from '../atoms/Button';
import FlexBox from '../atoms/FlexBox';

const Sentry = () => {
  const [after, setAfter] = useState(false);

  const handleClickAfter = () => {
    setAfter((prev) => !prev);
  };

  return (
    <TitledContainer
      title="For Growing Product 2: 즉각적인 에러대응을 위한 Sentry 도입"
      id="sentry">
      <ContentSection>
        <BoxWrapper after={after} data-aos="fade-right">
          <FlexBox
            after={after}
            initialState={{ width: '230px', height: '250px', opacity: 1 }}
            afterState={{
              width: '250px',
              height: '250px',
              opacity: 1,
              marginLeft: '200px',
            }}>
            에러 발생
          </FlexBox>

          {!after && <RightArrow />}

          <FlexBox
            after={after}
            initialState={{ width: '180px', height: '200px', opacity: 1 }}
            afterState={{
              width: '0px',
              height: '0px',
              opacity: 0,
            }}>
            {!after ? '유저의 제보' : ''}
          </FlexBox>

          {!after && <RightArrow />}

          <FlexBox
            after={after}
            initialState={{ width: '160px', height: '160px', opacity: 1 }}
            afterState={{
              width: '0px',
              height: '0px',
              opacity: 0,
            }}>
            {!after ? '스크린샷 응답' : ''}
          </FlexBox>

          <RightArrow size={after ? 50 : 23} />

          <FlexBox
            after={after}
            initialState={{ width: '150px', height: '120px', opacity: 1 }}
            afterState={{
              width: '0px',
              height: '0px',
              opacity: 0,
            }}>
            {!after ? '개발팀 전달' : ''}
          </FlexBox>

          {!after && <RightArrow />}

          <FlexBox
            after={after}
            initialState={{ width: '150px', height: '90px', opacity: 1 }}
            afterState={{
              width: '0px',
              height: '0px',
              opacity: 0,
            }}>
            {!after ? '에러 상황 재현' : ''}
          </FlexBox>

          {!after && <RightArrow />}

          <FlexBox
            after={after}
            initialState={{ width: '120px', height: '90px', opacity: 1 }}
            afterState={{
              width: '250px',
              height: '250px',
              opacity: 1,
              marginRight: '200px',
            }}>
            에러 해결
          </FlexBox>
        </BoxWrapper>
      </ContentSection>
      <TextBoard>
        <p>
          <CodeSpan color="codeBlue">•</CodeSpan>Problem Statement: 유저의 에러
          제보가 개발팀에 도착하기까지 인력, 데이터 손실
        </p>
        <p>
          <CodeSpan color="codeBlue">•</CodeSpan>Solution: 유저의 제보에
          의존하지 않는 에러 로그 시스템 도입
        </p>
        <p>
          <CodeSpan color="codeBlue">•</CodeSpan>Result: 담당 개발자 외 추가적인
          인력낭비 감소, 선제적인 에러 대응 가능
        </p>
        <Button onClick={handleClickAfter}>
          {after ? '적용 전' : '적용 후'}
        </Button>
      </TextBoard>
    </TitledContainer>
  );
};

const BoxWrapper = styled.div<{ after: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ContentSection = styled.section`
  margin: 30px 0px 50px 0px;
`;

export default Sentry;
