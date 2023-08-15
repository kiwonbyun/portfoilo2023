import React, { useState } from 'react';
import TitledContainer from '../molecules/TitledContainer';
import { styled } from 'styled-components';
import TextBoard from '../atoms/TextBoard';
import Image from 'next/image';
import codeImage from 'public/code.png';
import goodCodeImage from 'public/goodCode.png';
import RightArrow from '../icons/RightArrow';
import CodeSpan from '../atoms/CodeSpan';
import Button from '../atoms/Button';

const Atomic = () => {
  const [show, setShow] = useState(false);

  return (
    <TitledContainer
      title="For Growing Product 3: 심플한 코드를 위한 아토믹 디자인, 커스텀 훅 패턴 적용"
      id="atomic">
      <ContentSection>
        <FlexDiv data-aos="fade-right">
          <Image src={codeImage} alt="profile" width={150} height={550} />

          <CodeWrapper>
            <code className="code">{`const Sample = ( ) => {`}</code>
            <p className="logics">Logics</p>
            <code
              style={{ marginLeft: '15px' }}
              className="code">{`return (`}</code>
            <p className="view">Views</p>
            <code style={{ marginLeft: '15px' }} className="code">{` )`}</code>
            <code className="code">{`}`}</code>
            <code
              style={{ marginTop: '40px' }}
              className="code">{`export default Sample;`}</code>
          </CodeWrapper>
        </FlexDiv>

        {show && (
          <ArrowWrapper data-aos="fade-left">
            <RightArrow />
          </ArrowWrapper>
        )}

        {show && (
          <HooksWrapper data-aos="fade-left">
            <div className="hooks">
              <CodeSpan color="codePink" className="title">
                /hooks
              </CodeSpan>
              <code>useModal()</code>
              <code>useCalendar()</code>
              <code>usePriceCalculator()</code>
              <code>useToast()</code>
            </div>
            <div className="components">
              <CodeSpan color="codeBlue" className="title">
                /components
              </CodeSpan>
              <code>{`<Modal />`}</code>
              <code>{`<Calendar />`}</code>
              <code>{`<Calculator />`}</code>
              <code>{`<ToastBox />`}</code>
            </div>
          </HooksWrapper>
        )}

        {show && (
          <CodeWrapper data-aos="fade-left">
            <code className="code">{`const Sample = ( ) => {`}</code>
            <div className="hooks">
              <code>useModal()</code>
              <code>useCalendar()</code>
              <code>usePriceCalculator()</code>
              <code>useToast()</code>
            </div>
            <code
              style={{ marginLeft: '15px' }}
              className="code">{`return (`}</code>
            <div className="components">
              <code>{`<Modal />`}</code>
              <code>{`<Calendar />`}</code>
              <code>{`<Calculator />`}</code>
              <code>{`<ToastBox />`}</code>
            </div>
            <code className="code" style={{ marginLeft: '15px' }}>{` )`}</code>
            <code className="code">{`}`}</code>
            <code
              className="code"
              style={{ marginTop: '40px' }}>{`export default Sample;`}</code>
          </CodeWrapper>
        )}

        {show && (
          <Image
            data-aos="fade-left"
            src={goodCodeImage}
            alt="profile"
            width={130}
            height={220}
          />
        )}
      </ContentSection>
      <TextBoard>
        <span>
          <CodeSpan color="codeBlue">•</CodeSpan>Problem Statement: Page파일에
          집중된 Logic, View로 유지보수가 어려움
        </span>
        <span>
          <CodeSpan color="codeBlue">•</CodeSpan>Solution: 재사용 가능한 Logic은
          커스텀 훅으로, 재사용 가능한 View는 아토믹 컴포넌트로 분리
        </span>
        <span>
          <CodeSpan color="codeBlue">•</CodeSpan>Result: 가독성 증가 및 중복되는
          코드 제거
        </span>
        <Button
          onClick={() => {
            setShow((prev) => !prev);
          }}>
          {show ? '적용 전' : '적용 후'}
        </Button>
      </TextBoard>
    </TitledContainer>
  );
};

const FlexDiv = styled.div`
  display: flex;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HooksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .hooks {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    border: 1px dashed ${({ theme }) => theme.colors.codePink};
    width: fit-content;
    padding: 20px 10px;
    position: relative;
    .title {
      position: absolute;
      top: -10px;
      background-color: black;
      padding: 0px 5px;
    }
  }
  .components {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    border: 1px dashed ${({ theme }) => theme.colors.codeBlue};
    width: fit-content;
    padding: 20px 10px;
    position: relative;
    .title {
      position: absolute;
      top: -10px;
      background-color: black;
      padding: 0px 5px;
    }
  }
`;

const CodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  .code {
    font-size: 18px;
  }
  p {
    font-size: 40px;
  }
  .logics {
    height: 170px;
    border: 1px dashed ${({ theme }) => theme.colors.codePink};
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin: 10px 0px;
  }
  .view {
    height: 190px;
    border: 1px dashed ${({ theme }) => theme.colors.codeBlue};
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin: 10px 0px;
  }
  .hooks {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    width: fit-content;
    padding: 20px 10px;
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.codePink};
  }
  .components {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    width: fit-content;
    padding: 20px 10px;

    margin-left: 20px;
    color: ${({ theme }) => theme.colors.codeBlue};
  }
`;

const ContentSection = styled.section`
  margin: 30px 0px 50px 0px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export default Atomic;
