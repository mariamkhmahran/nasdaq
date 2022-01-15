import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid ${({ theme }) => theme.primaryWhite};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizeHeader};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 150px;
  object-fit: contain;
`;
