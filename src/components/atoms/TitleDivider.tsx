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
      <Container long={children.length * 20 + 100}>
        <CodeSpan thick fontSize="1.8vw">
          {children}
        </CodeSpan>
      </Container>
    </Reveal>
  );
};

const Container = styled.div<{ long: number }>`
  width: ${({ long }) => `${long}px`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.codeGreen};
  margin: 16px 0px;
`;

export default TitleDivider;
