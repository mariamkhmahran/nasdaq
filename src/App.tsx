import React from 'react';
import { AppContainer } from 'mainStyles';
import { SplashScreen } from 'screens/splash-screen/splashScreen';

const App: React.FC = () => {
  const isLoading = true;
  return <AppContainer>{isLoading ? <SplashScreen /> : <></>}</AppContainer>;
};

export default App;
