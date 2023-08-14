import React, { ReactElement } from 'react';
import { styled } from 'styled-components';
import TitleDivider from '../atoms/TitleDivider';

import { Nanum_Gothic_Coding } from 'next/font/google';
const nanumCodeing = Nanum_Gothic_Coding({
  weight: '400',
  subsets: ['latin'],
});

interface TitledContainerProps {
  title: string;
  children: ReactElement | ReactElement[];
}

const TitledContainer = ({ title, children }: TitledContainerProps) => {
  return (
    <SkillsDiv className={nanumCodeing.className}>
      <TitleDivider>{title}</TitleDivider>
      <div className="contents">{children}</div>
    </SkillsDiv>
  );
};
const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0px;
  .contents {
    margin-left: 15px;
  }
`;

export default TitledContainer;
