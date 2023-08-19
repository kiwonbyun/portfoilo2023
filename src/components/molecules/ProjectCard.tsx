import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function ProjectCard({
  src,
  width = '180px',
  height = '300px',
  borderRadius = '0px',
}: {
  src: StaticImport;
  width?: string;
  height?: string;
  borderRadius?: string;
}) {
  return (
    <Container width={width} height={height}>
      <Overlay />
      <Image
        src={src}
        fill
        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 30vw"
        alt="hi"
        priority
        style={{ objectFit: 'cover', borderRadius }}
      />
    </Container>
  );
}

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  ); /* 그라디에이션 설정 */
  pointer-events: none; /* 그라디에이션에 마우스 이벤트를 허용하지 않습니다 */
  z-index: 9;
`;

const Container = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
`;

export default ProjectCard;
