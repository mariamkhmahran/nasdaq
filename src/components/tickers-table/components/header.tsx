import React from 'react';
import { Cell, Row } from '../styles';

export const Header: React.FC = () => (
  <Row id="header" className="hide-on-small-screen">
    <Cell header>Ticker</Cell>
    <Cell header large>
      Name
    </Cell>
    <Cell header>Currency</Cell>
    <Cell header>Primary Exchange</Cell>
  </Row>
);
