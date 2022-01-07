import styled from 'styled-components';
import { flicker } from 'mainStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Img = styled.img<{ size: number }>`
  width: ${({ size }) => size * 5}px;
  animation: ${flicker} 2s infinite ease-in;
`;
