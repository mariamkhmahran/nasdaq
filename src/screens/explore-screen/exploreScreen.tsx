import React, { useEffect, useState } from 'react';
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
  const [sentRequest, setSentRequest] = useState(false);
  const { tickers } = useAppState();
  const { loadTickers } = useActions();

  useEffect(() => {
    //TODO: handle error
    getNext();
  }, []);

  const getNext = async () => {
    setSentRequest(true);
    await loadTickers({
      active: true,
      sort: 'ticker',
      order: 'asc',
      limit: 15,
    }).finally(() => setSentRequest(false));
  };

  const onScroll: React.UIEventHandler<HTMLDivElement> = ({ currentTarget }) => {
    const { scrollHeight, scrollTop, clientHeight } = currentTarget;
    const bottomOfWindow = scrollHeight - scrollTop <= clientHeight + 50;

    bottomOfWindow && !sentRequest && getNext();
  };

  return (
    <Container onScroll={onScroll}>
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
