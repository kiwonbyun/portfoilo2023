import CodeSpan from '@/components/atoms/CodeSpan';
import Reveal from '@/components/atoms/Reveal';
import YoutubeCard from '@/components/molecules/YoutubeCard';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface PresentationProps {
  youtubeId: string;
  title: string;
  children: ReactNode;
  height?: string;
  width?: string;
}

function Presentation({
  youtubeId,
  title,
  children,
  height,
  width,
}: PresentationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Container>
      <YoutubeCard
        youtubeId={youtubeId}
        width={width}
        height={height}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {!isPlaying && (
        <div className="description">
          <Reveal className="title">
            <CodeSpan fontSize="--font-size-sm">{`•${title}`}</CodeSpan>
          </Reveal>
          {children}
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 530px;
  .description {
    position: relative;
    bottom: 60px;
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
