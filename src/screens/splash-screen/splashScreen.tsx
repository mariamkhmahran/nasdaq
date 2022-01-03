import React from 'react';
import logo from 'assets/nasdaq-logo.svg';
import { Container, Footer, Logo, LogoContainer, Text } from './styles';

export const SplashScreen: React.FC = () => (
  <Container>
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
    <Footer>
      <Text>By</Text>
      <Text>Mariam Mahran</Text>
    </Footer>
  </Container>
);
