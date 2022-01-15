import React, { useEffect } from 'react';
import { useActions, useAppState } from 'overmind-state';

import AppRoutes from 'Routes';
import { SplashScreen } from 'screens/splash-screen/splashScreen';

import { AppContainer } from 'mainStyles';

const App: React.FC = () => {
  const { onSplashScreen } = useAppState();
  const { setOnSplashScreen } = useActions();

  useEffect(() => {
    setTimeout(() => {
      setOnSplashScreen(false);
    }, 3000);
  }, []);

  return <AppContainer>{onSplashScreen ? <SplashScreen /> : <AppRoutes />}</AppContainer>;
};

export default App;
