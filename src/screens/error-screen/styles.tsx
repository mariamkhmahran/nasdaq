import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: ${({ theme }) => theme.primaryWhite};
`;

export const Icon = styled.i`
  font-size: 150pt;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Word = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
`;

export const FlatBtton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizeBody};
  font-family: ${({ theme }) => theme.fonts.bold};
  cursor: pointer;
  gap: 10px;
  margin-top: 50px;
`;
