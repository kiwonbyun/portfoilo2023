import React, { useEffect, useRef, useState } from 'react';
import TitledContainer from '../molecules/TitledContainer';
import styled from 'styled-components';
import TypingText from '../atoms/TypingText';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dizzyImage from 'public/dizzy.png';
import macbookImage from 'public/macbook.png';
import CodeSpan from '../atoms/CodeSpan';
import StorybookStepTwo from '../organisms/Parts/StorybookStepTwo';
import TextBoard from '../atoms/TextBoard';
import AniButton from '../atoms/AniButton';

const StoryBook = () => {
  const [typingStart, setTypingStart] = useState(false);
  const [step, setStep] = useState<number>(0);
  const typingRef = useRef(null);
  const initState = { right: 0, top: 0 };

  const sameCalendarVariants = {
    initial: initState,
    animate: typingStart ? { right: 230, top: -24 } : initState,
  };

  const dizzyVariants = {
    initial: { opacity: 0 },
    animate: typingStart ? { opacity: 1 } : { opacity: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTypingStart(true);
        }
      },
      { threshold: 0.5 }, // 컴포넌트가 화면의 50% 이상 보일 때 감지
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);

  return (
    <TitledContainer
      title="For Growing Product 4: 협업을 위한 아토믹 디자인 패던 개선 & 스토리북 도입"
      id="storybook">
      <ContentSection>
        <FlexWrapper step={step}>
          <FolderWrapper ref={typingRef}>
            <code>/components</code>
            <code className="sub">/atoms</code>
            <CodeSpan fontSize="--font-size-sm" className="component-name">
              Calendar.tsx
            </CodeSpan>
            <code className="sub">/molecules</code>
            <div style={{ height: '18px' }}></div>
            <code className="sub">/organisms</code>
            <CodeSpan
              fontSize="--font-size-sm"
              color="codeBlue"
              className="component-name">
              DirtyCalendar.tsx
            </CodeSpan>
            <code className="sub">/templates</code>
            <CodeSpan
              fontSize="--font-size-sm"
              color="codePink"
              className="component-name">
              BrokenCalendar.tsx
            </CodeSpan>
          </FolderWrapper>
          <NewComponentWrapper>
            {step !== 0 ? (
              <motion.div
                data-aos="fade-left"
                variants={sameCalendarVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 1.8 }}>
                <TypingText text="SameCalendar.tsx" noBlink color="codeGreen" />
              </motion.div>
            ) : null}
          </NewComponentWrapper>
        </FlexWrapper>

        {step === 0 && (
          <IconImageDiv data-aos="fade-left">
            <Image width={170} height={170} alt="dizzy" src={macbookImage} />
            <p>쓸만한 달력 컴포넌트가 어디 있었지..?</p>
            <p>하나 만들어야겠다.</p>
          </IconImageDiv>
        )}
        {step === 1 && (
          <IconImageMotionDiv
            variants={dizzyVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 2 }}>
            <Image width={170} height={170} alt="dizzy" src={dizzyImage} />
            <p>무슨 달력 컴포넌트가 이렇게 많아..?</p>
            <p>어떻게 관리해야할까?</p>
          </IconImageMotionDiv>
        )}
        {step === 2 && <StorybookStepTwo step={step} />}
      </ContentSection>
      <TextBoard>
        <p>
          <CodeSpan>•</CodeSpan>Problem Statement: 폴더 구분 기준의 모호함,
          기존의 컴포넌트 파악, 관리 미흡으로 중복되는 코드 존재
        </p>
        <p>
          <CodeSpan>•</CodeSpan>Solution: 폴더 구분 기준을 정립, 재사용
          컴포넌트를 시각적으로 관리할 수 있는 스토리북 도입
        </p>
        <p>
          <CodeSpan>•</CodeSpan>Result: 재사용 컴포넌트 활용으로 중복코드 제거,
          협업 효율성 증가, 개발기간 단축
        </p>
        <AniButton
          onClick={() => {
            setStep((prev) => (prev === 2 ? 0 : prev + 1));
          }}>
          after
        </AniButton>
      </TextBoard>
    </TitledContainer>
  );
};

const FlexWrapper = styled.div<{ step: number }>`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const IconImageMotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 400px;
`;

const IconImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 400px;
`;

const NewComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  div {
    position: relative;
  }
`;

const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .sub {
    margin-left: 15px;
  }
  .component-name {
    margin-left: 30px;
  }
`;

const ContentSection = styled.section`
  margin: 0px 0px 10px 0px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  code {
    font-size: 16px;
  }
`;

export default StoryBook;
