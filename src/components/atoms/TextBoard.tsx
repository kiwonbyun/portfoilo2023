import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface TextBoardProps {
  children: ReactElement | ReactElement[];
}

const TextBoard = ({ children }: TextBoardProps) => {
  return <ColumnContentsDiv>{children}</ColumnContentsDiv>;
};

const ColumnContentsDiv = styled.div`
  margin: 8px 0px 16px 0px;
  display: flex;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px 10px;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  span {
    margin-right: 10px;
  }
`;
export default TextBoard;
