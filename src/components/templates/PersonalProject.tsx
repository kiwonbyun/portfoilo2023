import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import { styled } from 'styled-components';
import Image from 'next/image';
import project1 from 'public/project1.png';
import CodeSpan from '../atoms/CodeSpan';
import Link from 'next/link';
import Github from '../icons/Github';
import Reveal from '../atoms/Reveal';

const PersonalProject = () => {
  return (
    <Container>
      <TitledContainer title="Personal Projects" id="project">
        <Project>
          <ProjectCard>
            <Overlay />
            <Image src={project1} fill alt="hi" objectFit="cover" />
          </ProjectCard>

          <div className="description">
            <Reveal className="title">
              <CodeSpan fontSize="18px">Recommend Korea Trip</CodeSpan>
            </Reveal>
            <CodeSpan fontSize="14px" color="white">
              역할: 백엔드 개발
            </CodeSpan>
            <CodeSpan fontSize="14px" color="white">
              기술: Nest.js, MongoDB
            </CodeSpan>
            <CodeSpan fontSize="14px" color="white">
              기능: 로그인,웹소켓 채팅,CRUD 구현
            </CodeSpan>
            <Link
              href={'https://github.com/kiwonbyun/concierge-korea-back'}
              legacyBehavior>
              <CenterLink target="_blank">
                <Github />
                <CodeSpan fontSize="14px" color="white">
                  Go Github
                </CodeSpan>
              </CenterLink>
            </Link>
          </div>
        </Project>
      </TitledContainer>

      <TitledContainer title="Presentation" id="Presentation">
        <div>ad</div>
      </TitledContainer>
    </Container>
  );
};
const CenterLink = styled.a`
  display: flex;
  align-items: flex-end;
  span {
    &:hover {
      color: ${({ theme }) => theme.colors.codeGreen};
    }
  }
`;

const Project = styled.div`
  width: 100%;
  .description {
    position: relative;
    bottom: 120px;
    left: 100px;
    width: 270px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    .title {
      margin-bottom: 10px;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); /* 그라디에이션 설정 */
  pointer-events: none; /* 그라디에이션에 마우스 이벤트를 허용하지 않습니다 */
  z-index: 9;
`;

const ProjectCard = styled.div`
  position: relative;
  width: 180px;
  height: 300px; /* 원하는 높이로 조정합니다 */
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default PersonalProject;
