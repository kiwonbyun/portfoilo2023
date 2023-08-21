import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import YouTube, { YouTubeProps } from 'react-youtube';

function YoutubeCard({
  width = '180px',
  height = '350px',
  youtubeId,
  isPlaying,
  setIsPlaying,
}: {
  width?: string;
  height?: string;
  youtubeId: string;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}) {
  const opts: YouTubeProps['opts'] = {
    height: '350px',
    width: '90%',
    playerVars: { fs: 1 },
  };

  return (
    <Container width={width} height={height}>
      {!isPlaying && <Overlay />}
      <YouTube
        videoId={youtubeId}
        opts={opts}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnd={() => setIsPlaying(false)}
        onStateChange={() => setIsPlaying(true)}
      />
      ;
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
  width: 100%;
`;

export default YoutubeCard;
