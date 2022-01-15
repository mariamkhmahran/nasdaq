import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { motion } from 'framer-motion';

import { useActions } from 'overmind-state';

import StatisticsGrid from 'components/statistics-grid';
import Initials from 'components/initials';
import Spinner from 'components/spinner';
import { PATHS } from '../../globals';

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
    ticker &&
      getTickerData(ticker).then(({ error, success, data }) => {
        if (error || !data) navigate(PATHS.errorScreen);

        if (success) setTickerData(data);
      });
  }, [ticker]);

  if (!tickerData)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  const { name, branding, market, description } = tickerData;
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'keyframes' }}
      >
        <Header>
          <Back onClick={() => navigate(PATHS.exploreScreen)}>
            <i className="fas fa-chevron-left" />
          </Back>
          <PageTitle>Details</PageTitle>
        </Header>
        <Overview>
          <TickerContainer>
            <Initials ticker={ticker || ''} logo={branding?.logo_url} />
            <Section>
              <Ticker>{ticker}</Ticker>
              <Name>{name ? name : 'n/a'}</Name>
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
              <Text>{market ? Capitalize(market) : 'n/a'}</Text>
            </Section>
            <Section>
              <SubTitle>Description</SubTitle>
              <Text>{description ? Capitalize(description) : 'n/a'}</Text>
            </Section>
          </DataContainer>
        </Details>
      </motion.div>
    </Container>
  );
};
