import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px 0px;
  min-height: calc(100vh - 300px);

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.primaryWhite};
  border-radius: 0px;
  padding: 10px;
  gap: 15px;

  :hover {
    background-color: ${({ theme }) => theme.primaryWhiteTrans};
  }

  &#header {
    border-top: 1px solid ${({ theme }) => theme.primaryWhite};
    border-radius: 7px 7px 0px 0px;

    :hover {
      background-color: transparent;
    }
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Cell = styled.div<{
  large?: boolean;
  bold?: boolean;
  header?: boolean;
}>`
  width: ${({ large }) => (large ? '43%' : '19%')};
  font-family: ${({ theme, bold, header }) =>
    bold ? theme.fonts.bold : header ? theme.fonts.semiBold : theme.fonts.regular};
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    width: 100%;
    font-family: ${({ theme, bold }) => (bold ? theme.fonts.bold : theme.fonts.light)};
    font-size: ${({ theme, bold }) =>
      bold ? theme.fontSizeSmall : theme.fontSizeExtraSmall};
  }
`;

export const SpinnerContainer = styled.div`
  height: calc(100vh - 355px);
  background-color: ${({ theme }) => theme.primaryWhite}20;
`;
