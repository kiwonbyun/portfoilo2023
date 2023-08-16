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
import Atomic from '@/components/templates/Atomic';
import StoryBook from '@/components/templates/StoryBook';
import { useRouter } from 'next/router';
import PersonalProject from '@/components/templates/PersonalProject';

const notosans = Noto_Sans_KR({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const {
    query: { target },
  } = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    (function handleHashChange() {
      if (target) {
        const targetElement = document.querySelector(`#${target}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    })();
  }, [target]);
  return (
    <main className={notosans.className}>
      <Header />
      <FirstTemplate />
      <SecondTemplate id="about" />
      <ThirdSection>
        <Skills id="skills" />
        <WorkingExperience id="experience" />
        <MSW />
        <Sentry />
        <Atomic />
        <StoryBook />
        <PersonalProject />
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
