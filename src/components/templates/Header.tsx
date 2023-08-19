import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import CodeSpan from '../atoms/CodeSpan';

import { useRouter } from 'next/router';
import Image from 'next/image';
import hiImage from 'public/hi.png';

import AniButton from '../atoms/AniButton';

const Header = () => {
  const menuList = ['about', 'skills', 'experience', 'projects', 'Goals'];
  const {
    replace,
    pathname,
    query: { target },
  } = useRouter();
  const [scrollOpacity, setScrollOpacity] = useState(0); // 스크롤에 따른 투명도 상태 관리

  const handleClickMenu = (id: string) => {
    replace({ query: { target: id } }, undefined, { scroll: false });
  };
  const handleclickTitle = () => {
    replace({ pathname });
  };

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
      if (opacity <= 1) {
        setScrollOpacity(opacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container opacity={scrollOpacity}>
      <MenuDiv>
        {menuList.map((menu) => (
          <CodeSpan
            key={menu}
            fontSize="--font-size-x-sm"
            color={target === menu ? 'codeGreen' : 'white'}
            onClick={() => handleClickMenu(menu)}>
            {menu.toUpperCase()}
          </CodeSpan>
        ))}
      </MenuDiv>
      <div className="title" onClick={handleclickTitle}>
        <Image width={60} height={60} src={hiImage} alt="me" />
        <CodeSpan thick fontSize="--font-size-sm">
          Byun Kiwon
        </CodeSpan>
      </div>
      <div>
        <AniButton color="inherit">Resume</AniButton>
      </div>
    </Container>
  );
};

const MenuDiv = styled.div`
  display: flex;
  gap: 10px;
  span {
    cursor: pointer;
  }
`;

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
  padding: 0px 50px;
  text-align: center;
  opacity: ${({ opacity }) => opacity};
  color: ${({ theme }) => theme.colors.codeGreen};
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      position: relative;
      bottom: 5px;
    }
    span {
      position: relative;
      right: 20px;
      top: 5px;
    }
  }
`;

export default memo(Header);
