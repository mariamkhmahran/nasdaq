import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizeXL};
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fonts.bold};

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-size: ${({ theme }) => theme.fontSizeLarge};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 40%;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    flex-grow: 1;
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
`;
