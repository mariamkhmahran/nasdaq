import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vh;
  padding: 0px 40px;

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    padding: 0px;
  }
`;

export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryWhiteTrans};
`;

export const Back = styled.button`
  background-color: ${({ theme }) => theme.primaryWhite}20;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSizeBody};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  i {
    margin: 2px 2px 0px 0px;
  }

  :hover {
    background-color: ${({ theme }) => theme.primaryWhiteTrans};
  }
`;

export const Header = styled.div`
  padding: 30px 0px 10px;
  width: 100vw;
  height: fit-content;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 25px 15px 10px;
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.primaryBlueDark};
  }
`;

export const Overview = styled.div`
  padding: 40px 50px;
`;

export const TickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

export const NameDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div``;

export const Ticker = styled.div`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
`;
