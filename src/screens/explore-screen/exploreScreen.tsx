import React from 'react';
import { Container, Header, Icon, Input, SearchBar, Title } from './styles';

export const ExploreScreen: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Stocks</Title>
        <SearchBar>
          <Icon>
            <i className="fas fa-search" />
          </Icon>
          <Input placeholder="Search" />
        </SearchBar>
      </Header>
    </Container>
  );
};
