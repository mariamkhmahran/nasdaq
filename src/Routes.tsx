import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PATHS } from './globals';

import ExploreScreen from 'screens/explore-screen';
import DetailsScreen from 'screens/details-screen';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={PATHS.exploreScreen} element={<ExploreScreen />} />
    <Route path={PATHS.detailsScreen} element={<DetailsScreen />} />
    <Route path="/" element={<Navigate to={PATHS.exploreScreen} />} />
  </Routes>
);

export default AppRoutes;
