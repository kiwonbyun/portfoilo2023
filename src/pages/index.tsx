import { Noto_Sans_KR } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FirstTemplate from '@/components/templates/FirstTemplate';
import { styled } from 'styled-components';
import Header from '@/components/templates/Header';
import SecondTemplate from '@/components/templates/SecondTemplate';

import CodeSpan from '@/components/atoms/CodeSpan';
import TitledContainer from '@/components/molecules/TitledContainer';

const notosans = Noto_Sans_KR({ weight: '400', subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className={notosans.className}>
      <Header />
      <FirstTemplate />
      <SecondTemplate />
      <ThirdSection>
        <TitledContainer title="SKILLS">
          <CodeSpan className="sub-title">Junior Level</CodeSpan>
          <SkillsContentsDiv>
            <CodeSpan>•</CodeSpan>JavaScript
          </SkillsContentsDiv>
          <CodeSpan className="sub-title">Level of Experience</CodeSpan>
          <SkillsContentsDiv>
            <CodeSpan>•</CodeSpan>TypeScript
            <CodeSpan>•</CodeSpan>React
            <CodeSpan>•</CodeSpan>Next.js
            <CodeSpan>•</CodeSpan>React-Query
            <CodeSpan>•</CodeSpan>Zustand
            <CodeSpan>•</CodeSpan>Recoil
            <CodeSpan>•</CodeSpan>Styled-Components
            <CodeSpan>•</CodeSpan>Tailwindcss
          </SkillsContentsDiv>
        </TitledContainer>

        <TitledContainer title="WORKING EXPERIENCE">
          <ExperienceWrapper>
            <CodeSpan className="sub-title">
              July 2022 ~ Present / 더 파이러츠(인어교주해적단) 프론트엔드 개발
            </CodeSpan>
            <SkillsContentsDiv>
              <CodeSpan>•</CodeSpan>수산시장, 산지마켓 웹 프론트엔드 개발 담당
            </SkillsContentsDiv>
          </ExperienceWrapper>
        </TitledContainer>
      </ThirdSection>
    </main>
  );
}
const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillsContentsDiv = styled.div`
  margin: 8px 0px 16px 0px;
  display: flex;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px 0px;
`;

const ThirdSection = styled.section`
  height: 100vh;
  margin: 0px 100px;
`;
