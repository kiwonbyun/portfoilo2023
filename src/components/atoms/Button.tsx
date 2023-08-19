import React from 'react';
import { Nanum_Gothic_Coding } from 'next/font/google';
import styled from 'styled-components';
const nanumCodeing = Nanum_Gothic_Coding({
  weight: '400',
  subsets: ['latin'],
});

interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: 'codeGreen' | 'codePink' | 'codeBlue' | 'white' | 'black' | 'inherit';
}

const Button = ({ children, onClick, color = 'codeGreen' }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <Wrapper
      onClick={handleClick}
      className={nanumCodeing.className}
      color={color}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ color: string }>`
  margin: auto;
  width: fit-content;
  height: 35px;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color === 'inherit' ? 'inherit' : theme.colors[color]};
  cursor: pointer;
  color: ${({ color }) => (color === 'inherit' ? `white` : 'black')};
  border: ${({ theme, color }) =>
    color === 'inherit' ? `1px solid ${theme.colors.codeGreen}` : 'none'};
  border-radius: 5px;
  padding: 0px 20px;
  font-size: var(--font-size-x-sm);
`;

export default Button;
