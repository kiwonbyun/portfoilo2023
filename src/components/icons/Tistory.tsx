import React from 'react';
import { SvgProps } from '../../interfaces/IconInterfaces';
import SvgContainer from '../atoms/SvgContainer';

const Tistory = ({ size = 100, fill = 'white' }: SvgProps) => {
  return (
    <SvgContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 459 459"
      width={size}
      height={size}>
      <title>티스토리 로고</title>
      <g>
        <path
          fill={fill}
          d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
        />
      </g>
    </SvgContainer>
  );
};

export default Tistory;
