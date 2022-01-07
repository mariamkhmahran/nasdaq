import React, { useEffect } from 'react';
import { AppContainer } from 'mainStyles';
import { SplashScreen } from 'screens/splash-screen/splashScreen';
import { useActions, useAppState } from 'overmind-state';
import AppRoutes from 'Routes';

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
