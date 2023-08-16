import React from 'react';
import TitledContainer from '../molecules/TitledContainer';
import CodeSpan from '../atoms/CodeSpan';
import TextBoard from '../atoms/TextBoard';
import { mySkills } from '@/constants/infos';

const Skills = ({ id }: { id: string }) => {
  return (
    <TitledContainer title="SKILLS" id={id}>
      <CodeSpan className="sub-title">Junior Level</CodeSpan>

      <TextBoard>
        <span>
          <CodeSpan>•</CodeSpan>JavaScript
        </span>
      </TextBoard>

      <CodeSpan className="sub-title">Level of Experience</CodeSpan>
      <TextBoard>
        <div>
          {mySkills.map((skill) => (
            <span key={skill}>
              <CodeSpan>•</CodeSpan>
              {skill}
            </span>
          ))}
        </div>
      </TextBoard>
    </TitledContainer>
  );
};

export default Skills;
