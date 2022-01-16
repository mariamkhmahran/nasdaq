import React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import LogoN from 'components/logo-n';
import { PATHS } from '../../globals';

import { Body, Container, Explaination, FlatBtton, Icon, Text, Word } from './styles';

type LocationState = {
  status?: 'OK' | 'ERROR' | number;
};

export const ErrorScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { status } = (location.state as LocationState) || { status: undefined };

  return (
    <motion.div
      initial={{ opacity: 0, height: '100vh' }}
      animate={{ opacity: 1 }}
      transition={{ type: 'keyframes' }}
    >
      <Container>
        <Icon className="fas fa-exclamation hide-on-small-screen" />
        <Body>
          <Text>
            <Word>
              Somethi
              <LogoN />g
            </Word>
            <Word>
              we
              <LogoN />t
            </Word>
            <Word>
              wro
              <LogoN />g
            </Word>
          </Text>
          {status === 429 && (
            <Explaination>
              {
                "You've made too many requests lately. Please wait and try again in a bit."
              }
            </Explaination>
          )}
          <FlatBtton onClick={() => navigate(PATHS.exploreScreen)}>
            Go Back <i className="fas fa-chevron-right" />
          </FlatBtton>
        </Body>
      </Container>
    </motion.div>
  );
};
