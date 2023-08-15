import React from 'react';
import { styled } from 'styled-components';

interface BoxProps {
  children: string;
  width?: number;
  height?: number;
  color?: 'codeGreen' | 'codePink' | 'codeBlue' | 'white';
}

const Box = ({
  children,
  width = 100,
  height = 100,
  color = 'codeGreen',
}: BoxProps) => {
  return (
    <Div width={width} height={height} color={color}>
      {children}
    </Div>
  );
};

const Div = styled.div<{ width: number; height: number; color: string }>`
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Box;
