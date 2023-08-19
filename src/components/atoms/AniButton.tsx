import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Nanum_Gothic_Coding } from 'next/font/google';
const nanumCodeing = Nanum_Gothic_Coding({
  weight: '400',
  subsets: ['latin'],
});

interface AniButtonProps {
  children: ReactNode | string;
  color?: 'codeGreen' | 'codePink' | 'codeBlue' | 'white' | 'black' | 'inherit';
  onClick?: () => void;
}

function AniButton({
  children,
  color = 'codeGreen',
  onClick = () => {},
}: AniButtonProps) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <MotionButton
      onClick={handleClick}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9, backgroundColor: 'green' }}
      transition={{ duration: 0.1 }}
      className={nanumCodeing.className}
      color={color}>
      {children}
    </MotionButton>
  );
}

const MotionButton = styled(motion.button)<{ color: string }>`
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

export default AniButton;
