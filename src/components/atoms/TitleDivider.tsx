import React from 'react';
import CodeSpan from './CodeSpan';
import styled from 'styled-components';
import Reveal from './Reveal';

interface TitleDividerProps {
  children: string;
}

const TitleDivider = ({ children }: TitleDividerProps) => {
  return (
    <Reveal>
      <Container>
        <CodeSpan thick className="span-content" fontSize="--font-size-semi-sm">
          {children}
        </CodeSpan>
      </Container>
    </Reveal>
  );
};

const Container = styled.div`
  width: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors.codeGreen};
  margin: 16px 0px;
  letter-spacing: 1px;
`;

export default TitleDivider;
