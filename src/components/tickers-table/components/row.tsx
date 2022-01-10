import React from 'react';
import { Ticker } from 'types/types';
import { Cell, Row } from '../styles';

type TableRowProps = {
  data?: Ticker;
};

export const TableRow: React.FC<TableRowProps> = ({ data }: TableRowProps) => {
  if (!data) return <Row empty> No Results Found. </Row>;

  const { ticker, name, currency_name, primary_exchange } = data;

  return (
    <Row>
      <Cell bold>{ticker}</Cell>
      <Cell large>{name}</Cell>
      <Cell className="hide-on-small-screen">{currency_name}</Cell>
      <Cell className="hide-on-small-screen">{primary_exchange}</Cell>
    </Row>
  );
};
