import React from 'react';
import { styled } from 'styled-components';

interface FlexBarProps {
  width: number;
  color?: 'codeGreen' | 'codePink' | 'codeBlue' | 'white' | 'darkGreen';
  content?: string;
  leftPadding?: number;
  contentcolor?: 'black' | 'white';
}

const FlexBar = ({
  width,
  color = 'codeGreen',
  content = '',
  leftPadding = 0,
  contentcolor = 'white',
}: FlexBarProps) => {
  return (
    <Bar
      className="bar"
      style={{
        transform: `translateX(${leftPadding}px)`,
        width,
      }}
      color={color}
      contentcolor={contentcolor}>
      <span>{content}</span>
    </Bar>
  );
};

const Bar = styled.div<{ color: string; contentcolor: string }>`
  height: 40px;
  width: 100%;
  background-color: ${({ theme, color }) => theme.colors[color]};
  transition: width 0.7s ease;
  display: flex;
  justify-content: flex-end;

  align-items: center;
  padding-right: 10px;

  span {
    font-size: 12px;
    color: ${({ contentcolor }) => contentcolor};
  }
`;

export default FlexBar;
