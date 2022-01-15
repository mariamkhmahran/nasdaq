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
      <CellValue>{open}</CellValue>
    </Cell>
    <Cell>
      <CellName>Close</CellName>
      <CellValue>{close}</CellValue>
    </Cell>
    <Cell>
      <CellName>High</CellName>
      <CellValue>{high}</CellValue>
    </Cell>
    <Cell>
      <CellName>Low</CellName>
      <CellValue>{low}</CellValue>
    </Cell>
    <Cell>
      <CellName>Volume</CellName>
      <CellValue>{volume}</CellValue>
    </Cell>
  </Container>
);
