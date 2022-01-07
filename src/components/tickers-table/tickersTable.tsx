import React from 'react';
import Spinner from 'components/spinner';
import { Header } from './components/header';
import { TableRow } from './components/row';

import { Ticker } from 'types/types';
import { Container, SpinnerContainer } from './styles';

type TickersTableProps = {
  tickers: Ticker[];
};

export const TickersTable: React.FC<TickersTableProps> = ({
  tickers,
}: TickersTableProps) => {
  return (
    <Container>
      <Header />
      {tickers.length ? (
        tickers.map((ticker) => <TableRow data={ticker} key={ticker.ticker} />)
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Container>
  );
};
