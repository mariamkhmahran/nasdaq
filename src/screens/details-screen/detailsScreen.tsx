import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useActions } from 'overmind-state';

import Initials from 'components/initials';
import Spinner from 'components/spinner';

import { TickerData } from 'types/types';
import { PageTitle } from 'mainStyles';
import {
  Back,
  Container,
  Header,
  Name,
  NameDetails,
  Overview,
  SpinnerContainer,
  Ticker,
  TickerContainer,
} from './styles';

export const DetailsScreen: React.FC = () => {
  const [details, setDetails] = useState<TickerData>();

  const { ticker } = useParams();
  const { getTickerData } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    //TODO: handle error
    ticker &&
      getTickerData(ticker).then(({ success, data }) => {
        if (success) setDetails(data);
      });
  }, [ticker]);

  if (!details)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  const {
    name,
    branding: { logo_url },
  } = details;
  return (
    <Container>
      <Header>
        <Back onClick={() => navigate(`/explore`)}>
          <i className="fas fa-chevron-left" />
        </Back>
        <PageTitle>Details</PageTitle>
      </Header>
      <Overview>
        <TickerContainer>
          <Initials ticker={ticker || ''} logo={logo_url} />
          <NameDetails>
            <Ticker>{ticker}</Ticker>
            <Name>{name}</Name>
          </NameDetails>
        </TickerContainer>
      </Overview>
    </Container>
  );
};
