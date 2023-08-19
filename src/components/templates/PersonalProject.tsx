import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import styled from 'styled-components';
import project1 from 'public/project1.png';
import mailImg from 'public/mail.png';
import CodeSpan from '../atoms/CodeSpan';
import Github from '../icons/Github';
import Project from '../organisms/Parts/Project';
import Youtube from '../icons/Youtube';
import asyncImg from 'public/async.png';
import domImg from 'public/dom.png';
import promiseImg from 'public/promise.png';
import Presentation from '../organisms/Parts/Presentation';

const PersonalProject = () => {
  return (
    <Container>
      <TitledContainer title="Personal Projects" id="projects">
        <Project
          src={project1}
          title="Recommend Korea Trip"
          codeLink="https://github.com/kiwonbyun/concierge-korea-back"
          linkIcon={<Github size={18} />}
          linkText="Recommend Korea Trip">
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            역할: 백엔드 개발
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            기술: Node.js Nest.js, MongoDB
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            기능: 로그인,웹소켓 채팅,CRUD 구현
          </CodeSpan>
        </Project>
        <Project
          src={mailImg}
          title="Stock Index Mailer"
          codeLink="https://github.com/kiwonbyun/concierge-korea-back"
          linkIcon={<Github size={18} />}
          linkText="Stock Index Mailer"
          width="290px"
          height="400px">
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            역할: 백엔드 개발
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            기술: Node.js, express
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            기능: 주요 증시 크롤링, 엑셀파일 메일 발송
          </CodeSpan>
        </Project>
      </TitledContainer>

      <TitledContainer title="Presentation" id="Presentation">
        <Presentation
          src={asyncImg}
          title="동기 & 비동기"
          codeLink="https://youtu.be/8-MiztthUnc"
          linkIcon={<Youtube size={18} fill="red" />}
          linkText="발표자료 보러가기"
          width="560px">
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            날짜: 2022. 04
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            대상: 항해99 교육생
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            자바스크립트의 비동기 처리방법과 그 특성에 대해 공부하고 발표한
            내용입니다.
          </CodeSpan>
        </Presentation>
        <Presentation
          src={domImg}
          title="DOM이란 무엇일까?"
          codeLink="https://youtu.be/5ZY0UScTNxk"
          linkIcon={<Youtube size={18} fill="red" />}
          linkText="발표자료 보러가기"
          width="560px">
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            날짜: 2022. 05
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            대상: 항해99 교육생
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            Document Object Model이 필요한 이유와 특징에 대해 공부하고 발표한
            내용입니다.
          </CodeSpan>
        </Presentation>
        <Presentation
          src={promiseImg}
          title="비동기 처리와 Promise의 역할"
          codeLink="https://youtu.be/KhfYUCbxQp0"
          linkIcon={<Youtube size={18} fill="red" />}
          linkText="발표자료 보러가기"
          width="560px">
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            날짜: 2022. 05
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            대상: 항해99 교육생
          </CodeSpan>
          <CodeSpan fontSize="--font-size-x-sm" color="white">
            자바스크립트의 비동기 처리와 Promise가 등장한 배경과 역할에 대해
            공부하고 발표한 내용입니다.
          </CodeSpan>
        </Presentation>
      </TitledContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default PersonalProject;
