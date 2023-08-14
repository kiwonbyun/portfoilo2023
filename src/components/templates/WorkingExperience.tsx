import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import CodeSpan from '../atoms/CodeSpan';
import { myWorkHistory } from '@/constants/infos';
import { styled } from 'styled-components';
import TextBoard from '../atoms/TextBoard';

const WorkingExperience = () => {
  return (
    <TitledContainer title="WORKING EXPERIENCE">
      <ExperienceWrapper>
        <CodeSpan className="sub-title">
          2022.07 ~ Present: 더 파이러츠(인어교주해적단) 프론트엔드 개발
        </CodeSpan>
        <TextBoard>
          {myWorkHistory.map((work, idx) => (
            <span key={idx}>
              <CodeSpan color="codeBlue">•</CodeSpan>
              {work}
            </span>
          ))}
        </TextBoard>
      </ExperienceWrapper>
    </TitledContainer>
  );
};

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default WorkingExperience;
