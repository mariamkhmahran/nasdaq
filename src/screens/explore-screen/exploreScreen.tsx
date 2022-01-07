import React, { useEffect } from 'react';
import { useActions, useAppState } from 'overmind-state';

import {
  Container,
  Header,
  Icon,
  Input,
  SearchBar,
  Title,
  TableContainer,
} from './styles';
import TickersTable from 'components/tickers-table';

export const ExploreScreen: React.FC = () => {
  const { tickers } = useAppState();
  const { loadTickers } = useActions();

  useEffect(() => {
    //TODO: handle error
    getNext();
  }, []);

  const getNext = () =>
    loadTickers({
      active: true,
      sort: 'ticker',
      order: 'asc',
      limit: 10,
    });

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
      <TableContainer>
        <TickersTable tickers={tickers} />
      </TableContainer>
    </Container>
  );
};
