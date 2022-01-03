import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryBlue};
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const flicker = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;
