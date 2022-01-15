import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  min-width: 150px;
  min-height: 150px;
  border: 3px solid ${({ theme }) => theme.primaryWhite};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizeHeader};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
    width: 100px;
    height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
    width: 50px;
    height: 50px;
  }
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;
