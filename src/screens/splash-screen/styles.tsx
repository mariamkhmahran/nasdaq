import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    width: 150px;
  }
`;

export const Footer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    flex-direction: column;
    gap: 0;
    padding: 20px;
  }
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.extraLight};
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;
