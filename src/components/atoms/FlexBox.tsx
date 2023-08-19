import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface AnimateState {
  width: string;
  height: string;
  opacity: number;
  marginLeft?: string;
  marginRight?: string;
}

interface FlexBoxProps {
  children: string;
  afterState: AnimateState;
  initialState: AnimateState;
  after: boolean;
}

const FlexBox = ({
  children,
  after,
  initialState,
  afterState,
}: FlexBoxProps) => {
  const variants = {
    initial: initialState,
    animate: !after ? initialState : afterState,
  };
  return (
    <Div
      variants={variants}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}>
      {children}
    </Div>
  );
};

const Div = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.codeGreen};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default FlexBox;
