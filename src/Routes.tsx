import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PATHS } from './globals';

import ExploreScreen from 'screens/explore-screen';
import DetailsScreen from 'screens/details-screen';
import { NotFound } from 'screens/not-found/NotFound';
import { ErrorScreen } from 'screens/error-screen/errorScreen';

const AppRoutes: React.FC = () => (
  <AnimatePresence exitBeforeEnter>
    <Routes>
      <Route path={PATHS.exploreScreen} element={<ExploreScreen />} />
      <Route path={PATHS.detailsScreen} element={<DetailsScreen />} />
      <Route path={PATHS.errorScreen} element={<ErrorScreen />} />
      <Route path="/" element={<Navigate to={PATHS.exploreScreen} />} />
      <Route path={'/nasdaq'} element={<Navigate to={PATHS.exploreScreen} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AnimatePresence>
);

export default AppRoutes;
