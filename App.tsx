import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Home } from './src/pages/home';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
    "gilroy-bold": require("./src/assets/fonts/gilroy-bold.ttf"),
    "gilroy-heavy": require("./src/assets/fonts/gilroy-heavy.ttf"),
    "gilroy-medium": require("./src/assets/fonts/gilroy-medium.ttf"),
    "gilroy-regular": require("./src/assets/fonts/gilroy-regular.ttf"),
    "gilroy-semibold": require("./src/assets/fonts/gilroy-semibold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor="white" />
      <Home />
    </ThemeProvider>
  );
}