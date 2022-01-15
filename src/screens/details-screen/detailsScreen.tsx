import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useActions } from 'overmind-state';

import StatisticsGrid from 'components/statistics-grid';
import Initials from 'components/initials';
import Spinner from 'components/spinner';

import { Capitalize } from 'utils';

import { TickerData } from 'types/types';
import { PageTitle } from 'mainStyles';
import {
  Back,
  Container,
  DataContainer,
  Details,
  Header,
  Name,
  Overview,
  Section,
  SpinnerContainer,
  SubTitle,
  Text,
  Ticker,
  TickerContainer,
  Title,
} from './styles';

export const DetailsScreen: React.FC = () => {
  const [tickerData, setTickerData] = useState<TickerData>();

  const { ticker } = useParams();
  const { getTickerData } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    //TODO: handle error
    ticker &&
      getTickerData(ticker).then(({ success, data }) => {
        if (success) setTickerData(data);
      });
  }, [ticker]);

  if (!tickerData)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  const {
    name,
    branding: { logo_url },
  } = tickerData;
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
          <Section>
            <Ticker>{ticker}</Ticker>
            <Name>{name}</Name>
          </Section>
        </TickerContainer>
        <DataContainer>
          <Title>Statistics</Title>
          <StatisticsGrid OHLC={tickerData} />
        </DataContainer>
      </Overview>
      <Details>
        <DataContainer>
          <Title>About</Title>
          <Section>
            <SubTitle>Market</SubTitle>
            <Text>{Capitalize(tickerData.market)}</Text>
          </Section>
          <Section>
            <SubTitle>Description</SubTitle>
            <Text>{Capitalize(tickerData.description)}</Text>
          </Section>
        </DataContainer>
      </Details>
    </Container>
  );
};
