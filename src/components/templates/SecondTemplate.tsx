import React from 'react';
import styled from 'styled-components';
import Reveal from '../atoms/Reveal';
import CodeSpan from '../atoms/CodeSpan';
import ContactButtons from '../molecules/ContactButtons';
import Image from 'next/image';
import profileImage from 'public/profile.jpeg';
import TitledContainer from '../molecules/TitledContainer';

const SecondTemplate = ({ id }: { id: string }) => {
  return (
    <SecondSection id={id}>
      <LeftDiv>
        <div>
          <Reveal>
            <CodeSpan fontSize="--font-size-semi-sm">
              {"Hello, I'm Frontend Developer"}
            </CodeSpan>
          </Reveal>
          <Name>
            변기원<CodeSpan color="white">Byun Kiwon</CodeSpan>
          </Name>
          <ContactButtons />
        </div>

        <TitledContainer title="ABOUT ME" id="aboutme">
          <Article>
            <p>
              구성원 모두의 목표는 시장의 니즈를 충족하고 성장하는 Product를
              만드는 일이라고 생각합니다.
            </p>
            <p>
              프론트엔드 개발자로서 목표에 어떻게 기여할 수 있을지 관심을 가지고
              고민하고 있습니다.
            </p>
            <p>
              요구사항을 빠르고 유연하게 구현하기, 신속한 에러대응, 심플하고
              일관된 코드를 작성하는 것에 관심을 가지고 있습니다.
            </p>
          </Article>
        </TitledContainer>
      </LeftDiv>
      <RightDiv>
        <Image
          data-aos="fade-left"
          src={profileImage}
          alt="profile"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 50vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </RightDiv>
    </SecondSection>
  );
};

const Article = styled.article`
  width: 90%;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  gap: 10px;
`;

const Name = styled.h1`
  font-size: var(--font-size-lg);
  letter-spacing: 3px;
  font-family: SBaL;
  margin-top: 15px;
  span {
    font-size: var(--font-size-sm);
    margin-left: 10px;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  gap: 10px;
`;

const RightDiv = styled.div`
  height: 100vh;
  position: relative;
  img {
    position: absolute;
  }
`;
const SecondSection = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default SecondTemplate;
