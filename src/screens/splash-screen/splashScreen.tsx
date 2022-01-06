import React from 'react';
import Logo from 'components/logo';
import { Container, Footer, LogoContainer, Text } from './styles';

export const SplashScreen: React.FC = () => (
  <Container>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <Footer>
      <Text>By</Text>
      <Text>Mariam Mahran</Text>
    </Footer>
  </Container>
);
