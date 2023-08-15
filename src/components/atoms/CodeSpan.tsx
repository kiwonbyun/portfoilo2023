import { Nanum_Gothic_Coding } from 'next/font/google';
import React from 'react';
import { styled } from 'styled-components';

interface CodeSpanProps {
  children: string;
  color?: 'codeGreen' | 'codePink' | 'codeBlue' | 'white';
  className?: string;
  thick?: boolean;
  fontSize?: string;
  onClick?: () => void;
}
const nanumCodeing = Nanum_Gothic_Coding({
  weight: '400',
  subsets: ['latin'],
});

const nanumCodeingThick = Nanum_Gothic_Coding({
  weight: '700',
  subsets: ['latin'],
});
const CodeSpan = ({
  children,
  color = 'codeGreen',
  className,
  thick,
  fontSize = '1.3vw',
  ...props
}: CodeSpanProps) => {
  return (
    <Span
      {...props}
      className={`${
        thick ? nanumCodeingThick.className : nanumCodeing.className
      } ${className}`}
      color={color}
      fontSize={fontSize}>
      {children}
    </Span>
  );
};

const Span = styled.span<{ color: string; fontSize: string }>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ fontSize }) => fontSize};
`;

export default CodeSpan;
