import React from 'react';
import { Container, Logo } from './styles';

type InitialsProps = {
  ticker: string;
  logo?: string;
};

export const Initials: React.FC<InitialsProps> = ({ ticker, logo }: InitialsProps) => {
  const url = logo ? `${logo}?apiKey=${process.env.REACT_APP_API_KEY}` : undefined;

  return (
    <Container className="hide-on-small-screen">
      {url ? <Logo src={url} alt={ticker} /> : ticker}
    </Container>
  );
};
