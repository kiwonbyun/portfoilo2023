import React from 'react';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import CodeSpan from './CodeSpan';

interface AnimatedTextCharacterProps {
  text: string;
  size?: string;
}

const AnimatedTextCharacter = ({
  text,
  size = '5vh',
}: AnimatedTextCharacterProps) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Container variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <Span variants={child} key={index} size={size}>
          {letter === ' ' ? (
            '\u00A0'
          ) : letter === '.' ? (
            <CodeSpan>.</CodeSpan>
          ) : (
            letter
          )}
        </Span>
      ))}
    </Container>
  );
};

const Span = styled(motion.span)<{ size: string }>`
  font-size: ${({ size }) => size};
`;

const Container = styled(motion.div)`
  display: flex;
  overflow: hidden;
`;

export default AnimatedTextCharacter;
