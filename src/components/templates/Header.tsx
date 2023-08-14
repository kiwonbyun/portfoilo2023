import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import CodeSpan from '../atoms/CodeSpan';

const Header = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0); // 스크롤에 따른 투명도 상태 관리

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerScroll = window.innerHeight * 0.5;
      const maxScroll = window.innerHeight * 1.4; // 스크롤이 내려와 헤더가 완전히 나타나는 위치
      // 스크롤 위치에 따른 투명도 계산

      const opacity = Math.max(
        (scrollPosition - triggerScroll) / (maxScroll - triggerScroll),
        0,
      );

      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container opacity={scrollOpacity}>
      <CodeSpan>Title</CodeSpan>
    </Container>
  );
};

const Container = styled.header<{ opacity: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  transition: background-color 0.3s ease;
  background-color: rgba(255, 255, 255, 0); /* 반투명한 배경색 */
  backdrop-filter: blur(10px); /* 블러 효과 적용 */
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  text-align: center;
  opacity: ${({ opacity }) => opacity};
  color: ${({ theme }) => theme.colors.codeGreen};
  z-index: 99;
`;

export default Header;
