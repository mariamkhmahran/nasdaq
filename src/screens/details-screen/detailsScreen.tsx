import Spinner from 'components/spinner';
import { useActions } from 'overmind-state';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TickerDetails } from 'types/types';
import { Container, SpinnerContainer } from './styles';

export const DetailsScreen: React.FC = () => {
  const { ticker } = useParams();
  const { getTickerDetails } = useActions();
  const [details, setDetails] = useState<TickerDetails>();

  useEffect(() => {
    //TODO: handle error
    ticker &&
      getTickerDetails(ticker).then(({ success, data }) => {
        if (success) setDetails(data);
      });
  }, [ticker]);

  if (!details)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  return (
    <Container>
      <div>{details.name}</div>
    </Container>
  );
};
