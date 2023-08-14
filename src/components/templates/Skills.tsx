import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import CodeSpan from '../atoms/CodeSpan';
import TextBoard from '../atoms/TextBoard';
import { mySkills } from '@/constants/infos';

const Skills = () => {
  return (
    <TitledContainer title="SKILLS">
      <CodeSpan className="sub-title">Junior Level</CodeSpan>

      <TextBoard>
        <span>
          <CodeSpan color="codeBlue">•</CodeSpan>JavaScript
        </span>
      </TextBoard>

      <CodeSpan className="sub-title">Level of Experience</CodeSpan>
      <TextBoard>
        <div>
          {mySkills.map((skill) => (
            <span key={skill}>
              <CodeSpan color="codeBlue">•</CodeSpan>
              {skill}
            </span>
          ))}
        </div>
      </TextBoard>
    </TitledContainer>
  );
};

export default Skills;
