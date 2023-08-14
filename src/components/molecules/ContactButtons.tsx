import React, { useRef, useState } from 'react';
import Tistory from '../icons/Tistory';
import Email from '../icons/Email';
import Phone from '../icons/Phone';
import { styled } from 'styled-components';
import Link from 'next/link';
import { myEmail } from '@/constants/infos';
import TypingText from '../atoms/TypingText';

const ContactButtons = () => {
  const phoneRef = useRef<any | null>(null);
  const [show, setShow] = useState<string | null>(null);
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      alert('이메일 주소 bkw9603@gamil.com 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
    setShow('email');
  };

  const handleClickPhone = () => {
    if (window.confirm('전화번호는 010-4003-3755입니다. 바로 전화해볼까요?')) {
      if (!phoneRef.current) return;
      phoneRef.current.click();
    }
    setShow('phone');
  };

  return (
    <Container>
      <Link href={'https://pungwa.tistory.com/'} legacyBehavior>
        <a target="_blank">
          <Tistory size={35} />
        </a>
      </Link>
      <EmailWrapper onClick={handleEmailClick}>
        <Email size={35} />
      </EmailWrapper>
      <div onClick={handleClickPhone}>
        <Phone size={35} />
      </div>
      <a href="tel:010-4003-3755" ref={phoneRef}></a>
      {show === 'email' && <TypingText text="bkw9603@gmail.com" />}
      {show === 'phone' && <TypingText text="010-4003-3755" />}
    </Container>
  );
};
const EmailWrapper = styled.div`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 60px;
`;

export default ContactButtons;
