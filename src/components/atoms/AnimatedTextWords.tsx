import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CodeSpan from './CodeSpan';
interface AnimatedTextWordsProps {
  text: string;
  size?: string;
}

const AnimatedTextWords = ({ text, size = '5vh' }: AnimatedTextWordsProps) => {
  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Container variants={container} initial="hidden" animate="visible">
      {words.map((word) => {
        return (
          <Span variants={child} key={word} size={size}>
            {word.includes('*') ? (
              <CodeSpan>{word.replace('*', '')}</CodeSpan>
            ) : (
              word
            )}
          </Span>
        );
      })}
    </Container>
  );
};

const Container = styled(motion.div)`
  overflow: hidden;
  display: flex;
`;

const Span = styled(motion.span)<{ size: string }>`
  margin-right: 5px;
  font-size: ${({ size }) => size};
`;

export default AnimatedTextWords;
