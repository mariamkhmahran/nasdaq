import React, { useEffect } from 'react';
import { AppContainer } from 'mainStyles';
import { SplashScreen } from 'screens/splash-screen/splashScreen';
import { useActions, useAppState } from 'overmind-state';
import AppRoutes from 'Routes';

const App: React.FC = () => {
  const { isLoading } = useAppState();
  const { setIsLoading } = useActions();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return <AppContainer>{isLoading ? <SplashScreen /> : <AppRoutes />}</AppContainer>;
};

export default App;
