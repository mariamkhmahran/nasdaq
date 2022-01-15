import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0px 40px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
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

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    width: fit-content;
    height: fit-content;
    background-color: transparent !important;
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
    background-color: ${({ theme }) => theme.primaryBlueDark};
    position: sticky;
    top: 0;
    height: 68px;
    gap: 5px;
  }
`;

export const Overview = styled.div`
  padding: 40px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 30px 15px 0px;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    padding: 30px 0px 0px;
  }
`;

export const TickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 0px 20px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  }
`;

export const Ticker = styled.div`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizeLarge};
  }
`;

export const Details = styled.div`
  padding: 0px 50px 30px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 0px 15px 30px;
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    padding: 0px 0px 30px;
  }
`;

export const DataContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.primaryBlueDark};
  width: 100%;
  margin-top: 20px;
  padding: 20px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 30px 20px;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizeBody};
  line-height: 1;
`;

export const SubTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.extraLight};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  }
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizeBody};

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-size: ${({ theme }) => theme.fontSizeSmall};
  }
`;
