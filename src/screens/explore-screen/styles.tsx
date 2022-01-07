import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 25px 15px 10px;
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.primaryBlueDark};
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizeXL};
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fonts.bold};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 40%;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    height: 30px;
    width: 100%;
  }
`;

export const Icon = styled.div`
  height: 100%;
  width: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 7px 0px 0px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryWhite};

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  }
`;

export const Input = styled.input`
  height: 100%;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 0px 7px 7px 0px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-family: ${({ theme }) => theme.fonts.light};

  ::placeholder {
    color: ${({ theme }) => theme.primaryWhite};
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.fontSizeExtraSmall};
    padding-left: 5px;
  }
`;

export const TableContainer = styled.div`
  padding: 0px 40px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 0px 15px;
  }
`;
