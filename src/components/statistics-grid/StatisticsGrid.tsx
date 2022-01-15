import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import { TickerData } from 'types/types';
import { Cell, CellName, CellValue, Container, Currency } from './styles';

type StatisticsGridProps = {
  OHLC: TickerData;
};

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({
  OHLC: { open, close, high, low, volume, currency_name },
}: StatisticsGridProps) => {
  const Symbol = <Currency> {getSymbolFromCurrency(currency_name)}</Currency>;

  return (
    <Container>
      <Cell>
        <CellName>Open</CellName>
        <CellValue>
          {open && Symbol}
          {open || 'n/a'}
        </CellValue>
      </Cell>
      <Cell>
        <CellName>Close</CellName>
        <CellValue>
          {close && Symbol}
          {close || 'n/a'}
        </CellValue>
      </Cell>
      <Cell>
        <CellName>High</CellName>
        <CellValue>
          {high && Symbol}
          {high || 'n/a'}
        </CellValue>
      </Cell>
      <Cell>
        <CellName>Low</CellName>
        <CellValue>
          {low && Symbol}
          {low || 'n/a'}
        </CellValue>
      </Cell>
      <Cell>
        <CellName>Volume</CellName>
        <CellValue>{volume || 'n/a'}</CellValue>
      </Cell>
    </Container>
  );
};
