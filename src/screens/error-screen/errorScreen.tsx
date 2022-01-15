import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

import LogoN from 'components/logo-n';
import { PATHS } from '../../globals';

import { Body, Container, FlatBtton, Icon, Text, Word } from './styles';

export const ErrorScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, height: '100vh' }}
      animate={{ opacity: 1 }}
      transition={{ type: 'keyframes' }}
    >
      <Container>
        <Icon className="fas fa-exclamation" />
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
          <FlatBtton onClick={() => navigate(PATHS.exploreScreen)}>
            Go Back <i className="fas fa-chevron-right" />
          </FlatBtton>
        </Body>
      </Container>
    </motion.div>
  );
};
