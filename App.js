import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/navigation/router';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Router />
  );
}
