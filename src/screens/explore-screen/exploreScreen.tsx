import React, { useEffect, useState } from 'react';
import { Ticker } from 'types/types';
import { useActions } from 'overmind-state';

import { Container, Header, Icon, Input, SearchBar, Title } from './styles';

export const ExploreScreen: React.FC = () => {
  const [tickers, settickers] = useState<Ticker[]>();
  const { loadTickers } = useActions();

  useEffect(() => {
    loadTickers({
      active: true,
      sort: 'ticker',
      order: 'asc',
      limit: 10,
    }).then(({ success, data }) => {
      //TODO: handle error
      if (success) settickers(data);
    });
  }, []);

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
