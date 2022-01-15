import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

import LogoN from 'components/logo-n';
import { PATHS } from '../../globals';

import { Container, FlatBtton, FourOhFour, Text, Word } from './styles';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, height: '100vh' }}
      animate={{ opacity: 1 }}
      transition={{ type: 'keyframes' }}
    >
      <Container>
        <FourOhFour>404</FourOhFour>
        <Text>
          <Word>Page</Word>
          <Word>
            <LogoN />
            ot
          </Word>
          <Word>Found</Word>
        </Text>
        <FlatBtton onClick={() => navigate(PATHS.exploreScreen)}>
          Explore Stocks <i className="fas fa-chevron-right" />
        </FlatBtton>
      </Container>
    </motion.div>
  );
};
