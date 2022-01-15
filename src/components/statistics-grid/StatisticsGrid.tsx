import React from 'react';
import { TickerData } from 'types/types';
import { Cell, CellName, CellValue, Container } from './styles';

type StatisticsGridProps = {
  OHLC: TickerData;
};

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({
  OHLC: { open, close, high, low, volume },
}: StatisticsGridProps) => (
  <Container>
    <Cell>
      <CellName>Open</CellName>
      <CellValue>{open || 'n/a'}</CellValue>
    </Cell>
    <Cell>
      <CellName>Close</CellName>
      <CellValue>{close || 'n/a'}</CellValue>
    </Cell>
    <Cell>
      <CellName>High</CellName>
      <CellValue>{high || 'n/a'}</CellValue>
    </Cell>
    <Cell>
      <CellName>Low</CellName>
      <CellValue>{low || 'n/a'}</CellValue>
    </Cell>
    <Cell>
      <CellName>Volume</CellName>
      <CellValue>{volume || 'n/a'}</CellValue>
    </Cell>
  </Container>
);
