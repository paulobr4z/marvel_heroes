import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { AppRoutes } from './src/routes/app.routes';

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
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}