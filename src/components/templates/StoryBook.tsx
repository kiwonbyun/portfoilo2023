import React, { useEffect, useRef, useState } from 'react';
import TitledContainer from '../molecules/TitledContainer';
import { styled } from 'styled-components';
import TypingText from '../atoms/TypingText';
import { motion } from 'framer-motion';

const StoryBook = () => {
  const [typingStart, setTypingStart] = useState(false);
  const typingRef = useRef(null);
  const initState = { right: 0, top: 0 };

  const calendarVariants = {
    initial: initState,
    animate: typingStart ? { right: 180, top: 68 } : initState,
  };
  const prettyCalendarVariants = {
    initial: initState,
    animate: typingStart ? { right: 180, top: 80 } : initState,
  };
  const bigCalendarVariants = {
    initial: initState,
    animate: typingStart ? { right: 180, top: -80 } : initState,
  };
  const cleanCalendarVariants = {
    initial: initState,
    animate: typingStart ? { right: 180, top: 50 } : initState,
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
        <FolderWrapper ref={typingRef}>
          <code>/components</code>
          <code className="sub">/atoms</code>
          <code className="sub">/molecules</code>
          <code className="sub">/organisms</code>
          <code className="sub">/templates</code>
        </FolderWrapper>
        <NewComponentWrapper>
          <motion.div
            variants={calendarVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 1.3 }}>
            <TypingText text="Calendar.tsx" noBlink />
          </motion.div>
          <motion.div
            variants={prettyCalendarVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 1.8 }}>
            <TypingText text="PrettyCalendar.tsx" noBlink />
          </motion.div>
          <motion.div
            variants={bigCalendarVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 2.3 }}>
            <TypingText text="BigCalendar.tsx" noBlink />
          </motion.div>
          <motion.div
            variants={cleanCalendarVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 2.7 }}>
            <TypingText text="CleanCalendar.tsx" noBlink />
          </motion.div>
        </NewComponentWrapper>
      </ContentSection>
      <button onClick={() => {}}>after</button>
    </TitledContainer>
  );
};

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
    margin-bottom: 30px;
  }
`;

const ContentSection = styled.section`
  margin: 30px 0px 50px 0px;
  display: flex;
  gap: 100px;
  code {
    font-size: 16px;
  }
`;

export default StoryBook;
