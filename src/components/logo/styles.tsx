import styled, { keyframes } from 'styled-components';

export const Svg = styled.svg`
  height: 100%;
  height: 100%;
`;

const startup = keyframes`
    0% {
        stroke-dasharray: 100;
        fill-opacity: 0;
    }
    100% {
        stroke-dasharray: 0;
        fill-opacity: 1;
    }
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.primaryWhite};
  stroke: ${({ theme }) => theme.primaryWhite};
  animation: ${startup} 1.5s ease-in;
`;
