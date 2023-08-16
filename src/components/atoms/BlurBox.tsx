import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface BlurBoxProps {
  children: ReactElement[] | ReactElement;
  className?: string;
}

const BlurBox = ({ children, className }: BlurBoxProps) => {
  return (
    <TranslucentBackground className={className}>
      <Content>{children}</Content>
    </TranslucentBackground>
  );
};
const TranslucentBackground = styled.div`
  width: 250px;
  height: 200px; /* 원하는 높이로 조정합니다 */
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은 배경색 */
  backdrop-filter: blur(10px); /* 배경에 블러 효과 적용 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  color: white;
`;

export default BlurBox;
