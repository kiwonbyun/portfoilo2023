import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';
import WorkingExperience from './WorkingExperience';

function SkillAndEx() {
  return (
    <Container>
      <Skills id="skills" />
      <WorkingExperience id="experience" />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  margin-top: 50px;
`;

export default SkillAndEx;
