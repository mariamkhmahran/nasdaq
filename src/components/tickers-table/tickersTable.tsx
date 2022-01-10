import React, { Fragment } from 'react';
import Spinner from 'components/spinner';
import { Header } from './components/header';
import { TableRow } from './components/row';
import { LoadingRow } from './components/loadingRow';

import { useAppState } from 'overmind-state';
import { Container, SpinnerContainer } from './styles';

type TickersTableProps = {
  loading?: boolean;
};

export const TickersTable: React.FC<TickersTableProps> = ({
  loading = false,
}: TickersTableProps) => {
  const { allTickers, resultTickers, nextUrl, searchMode, searchNextUrl } = useAppState();
  const tickers = searchMode ? resultTickers : allTickers;

  const Content = () => {
    const showLoading = loading || (!searchMode && !tickers.length);
    if (showLoading)
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      );

    if (searchMode && !tickers.length) return <TableRow />;

    const hasMore = searchMode ? !!searchNextUrl : !!nextUrl;
    return (
      <Fragment>
        {tickers.map((ticker) => (
          <TableRow data={ticker} key={ticker.ticker} />
        ))}

        {hasMore && <LoadingRow />}
      </Fragment>
    );
  };

  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};
