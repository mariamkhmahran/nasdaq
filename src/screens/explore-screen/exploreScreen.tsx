import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useActions, useAppState } from 'overmind-state';

import TickersTable from 'components/tickers-table';
import { PATHS } from '../../globals';

import { Container, Header, Icon, Input, SearchBar, TableContainer } from './styles';
import { PageTitle } from 'mainStyles';
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

  const { allTickers } = useAppState();
  const { loadTickers, startSearch, stopSearch, searchTickers } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    !allTickers.length && getNext();
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
    await loadTickers(apiOptions)
      .then(({ error, status }) => {
        if (error) navigate(PATHS.errorScreen, { state: { status } });
      })
      .finally(() => setSentRequest(false));
  };

  const onScroll: React.UIEventHandler<HTMLDivElement> = ({ currentTarget }) => {
    const { scrollHeight, scrollTop, clientHeight } = currentTarget;
    const bottomOfWindow = scrollHeight - scrollTop <= clientHeight + 50;

    bottomOfWindow && !sentRequest && getNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'keyframes' }}
    >
      <Container onScroll={onScroll}>
        <Header>
          <PageTitle className="hide-on-small-screen">Stocks</PageTitle>
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
    </motion.div>
  );
};
