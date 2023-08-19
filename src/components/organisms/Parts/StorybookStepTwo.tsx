import CodeSpan from '@/components/atoms/CodeSpan';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import storybookScreenShot from 'public/storybook_screen_shot.png';
import atomicScreenShot from 'public/atomic_screen_shot.png';
import RightArrow from '@/components/icons/RightArrow';
import { motion } from 'framer-motion';
import { Nanum_Gothic_Coding } from 'next/font/google';
const nanumCodeing = Nanum_Gothic_Coding({
  weight: '400',
  subsets: ['latin'],
});

const StorybookStepTwo = ({ step }: { step: number }) => {
  const [str, setStr] = useState('SameCalendar.tsx');

  const variants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: 60 },
  };
  const dirtyVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -80 },
  };

  const brokenVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -140 },
  };

  useEffect(() => {
    let timeoutId;
    if (step === 2) {
      timeoutId = setTimeout(() => {
        setStr('GoodCalendar.tsx');
      }, 1800);
    }
    if (step !== 2 && timeoutId) {
      clearTimeout(timeoutId);
      return;
    }
  }, [step]);

  return (
    <StepTwo data-aos="fade-left">
      <RightArrow />
      <TwoImageWrapper>
        <div>
          <Image alt="static" width={330} height={300} src={atomicScreenShot} />
          <span>
            <CodeSpan>•</CodeSpan>atomic 폴더 기준 정립 및 팀원과 공유
          </span>
        </div>
        <div>
          <Image
            alt="static"
            width={350}
            height={300}
            src={storybookScreenShot}
          />
          <span>
            <CodeSpan>•</CodeSpan>기존의 컴포넌트를 시각적으로 확인
          </span>
        </div>
      </TwoImageWrapper>
      <RightArrow />
      <FolderWrapper>
        <code>/components</code>
        <code className="sub-two">/atoms</code>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 1 }}>
          <CodeSpan fontSize="14px" className="component-name">
            Calendar.tsx
          </CodeSpan>
        </motion.div>
        <code className="sub-two">/molecules</code>
        <GoodCalendarDiv
          className={`${nanumCodeing.className} component-name`}
          initial={{
            opacity: 1,
            fontSize: '14px',
            height: '18px',
          }}
          animate={{
            opacity: 1,
            fontSize: '18px',
            height: '18px',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}>
          {str}
        </GoodCalendarDiv>
        <code className="sub-two">/organisms</code>
        <motion.div
          variants={dirtyVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 1 }}>
          <CodeSpan fontSize="14px" color="codeBlue" className="component-name">
            DirtyCalendar.tsx
          </CodeSpan>
        </motion.div>
        <code className="sub-two">/templates</code>
        <motion.div
          variants={brokenVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 1 }}>
          <CodeSpan fontSize="14px" color="codePink" className="component-name">
            BrokenCalendar.tsx
          </CodeSpan>
        </motion.div>
      </FolderWrapper>
    </StepTwo>
  );
};
const GoodCalendarDiv = styled(motion.div)`
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.codeGreen};
`;

const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  .sub {
    margin-left: 15px;
    margin-bottom: 30px;
  }
  .sub-two {
    margin-left: 15px;
  }
  .component-name {
    margin-left: 30px;
    margin-bottom: 5px;
  }
`;

const StepTwo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-left: -120px;
  align-items: center;
`;

const TwoImageWrapper = styled.div`
  display: flex;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  span {
    font-size: 14px;
  }
`;

export default StorybookStepTwo;
