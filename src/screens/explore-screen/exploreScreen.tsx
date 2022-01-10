import React, { useEffect, useState } from 'react';
import { useActions } from 'overmind-state';
import TickersTable from 'components/tickers-table';

import {
  Container,
  Header,
  Icon,
  Input,
  SearchBar,
  Title,
  TableContainer,
} from './styles';
import { QueryConfig } from 'overmind-state/types';

const apiOptions: QueryConfig = {
  active: true,
  sort: 'ticker',
  order: 'asc',
  limit: 15,
};

export const ExploreScreen: React.FC = () => {
  const [sentRequest, setSentRequest] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const { loadTickers, startSearch, stopSearch, searchTickers } = useActions();

  useEffect(() => {
    //TODO: handle error
    getNext();
  }, []);

  useEffect(() => {
    if (!searchTerm) stopSearch().then(() => setLoading(false));
    else setLoading(true);

    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        startSearch()
          .then(() => searchTickers({ ...apiOptions, search: searchTerm }))
          .finally(() => setLoading(false));
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const getNext = async () => {
    setSentRequest(true);
    await loadTickers(apiOptions).finally(() => setSentRequest(false));
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
          <Input
            placeholder="Search"
            onChange={({ target }) => setSearchTerm(target.value)}
            value={searchTerm}
          />
        </SearchBar>
      </Header>
      <TableContainer>
        <TickersTable loading={loading} />
      </TableContainer>
    </Container>
  );
};
