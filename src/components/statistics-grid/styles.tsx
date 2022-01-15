import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  width: 100%;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
    grid-gap: 20px 20px;
  }
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CellName = styled.div`
  font-size: ${({ theme }) => theme.fontSizeSmall};

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  }
`;

export const CellValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-family: ${({ theme }) => theme.fonts.bold};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.fontSizeLarge};
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizeBody};
  }
`;
