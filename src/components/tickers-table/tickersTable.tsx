import React, { Fragment } from 'react';
import Spinner from 'components/spinner';
import { Header } from './components/header';
import { TableRow } from './components/row';
import { LoadingRow } from './components/loadingRow';

import { useAppState } from 'overmind-state';
import { Ticker } from 'types/types';
import { Container, SpinnerContainer } from './styles';

type TickersTableProps = {
  tickers: Ticker[];
};

export const TickersTable: React.FC<TickersTableProps> = ({
  tickers,
}: TickersTableProps) => {
  const { nextUrl } = useAppState();

  return (
    <Container>
      <Header />
      {tickers.length ? (
        <Fragment>
          {tickers.map((ticker) => (
            <TableRow data={ticker} key={ticker.ticker} />
          ))}

          {!!nextUrl && <LoadingRow />}
        </Fragment>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Container>
  );
};
