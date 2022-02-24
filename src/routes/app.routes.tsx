import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../pages/home';
import { CharacterInfo } from '../pages/characterInfo';

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='Info' component={CharacterInfo} />
    </Navigator>
  );
}