import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

interface TypingTextProps {
  text: string;
  color?: 'codeGreen' | 'codePink' | 'codeBlue' | 'white';
  size?: string;
  noBlink?: boolean;
}

const TypingText = ({
  text,
  color = 'white',
  size = '14px',
  noBlink = false,
}: TypingTextProps) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const typingRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.5 }, // 컴포넌트가 화면의 50% 이상 보일 때 감지
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);
  return (
    <Typing
      ref={typingRef}
      color={color}
      animationstarted={animationStarted.toString()}
      size={size}
      blink={noBlink}>
      <div className="typing-demo">{text}</div>
    </Typing>
  );
};

const Typing = styled.div<{
  color: string;
  animationstarted: string;
  size: string;
  blink: boolean;
}>`
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes delayedTyping {
    0% {
      width: 0;
    }
    50% {
      width: 0;
    }
    100% {
      width: 14ch;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  .typing-demo {
    width: fit-content;
    animation: ${({ animationstarted }) =>
      animationstarted === 'true'
        ? 'delayedTyping 1.5s steps(22), blink 0.5s step-end infinite alternate;'
        : 'none'};
    white-space: nowrap;
    overflow: hidden;
    border-right: ${({ blink }) => (blink ? 'none' : ' 3px solid')};
    font-size: ${({ size }) => size};
    color: ${({ theme, color }) => theme.colors[color]};
  }
`;
export default TypingText;
