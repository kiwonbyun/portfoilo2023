import CodeSpan from '@/components/atoms/CodeSpan';
import Reveal from '@/components/atoms/Reveal';
import ProjectCard from '@/components/molecules/ProjectCard';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface PresentationProps {
  src: StaticImport;
  title: string;
  children: ReactNode;
  codeLink?: string;
  showLink?: boolean;
  linkIcon?: React.ReactElement;
  linkText?: string;
  height?: string;
  width?: string;
}

function Presentation({
  src,
  title,
  children,
  codeLink,
  showLink = true,
  linkIcon,
  linkText,
  height,
  width,
}: PresentationProps) {
  return (
    <Container>
      <ProjectCard src={src} width={width} height={height} />
      <div className="description">
        <Reveal className="title">
          <CodeSpan fontSize="--font-size-sm">{`•${title}`}</CodeSpan>
        </Reveal>
        {children}
        {showLink && (
          <Link href={codeLink ?? ''} legacyBehavior>
            <CenterLink target="_blank">
              {linkIcon}
              <CodeSpan fontSize="--font-size-x-sm" color="white">
                {linkText ?? ''}
              </CodeSpan>
            </CenterLink>
          </Link>
        )}
      </div>
    </Container>
  );
}
const CenterLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 3px;
  gap: 3px;
  span {
    &:hover {
      color: ${({ theme }) => theme.colors.codePink};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  .description {
    position: relative;
    bottom: 80px;
    left: 20px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    max-width: 800px;
    word-break: keep-all;
    line-height: 22px;
    .title {
      margin-bottom: 10px;
    }
  }
`;

export default Presentation;
