import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryBlue};
  color: ${({ theme }) => theme.primaryWhite};
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #fff;
  }
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

export const PageTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizeHeader};
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  line-height: 0.75;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-size: ${({ theme }) => theme.fontSizeHeaderMobile};
  }
`;
