import React from 'react';
import { Text, View } from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
