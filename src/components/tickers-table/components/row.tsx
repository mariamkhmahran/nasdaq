import React from 'react';
import { useNavigate } from 'react-router';
import { Ticker } from 'types/types';
import { Cell, Row } from '../styles';

type TableRowProps = {
  data?: Ticker;
};

export const TableRow: React.FC<TableRowProps> = ({ data }: TableRowProps) => {
  const navigate = useNavigate();

  if (!data) return <Row empty> No Results Found. </Row>;

  const { ticker, name, currency_name, primary_exchange } = data;

  return (
    <Row onClick={() => navigate(`/details/${ticker}`)}>
      <Cell bold>{ticker}</Cell>
      <Cell large>{name}</Cell>
      <Cell className="hide-on-small-screen">{currency_name}</Cell>
      <Cell className="hide-on-small-screen">{primary_exchange}</Cell>
    </Row>
  );
};
