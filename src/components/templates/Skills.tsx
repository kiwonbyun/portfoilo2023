import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import CodeSpan from '../atoms/CodeSpan';
import TextBoard from '../atoms/TextBoard';
import { mySkills } from '@/constants/infos';
import styled from 'styled-components';

const Skills = ({ id }: { id: string }) => {
  return (
    <TitledContainer title="SKILLS" id={id}>
      <GapBox>
        <CodeSpan className="sub-title">Junior Level</CodeSpan>
        <TextBoard>
          <span>
            <CodeSpan>•</CodeSpan>JavaScript
          </span>
        </TextBoard>
      </GapBox>
      <GapBox>
        <CodeSpan className="sub-title">Level of Experience</CodeSpan>
        <TextBoard>
          {mySkills.map((skill) => (
            <span key={skill}>
              <CodeSpan>•</CodeSpan>
              {skill}
            </span>
          ))}
        </TextBoard>
      </GapBox>
    </TitledContainer>
  );
};
const GapBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default Skills;
