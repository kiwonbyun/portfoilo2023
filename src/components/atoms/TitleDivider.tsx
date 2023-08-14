import React from 'react';
import CodeSpan from './CodeSpan';
import { styled } from 'styled-components';
import Reveal from './Reveal';

interface TitleDividerProps {
  children: string;
}

const TitleDivider = ({ children }: TitleDividerProps) => {
  return (
    <Reveal>
      <Container>
        <CodeSpan thick>{children}</CodeSpan>
      </Container>
    </Reveal>
  );
};

const Container = styled.div`
  width: 300px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.codeGreen};
  font-size: 2vw;
  margin: 16px 0px;
`;

export default TitleDivider;
