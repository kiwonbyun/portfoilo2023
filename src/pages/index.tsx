import { Noto_Sans_KR } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FirstTemplate from '@/components/templates/FirstTemplate';
import { styled } from 'styled-components';
import Header from '@/components/templates/Header';
import SecondTemplate from '@/components/templates/SecondTemplate';
import Skills from '@/components/templates/Skills';
import WorkingExperience from '@/components/templates/WorkingExperience';
import MSW from '@/components/templates/MSW';
import Sentry from '@/components/templates/Sentry';

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
        <Skills />
        <WorkingExperience />
        <MSW />
        <Sentry />
      </ThirdSection>
    </main>
  );
}

const ThirdSection = styled.section`
  /* height: 100vh; */
  margin: 0px 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
