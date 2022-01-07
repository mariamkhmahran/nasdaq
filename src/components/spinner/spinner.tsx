import React from 'react';
import logo from '../../assets/nasdaq-white.svg';
import { Container, Img } from './styles';

type SpinnerProps = {
  size?: number;
};

export const Spinner: React.FC<SpinnerProps> = ({ size = 10 }: SpinnerProps) => (
  <Container>
    <Img src={logo} size={size} />
  </Container>
);
